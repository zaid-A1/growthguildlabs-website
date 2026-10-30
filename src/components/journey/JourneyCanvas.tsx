"use client";

import { useMemo, useRef, type RefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

/* ────────────────────────────────────────────────────────────────────────────
   Shared mutable input from the scroll journey.
   ──────────────────────────────────────────────────────────────────────────── */
type ProgressRef = RefObject<number>;

/* Deterministic PRNG so the scene is identical on every load. */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ────────────────────────────────────────────────────────────────────────────
   Space dust: GPU-animated glints drifting in a sheath around the camera
   path. All motion happens in the vertex shader (uTime + per-point seed),
   so the CPU never touches the position buffer after setup. Origin markers
   scattered through the corridor read as distant traffic catching light.
   ──────────────────────────────────────────────────────────────────────────── */

const DUST_VERT = /* glsl */ `
attribute float aSeed;
attribute float aScale;
uniform float uTime;
varying float vSeed;
void main() {
  vec3 p = position;
  float t = uTime * (0.45 + aSeed * 0.8);
  p.x += sin(t * 0.38 + aSeed * 43.0) * 0.85;
  p.y += cos(t * 0.31 + aSeed * 91.0) * 0.65;
  p.z += sin(t * 0.24 + aSeed * 17.0) * 0.55;
  vSeed = aSeed;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = (2.0 + aScale * 4.5) * clamp(12.0 / -mv.z, 0.35, 2.2);
  gl_Position = projectionMatrix * mv;
}
`;

const DUST_FRAG = /* glsl */ `
varying float vSeed;
uniform float uOpacity;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float fall = smoothstep(0.5, 0.06, d);
  vec3 cyan = vec3(0.0, 0.898, 1.0);
  vec3 mint = vec3(0.62, 1.0, 0.78);
  vec3 col = mix(cyan, mint, step(0.72, vSeed));
  col = mix(col, vec3(1.0), step(0.93, vSeed));
  gl_FragColor = vec4(col, fall * uOpacity);
  #include <colorspace_fragment>
}
`;

function SpaceDust() {
  /* Material + frame-tick live behind one memoized closure (mutations stay
     inside the encapsulated API — hooks-compiler friendly). */
  const dust = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      vertexShader: DUST_VERT,
      fragmentShader: DUST_FRAG,
      uniforms: { uTime: { value: 0 }, uOpacity: { value: 0.5 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    return {
      mat,
      tick(elapsed: number) {
        mat.uniforms.uTime.value = elapsed;
      },
    };
  }, []);

  const geometry = useMemo(() => {
    const rnd = mulberry32(2048);
    const count = 300;
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (rnd() - 0.5) * 34;
      positions[i * 3 + 1] = -6 + rnd() * 14;
      positions[i * 3 + 2] = 12 - rnd() * 52; // z: 12 → -40
      seeds[i] = rnd();
      scales[i] = rnd();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    dust.tick(clock.elapsedTime);
  });

  return <points geometry={geometry} material={dust.mat} frustumCulled={false} />;
}

/* ────────────────────────────────────────────────────────────────────────────
   Planet: shaded sphere + atmosphere rim + orbital accents
   ──────────────────────────────────────────────────────────────────────────── */

const PLANET_VERT = /* glsl */ `
varying vec3 vObj;
varying vec3 vNormalW;
void main() {
  vObj = position;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const PLANET_FRAG = /* glsl */ `
varying vec3 vObj;
varying vec3 vNormalW;
uniform vec3 uLightDir;
uniform float uSeed;

float hash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
    f.z);
}

