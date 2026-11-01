"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Hologram3DCanvasProps {
  color?: string; // e.g. "#00e5ff", "#ffd700", "#ff1744", "#7c5cff", "#00ff88"
  interactive?: boolean;
  className?: string;
  size?: number;
}

export function Hologram3DCanvas({
  color = "#00e5ff",
  interactive = true,
  className = "",
  size = 500,
}: Hologram3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const colorRef = useRef(color);
  colorRef.current = color;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 7;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 3. Central Core Group (contains all rotating parts)
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // --- Inner Pulsing Icosahedron Core ---
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorRef.current),
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Inner Solid Sphere with glow effect
    const innerGeo = new THREE.SphereGeometry(0.7, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorRef.current),
      transparent: true,
      opacity: 0.25,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerSphere);

    // --- Concentric Gyro Rings ---
    // Ring 1 (Horizontal Torus)
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorRef.current),
      transparent: true,
      opacity: 0.7,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2;
    rootGroup.add(ring1);

    // Ring 2 (Tilted Ring)
    const ring2Geo = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorRef.current),
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    rootGroup.add(ring2);

    // Ring 3 (Outer Data Orbit Ring with notches)
    const ring3Geo = new THREE.TorusGeometry(3.0, 0.015, 12, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorRef.current),
      transparent: true,
      opacity: 0.35,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = -Math.PI / 3;
    ring3.rotation.z = Math.PI / 4;
    rootGroup.add(ring3);

    // --- Orbiting Particle Matrix (Starfield Swarm) ---
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.6 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      particleScales[i] = Math.random();
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color(colorRef.current),
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleMesh = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particleMesh);

    // 4. Mouse / Touch Dragging & Interactive Physics
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let mouseInfluenceX = 0;
    let mouseInfluenceY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      if (!interactive) return;
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!interactive) return;
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotY += deltaX * 0.008;
        targetRotX += deltaY * 0.008;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }

      // Parallax mouse tilt
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseInfluenceX = normX * 0.35;
      mouseInfluenceY = normY * 0.35;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // 5. Animation Loop
    let animId = 0;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Dynamic color check
      const currentColor = new THREE.Color(colorRef.current);
      coreMat.color.lerp(currentColor, 0.08);
      innerMat.color.lerp(currentColor, 0.08);
      ring1Mat.color.lerp(currentColor, 0.08);
      ring2Mat.color.lerp(currentColor, 0.08);
      ring3Mat.color.lerp(currentColor, 0.08);
      particleMat.color.lerp(currentColor, 0.08);

      // Core pulsing
      const pulseScale = 1 + Math.sin(elapsedTime * 2.5) * 0.04;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);
      coreMesh.rotation.y += 0.008;
      coreMesh.rotation.x += 0.005;

      // Independent ring rotations
      ring1.rotation.z += 0.012;
      ring2.rotation.x += 0.009;
      ring2.rotation.y += 0.007;
      ring3.rotation.z -= 0.008;
      ring3.rotation.x += 0.006;

      // Particle swarm orbit
      particleMesh.rotation.y -= 0.004;
      particleMesh.rotation.x += 0.002;

      // Root damping to drag + mouse target
      rootGroup.rotation.y += (targetRotY + mouseInfluenceX - rootGroup.rotation.y) * 0.06;
      rootGroup.rotation.x += (targetRotX + mouseInfluenceY - rootGroup.rotation.x) * 0.06;

      // Autonomous gentle idle rotation when not dragging
      if (!isDragging) {
        targetRotY += 0.003;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 6. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      domEl.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);

      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, [size, interactive]);

  return (
    <div
      ref={mountRef}
      className={`relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ width: size, height: size }}
      title="Click and drag to rotate the 3D Quantum Core Hologram"
    />
  );
}