float fbm(vec3 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.07 + uSeed;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec3 n = normalize(vObj);
  float h = fbm(n * 2.6 + vec3(uSeed));
  float water = smoothstep(0.47, 0.56, h);

  vec3 deep    = vec3(0.016, 0.078, 0.098);   // abyss teal
  vec3 shallow = vec3(0.043, 0.165, 0.192);   // deep teal
  vec3 land    = vec3(0.075, 0.220, 0.160);   // teal-green land
  vec3 peak    = vec3(0.420, 0.640, 0.640);   // pale ridges

  vec3 base = mix(shallow, land, water);
  base = mix(deep, base, smoothstep(0.40, 0.47, h));
  base = mix(base, peak, smoothstep(0.72, 0.86, h) * 0.55);

  float diff = clamp(dot(normalize(vNormalW), normalize(uLightDir)), 0.0, 1.0);
  float shade = 0.18 + 1.05 * diff;

  vec3 col = base * shade;
  // cool neon polar hint
  float pole = smoothstep(0.72, 0.98, abs(n.y));
  col += vec3(0.0, 0.20, 0.26) * pole * (0.35 + 0.3 * diff);

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;

const ATMO_VERT = /* glsl */ `
varying vec3 vN;
varying vec3 vV;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}
`;

const ATMO_FRAG = /* glsl */ `
varying vec3 vN;
varying vec3 vV;
uniform vec3 uColor;
uniform float uPower;
uniform float uStrength;
void main() {
  float rim = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), uPower);
  float glow = rim * uStrength;
  gl_FragColor = vec4(uColor * glow, glow);
  #include <colorspace_fragment>
}
`;

function Planet() {
  const groupRef = useRef<THREE.Group>(null);
  const atmoRef = useRef<THREE.Mesh>(null);
  const moonRef = useRef<THREE.Group>(null);
  const lightDir = useMemo(() => new THREE.Vector3(-0.55, 0.42, 0.72).normalize(), []);
  const glowTex = useMemo(() => makeGlowTexture(), []);

  const surfaceMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: PLANET_VERT,
        fragmentShader: PLANET_FRAG,
        uniforms: {
          uLightDir: { value: lightDir },
          uSeed: { value: 7.31 },
        },
      }),
    [lightDir]
  );

  const atmoMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: ATMO_VERT,
        fragmentShader: ATMO_FRAG,
        uniforms: {
          uColor: { value: new THREE.Color("#00e5ff") },
          uPower: { value: 3.4 },
          uStrength: { value: 1.25 },
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
      }),
    []
  );

  useFrame((_, dt) => {
    if (groupRef.current) groupRef.current.rotation.y += dt * 0.012;
    if (atmoRef.current) atmoRef.current.rotation.y -= dt * 0.006;
    if (moonRef.current) moonRef.current.rotation.y += dt * 0.05;
  });

  return (
    <group position={[0, 0.1, -4]}>
      <group ref={groupRef}>
        <mesh material={surfaceMat}>
          <sphereGeometry args={[3.1, 96, 64]} />
        </mesh>
      </group>

      {/* Atmosphere rim */}
      <mesh ref={atmoRef} material={atmoMat} scale={1.13}>
        <sphereGeometry args={[3.1, 64, 48]} />
      </mesh>

      {/* Aurora ring — a restrained neon orbit accent */}
      <mesh position={[0, 0, 0]} rotation={[0.42, 0, 0.62]}>
        <torusGeometry args={[4.15, 0.012, 8, 128]} />
        <meshBasicMaterial color="#39ff65" transparent opacity={0.34} />
      </mesh>
      <mesh rotation={[0.42 + 1.2, 0, 0.62 - 0.7]}>
        <torusGeometry args={[4.45, 0.01, 8, 128]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.22} />
      </mesh>

      {/* Companion moon — quiet counterweight on a tilted orbit */}
      <group ref={moonRef} rotation={[0.42, 0, 0]} position={[0, 1.1, 0]}>
        <mesh position={[5.1, 0, 0]}>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial
            color="#12242c"
            emissive="#9ad9ff"
            emissiveIntensity={0.35}
            metalness={0.25}
            roughness={0.6}
            flatShading
          />
        </mesh>
        <sprite scale={[0.85, 0.85, 1]} position={[5.1, 0, 0]}>
          <spriteMaterial
            map={glowTex}
            color="#9ad9ff"
            blending={THREE.AdditiveBlending}
            transparent
            depthWrite={false}
            opacity={0.5}
          />
        </sprite>
      </group>
    </group>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Gateway: emissive ring + portal gradient (Scene 3)
   ──────────────────────────────────────────────────────────────────────────── */

const PORTAL_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const PORTAL_FRAG = /* glsl */ `
varying vec2 vUv;
uniform float uTime;
void main() {
  vec2 p = vUv - 0.5;
  float r = length(p) * 2.0;
  float core = smoothstep(0.34, 0.02, r);
  float mid  = smoothstep(0.85, 0.1, r);
  float pulse = 0.82 + 0.18 * sin(uTime * 1.4);
  vec3 cyan = vec3(0.0, 0.898, 1.0);
  vec3 green = vec3(0.224, 1.0, 0.396);
  vec3 col = mix(cyan, green, smoothstep(0.15, 0.8, r)) * pulse;
  float a = core * 0.9 + mid * 0.16;
  gl_FragColor = vec4(col, a);
  #include <colorspace_fragment>
}
`;

function Gateway() {
  const ringRef = useRef<THREE.Mesh>(null);
  const haloARef = useRef<THREE.Mesh>(null);
  const haloBRef = useRef<THREE.Mesh>(null);
  /* Material + a frame-tick method live behind one memoized closure, so the
     hooks-compiler sees mutations happening inside an encapsulated API
     instead of post-render assignment to a memoized value. */
  const portal = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      vertexShader: PORTAL_VERT,
      fragmentShader: PORTAL_FRAG,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    return {
      mat,
      tick(elapsed: number) {
        mat.uniforms.uTime.value = elapsed;
      },
    };
  }, []);

  const studs = useMemo(() => {
    const rnd = mulberry32(99);
    return new Array(10).fill(0).map((_, i) => {
      const a = (i / 10) * Math.PI * 2;
      return {
        pos: [Math.cos(a) * 3.55, Math.sin(a) * 3.55, 0] as const,
        rot: [0, 0, a] as const,
        color: i % 2 === 0 ? "#00e5ff" : "#39ff65",
        s: 0.5 + rnd() * 0.5,
      };
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    portal.tick(t);
    if (ringRef.current) ringRef.current.rotation.z = t * 0.05;
    /* Resonance halos: counter-rotating, slightly tilted, breathing opacity. */
    if (haloARef.current) {
      haloARef.current.rotation.z = t * 0.32;
      haloARef.current.rotation.x = 0.42 + Math.sin(t * 0.5) * 0.18;
      const mA = haloARef.current.material as THREE.MeshBasicMaterial;
      mA.opacity = 0.3 + 0.14 * Math.sin(t * 1.25);
    }
    if (haloBRef.current) {
      haloBRef.current.rotation.z = -t * 0.21;
      haloBRef.current.rotation.y = 0.5 + Math.cos(t * 0.4) * 0.22;
      const mB = haloBRef.current.material as THREE.MeshBasicMaterial;
      mB.opacity = 0.26 + 0.12 * Math.sin(t * 0.95 + 1.7);
    }
  });

  return (
    <group position={[0, 0.2, -24]}>
      <mesh ref={ringRef}>
        <torusGeometry args={[3.55, 0.075, 24, 160]} />
        <meshStandardMaterial
          color="#0b2229"
          emissive="#00e5ff"
          emissiveIntensity={1.35}
          metalness={0.85}
          roughness={0.28}
        />
      </mesh>

      <mesh material={portal.mat}>
        <circleGeometry args={[3.3, 64]} />
      </mesh>

      {/* Resonance halos — read as containment fields around the aperture */}
      <mesh ref={haloARef} rotation={[0.42, 0, 0]}>
        <torusGeometry args={[2.1, 0.007, 8, 128]} />
        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={haloBRef} rotation={[0, 0.5, 0]}>
        <torusGeometry args={[2.62, 0.005, 8, 128]} />
        <meshBasicMaterial
          color="#39ff65"
          transparent
          opacity={0.26}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {studs.map((s, i) => (
        <mesh key={i} position={[s.pos[0], s.pos[1], 0.12]} rotation={[s.rot[0], 0, 0]}>
          <boxGeometry args={[0.16, 0.3, 0.06]} />
          <meshBasicMaterial color={s.color} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Laboratory: floating panels + reactor core + scanning grid (Scene 4)
   ──────────────────────────────────────────────────────────────────────────── */

function Lab() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Mesh>(null);

  const panels = useMemo(() => {
    const rnd = mulberry32(4242);
    return new Array(15).fill(0).map((_, i) => ({
      pos: [
        (rnd() - 0.5) * 18,
        -2.2 + rnd() * 6.6,
        -30.5 - rnd() * 10.5,
      ] as const,
      rot: [0, (rnd() - 0.5) * 0.5, 0] as const,
      w: 1.1 + rnd() * 1.6,
      h: 0.72 + rnd() * 0.7,
      phase: rnd() * Math.PI * 2,
      accent: i % 3 === 0 ? "#39ff65" : "#00e5ff",
    }));
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) groupRef.current.position.y = Math.sin(t * 0.4) * 0.16;
    if (coreRef.current) {
      const s = 1 + Math.sin(t * 1.7) * 0.055;
      coreRef.current.scale.setScalar(s);
      coreRef.current.rotation.y = t * 0.35;
      coreRef.current.rotation.x = t * 0.16;
    }
    /* Containment ring sweeps around the core on a wobbling precession. */
    if (orbitRef.current) {
      orbitRef.current.rotation.x = t * 0.4;
      orbitRef.current.rotation.y = t * 0.23;
      orbitRef.current.rotation.z = Math.sin(t * 0.3) * 0.3;
    }
  });

  return (
    <group>
      {/* Scanning floor */}
      <gridHelper
        args={[64, 44, "#1a6d7a", "#0a2731"]}
        position={[0, -5.6, -35]}
        material-transparent={true}
        material-opacity={0.36}
      />

      <group ref={groupRef}>
        {panels.map((p, i) => (
          <group key={i} position={[p.pos[0], p.pos[1], p.pos[2]]} rotation={[p.rot[0], p.rot[1], p.rot[2]]}>
            <mesh>
              <planeGeometry args={[p.w, p.h]} />
              <meshBasicMaterial color="#0c161d" transparent opacity={0.92} />
            </mesh>
            <lineSegments>
              <edgesGeometry args={[new THREE.PlaneGeometry(p.w, p.h).toNonIndexed()]} />
              <lineBasicMaterial color={p.accent} transparent opacity={0.42} />
            </lineSegments>
            <mesh position={[0, -p.h / 2 - 0.03, 0]}>
              <planeGeometry args={[p.w * 0.62, 0.012]} />
              <meshBasicMaterial color={p.accent} toneMapped={false} transparent opacity={0.7} />
            </mesh>
          </group>
        ))}

        {/* Reactor core */}
        <mesh ref={coreRef} position={[0, 0.6, -38.5]}>
          <icosahedronGeometry args={[0.85, 1]} />
          <meshStandardMaterial
            color="#0b2a30"
            emissive="#39ff65"
            emissiveIntensity={1.15}
            metalness={0.4}
            roughness={0.35}
            flatShading
          />
        </mesh>
        <mesh position={[0, 0.6, -38.5]}>
          <icosahedronGeometry args={[1.16, 1]} />
          <meshBasicMaterial color="#39ff65" wireframe transparent opacity={0.34} />
        </mesh>

        {/* Containment orbit ring */}
        <mesh ref={orbitRef} position={[0, 0.6, -38.5]}>
          <torusGeometry args={[1.62, 0.006, 8, 96]} />
          <meshBasicMaterial
            color="#39ff65"
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Ceiling light strip */}
        <mesh position={[0, 5.4, -36]}>
          <boxGeometry args={[20, 0.05, 0.05]} />
          <meshBasicMaterial color="#00e5ff" toneMapped={false} transparent opacity={0.5} />
        </mesh>
      </group>
    </group>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Ecosystem system: five accent orbs in orbit around the guild core (Scene 5)
   ──────────────────────────────────────────────────────────────────────────── */

const ORB_COLORS = ["#ffb300", "#00e5ff", "#ff1744", "#7c5cff", "#39ff65"];

function makeGlowTexture(): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,0.95)");
  g.addColorStop(0.32, "rgba(255,255,255,0.34)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function OrbitSystem() {
  const groupRef = useRef<THREE.Group>(null);
  const orbRefs = useRef<(THREE.Group | null)[]>([]);
  const glowTex = useMemo(() => makeGlowTexture(), []);

  const orbits = useMemo(() => {
    const rnd = mulberry32(1717);
    return ORB_COLORS.map((color, i) => ({
      color,
      radius: 2.05 + i * 0.42,
      tiltX: (rnd() - 0.5) * 0.85,
      tiltZ: (rnd() - 0.5) * 0.6,
      speed: 0.32 + rnd() * 0.32,
      offset: (i / ORB_COLORS.length) * Math.PI * 2 + rnd() * 0.6,
      orbSize: 0.13 + rnd() * 0.05,
    }));
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) groupRef.current.rotation.y = t * 0.045;
    orbRefs.current.forEach((g, i) => {
      if (!g) return;
      const o = orbits[i];
      const a = o.offset + t * o.speed;
      g.position.set(Math.cos(a) * o.radius, Math.sin(a) * o.radius, 0);
    });
  });

  return (
    <group position={[0, 0, -38.5]} ref={groupRef}>
      {/* core */}
      <mesh>
        <icosahedronGeometry args={[0.62, 1]} />
        <meshStandardMaterial
          color="#10222b"
          emissive="#f3fafc"
          emissiveIntensity={0.7}
          metalness={0.5}
          roughness={0.3}
          flatShading
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.92, 1]} />
        <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.28} />
      </mesh>
      <pointLight color="#00e5ff" intensity={30} distance={14} decay={2} position={[0, 0.4, 0.4]} />

      {orbits.map((o, i) => (
        <group key={i} rotation={[o.tiltX, 0, o.tiltZ]}>
          <mesh>
            <torusGeometry args={[o.radius, 0.006, 6, 128]} />
            <meshBasicMaterial color={o.color} transparent opacity={0.4} blending={THREE.AdditiveBlending} />
          </mesh>
          <group ref={(el) => { orbRefs.current[i] = el; }}>
            <mesh>
              <icosahedronGeometry args={[o.orbSize, 1]} />
              <meshBasicMaterial color={o.color} toneMapped={false} />
            </mesh>
            <sprite scale={[1.15, 1.15, 1]}>
              <spriteMaterial
                map={glowTex}
                color={o.color}
                blending={THREE.AdditiveBlending}
                transparent
                depthWrite={false}
                opacity={0.8}
              />
            </sprite>
          </group>
        </group>
      ))}
    </group>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Camera choreography
   ──────────────────────────────────────────────────────────────────────────── */

const CAM_PATH = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(0, 0.9, 15.5),
    new THREE.Vector3(2.6, 1.7, 10.4),
    new THREE.Vector3(1.2, 0.7, 3.4),
    new THREE.Vector3(0.15, 0.4, -8.5),
    new THREE.Vector3(0, 0.35, -17.5),
    new THREE.Vector3(0, 1.15, -25.2),
    new THREE.Vector3(0, 1.0, -28.6),
  ],
  false,
  "catmullrom",
  0.4
);

const LOOK_PATH = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(-0.6, 0.0, -6),
    new THREE.Vector3(0, -0.05, -4),
    new THREE.Vector3(0, 0.1, -20),
    new THREE.Vector3(0, 0.3, -24),
    new THREE.Vector3(0, 0.4, -33),
    new THREE.Vector3(0, 0.35, -38),
    new THREE.Vector3(0, 0, -38.5),
  ],
  false,
  "catmullrom",
  0.4
);

function SceneRoot({ progressRef }: { progressRef: ProgressRef }) {
  const { camera } = useThree();
  const pointer = useRef(new THREE.Vector2(0, 0));
  const smooth = useRef(0);
  const prevProgress = useRef(0);
  const swayVelocity = useRef(0);

  useFrame(({ clock, pointer: p }, dt) => {
    // Smooth the scroll-linked progress so camera moves feel cinematic.
    const target = progressRef.current ?? 0;
    const prev = prevProgress.current;
    smooth.current += (target - smooth.current) * Math.min(1, dt * 4.2);
    prevProgress.current = target;

    // Scroll-velocity sway: fast flicks add a lean to the look target,
    // heavily damped so slow reading is unaffected.
    const inst = dt > 0 ? (target - prev) / dt : 0;
    swayVelocity.current += (inst - swayVelocity.current) * Math.min(1, dt * 2.2);
    const sway = THREE.MathUtils.clamp(swayVelocity.current, -2.4, 2.4) * 0.35;

    const t = smooth.current;
    const pos = CAM_PATH.getPoint(t);
    const look = LOOK_PATH.getPoint(t);

    // Gentle pointer parallax (kept subtle so content stays readable).
    pointer.current.lerp(new THREE.Vector2(p.x, p.y), 0.06);
    look.x += pointer.current.x * 0.7;
    look.y += pointer.current.y * 0.45 + sway;
    // Micro breathing on the camera so the frame is never perfectly still.
    pos.z += Math.sin(clock.elapsedTime * 0.24) * 0.1;

    camera.position.copy(pos);
    camera.lookAt(look);
  });

  return (
    <>
      {/* Lighting: restrained, cinematic */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[8, 5, 10]} intensity={1.35} color="#dff6ff" />
      <pointLight position={[-9, -2.5, -14]} intensity={42} distance={34} decay={2} color="#00e5ff" />
      <pointLight position={[9, 3.5, -30]} intensity={34} distance={38} decay={2} color="#39ff65" />

      <fog attach="fog" args={["#03090d", 16, 66]} />

      {/* Stars span the whole journey */}
      <Stars radius={130} depth={70} count={2600} factor={4.2} saturation={0} fade speed={0.55} />

      {/* Glinting dust corridor along the camera path */}
      <SpaceDust />

      <Planet />
      <Gateway />
      <Lab />
      <OrbitSystem />
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Canvas root with graceful runtime error → parent fallback
   ──────────────────────────────────────────────────────────────────────────── */

export interface JourneyCanvasProps {
  active: boolean;
  progressRef: ProgressRef;
  onError: () => void;
}

export default function JourneyCanvas({ active, progressRef, onError }: JourneyCanvasProps) {
  return (
    <Canvas
      className="absolute inset-0"
      dpr={[1, 1.75]}
      frameloop={active ? "always" : "never"}
      camera={{ fov: 42, near: 0.1, far: 160, position: [0, 0.9, 15.5] }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
      }}
      onError={onError}
    >
      <SceneRoot progressRef={progressRef} />
    </Canvas>
  );
}
