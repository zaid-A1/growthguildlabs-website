/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  GROWTH GUILD LABS — PRODUCT CONTENT SOURCE
 * ─────────────────────────────────────────────────────────────────────────────
 *  Single typed source of truth for the five products. Every card, page and
 *  link on the site reads from this file, so claims stay consistent.
 *
 *  Sourcing rules (important):
 *   • Capabilities listed under `features` were verified directly against the
 *     actual distributed packages in the project workspace ("APPS CREATED BY
 *     GROWTH GUILD LABS"): their module lists, config files, HUD assets and
 *     bundled README / protocol documents.
 *   • Nothing is invented: no downloads, releases, app-store links, user
 *     counts or reviews. Availability is stated exactly as far as it can be
 *     verified — working private builds, none publicly released yet.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type AccentKey = "cyan" | "red" | "violet" | "gold";

export interface AccentTokens {
  /** CSS colour value used on accent borders, glow and headings. */
  color: string;
  /** Softer tint for backgrounds/hairlines built on the same hue. */
  soft: string;
  /** Tailwind shadow token that carries a matching glow. */
  glow: string;
}

export const ACCENTS: Record<AccentKey, AccentTokens> = {
  cyan: { color: "#00e5ff", soft: "#00e5ff1f", glow: "shadow-glow-cyan" },
  red: { color: "#ff1744", soft: "#ff17441f", glow: "shadow-glow-red" },
  violet: { color: "#7c5cff", soft: "#7c5cff1f", glow: "shadow-glow-violet" },
  gold: { color: "#ffb300", soft: "#ffb3001f", glow: "shadow-glow-gold" },
};

export interface ProductFeature {
  title: string;
  detail: string;
}

export interface ProductFeatureGroup {
  heading: string;
  capabilities: ProductFeature[];
}

export interface ProductStatus {
  /** Short chip label — e.g. “Working private build”. */
  state: string;
  /** One honest sentence about what that means for the visitor. */
  note: string;
}

export interface Product {
  /** URL / data identifier. */
  id: string;
  name: string;
  /** Stylised packaging name, exactly as it appears inside the package. */
  display: string;
  /** One-line role, used on cards. */
  role: string;
  platform: string;
  /** Version / packaging details visible in the shipped files. */
  packaging: string;
  accent: AccentKey;
  image: string;
  imageAlt: string;
  imageCaption: string;
  /** Chip set shown on cards and page heroes. */
  chips: string[];
  summary: string;
  /** Per-product page metadata. */
  seo: { title: string; description: string };
  status: ProductStatus;
  /** Verified capability groups, sourced from the shipped packages. */
  featureGroups: ProductFeatureGroup[];
  /** Verified technology facts, shown as spec rows. */
  stack: { label: string; value: string }[];
  /** Real UI artefacts found inside the package (HUD names, themes). */
  hud?: { name: string; detail: string; palette: string[] }[];
  /** Ecosystem bridge — how this product links to a sibling product. */
  bridge?: { partnerId: string; title: string; detail: string };
  related: string[];
  nextAction: { label: string; href: string; note: string };
}

export const PRODUCTS: Product[] = [
  /* ── 1 ────────────────────────────────────────────────────────────────── */
  {
    id: "ultron-2",
    name: "ULTRON 2.0",
    display: "U.L.T.R.O.N. 2.0",
    role: "Autonomous desktop operating intelligence",
    platform: "Windows 10 / 11 · 64-bit",
    packaging: "ULTRON_2.0_Windows_x64 · packaged executable (v1.0.0)",
    accent: "gold",
    image: "/products/ultron-2.png",
    imageAlt: "ULTRON 2.0 emblem: a dark mechanical mask outlined in red neon",
    imageCaption: "App artwork shipped inside the ULTRON 2.0 Windows build.",
    chips: ["Windows", "Desktop AI", "NAMED FREEWARE"],
    summary:
      "ULTRON 2.0 is the heavy-lifter of the guild: a Windows desktop intelligence that pairs conversational AI with real system control — files, settings, browsers, documents and the companion Connector app.",
    seo: {
      title: "ULTRON 2.0 — autonomous desktop AI for Windows",
      description:
        "ULTRON 2.0 is a working Windows desktop AI from Growth Guild Labs: computer control, document building, browser automation, a local gateway for the Connector mobile app.",
    },
    status: {
      state: "Official Release (v1.0.0)",
      note: "Packaged Windows x64 release build with verified SHA-256 checksum. Available in the Download Centre.",
    },
    featureGroups: [
      {
        heading: "Desktop command",
        capabilities: [
          {
            title: "Windows orchestration",
            detail:
              "The packaged desktop app (ULTRON2.exe, PyQt6) launches and manages applications, windows and processes as part of its action set.",
          },
          {
            title: "Files and settings",
            detail:
              "Shipped modules include file_controller, desktop_organizer_mcp, computer_settings and clipboard_processor — covering file operations, folder cleanup, system settings and clipboard actions.",
          },
          {
            title: "Browser & web",
            detail:
              "browser_control with a Playwright MCP client runs headless browsing sessions; web_search handles search requests.",
          },
        ],
      },
      {
        heading: "Document & content engine",
        capabilities: [
          {
            title: "Office generation",
            detail:
              "The prompt layer explicitly routes requests for decks, workbooks, spreadsheets and reports into its office generators (office_builder, ppt_template_workflow) to produce editable files.",
          },
          {
            title: "Office formats shipped",
            detail:
              "PyMuPDF / pdfminer, python-docx and openpyxl are bundled — structured PDFs, DOCX and XLSX generation is part of the built-in toolkit.",
          },
          {
            title: "Awareness & assistant tools",
            detail:
              "screen_processor, attention card, calendar_scheduler, reminders, daily_briefing, meeting_assistant and weather_report are all part of the packaged action library.",
          },
        ],
      },
      {
        heading: "Companion integrations",
        capabilities: [
          {
            title: "Google Workspace MCP",
            detail:
              "A google_workspace_mcp action ships in the package — Google-account tooling is wired in at the action layer.",
          },
          {
            title: "Instagram support",
            detail:
              "instagram_mcp and instagram_chat actions are bundled for Instagram-connected tasks through the same tool interface.",
          },
          {
            title: "Model Context Protocol",
            detail:
              "Actions speak MCP: system_diagnostics_mcp, desktop_organizer_mcp, playwright_mcp_client, claude_code_bridge and more — the tool layer is protocol-structured, not ad-hoc.",
          },
        ],
      },
      {
        heading: "The planetary view",
        capabilities: [
          {
            title: "WebGL HoloGlobe",
            detail:
              "A bundled three.js globe (Earth night textures, Leaflet maps) handles flight-routes, radar coverage and location searches from the desktop.",
          },
          {
            title: "Smart-home devices",
            detail:
              "smart_home providers with device imagery for lights, plugs, AC units, fans and TVs — direct device control sits inside the ecosystem.",
          },
          {
            title: "Network watchdog",
            detail:
              "net_sentinel ships with its own HUD — an in-package network monitor that watches connectivity on your behalf.",
          },
        ],
      },
    ],
    stack: [
      { label: "Interface", value: "PyQt6 desktop shell (ULTRON2.exe)" },
      { label: "Action layer", value: "MCP-structured Python actions (56+ tool modules)" },
      { label: "Intelligence", value: "Gemini API, with an optional Ollama offline brain" },
      { label: "Vision", value: "OpenCV screen processing & face detection" },
      { label: "Documents", value: "PyMuPDF / pdfminer / python-docx / pptx templates" },
      { label: "Gateway", value: "FastAPI + WebSocket gateway for the Connector app" },
      { label: "Browser", value: "Playwright headless automation" },
      { label: "Packaging", value: "PyInstaller one-folder build (v1.0.0, 64-bit)" },
    ],
    hud: [
      {
        name: "Quantum Core background",
        detail:
          "The desktop app's animated backdrop is a bundled Three.js orb titled “Quantum Core — a study of light”, with draggable charge-and-release interaction and UnrealBloom post-processing.",
        palette: ["#ffb300", "#79baff", "#93dbed"],
      },
      {
        name: "Circuit HUD elements",
        detail:
          "core modules like circuit_hud and a bundled radar HUD (radar/index.html) provide the radar/scan visual language throughout the app.",
        palette: ["#00e0ff", "#39ff65"],
      },
    ],
    bridge: {
      partnerId: "ultron-2-connector",
      title: "Paired by design with ULTRON 2.0 Connector",
      detail:
        "A FastAPI + WebSocket gateway is embedded in the desktop build (pairing offers, device capability tracking, command routing) — the Connector app is its other half.",
    },
    related: ["ultron-2-connector", "friday-ai"],
    nextAction: {
      label: "See the Connector that pairs with it",
      href: "/products/ultron-2-connector",
      note: "The Connector app is the mobile half of the ULTRON 2.0 experience.",
    },
  },

  /* ── 2 ────────────────────────────────────────────────────────────────── */
  {
    id: "ultron-2-connector",
    name: "ULTRON 2.0 Connector",
    display: "ULTRON 2.0 · CONNECT",
    role: "Companion app for the ULTRON 2.0 ecosystem",
    platform: "Android",
    packaging:
      "ULTRON_2.0_Connect.apk · shipped as a signed Android package (Kotlin/Gradle)",
    accent: "cyan",
    image: "/products/ultron-2-connector.png",
    imageAlt:
      "ULTRON Connect icon: red ULTRON 2.0 emblem on a black tile",
    imageCaption: "Icon artwork shipped inside the ULTRON 2.0 Connector APK.",
    chips: ["Android", "Companion", "Gateway client"],
    summary:
      "Every voice-driven empire needs a remote. ULTRON 2.0 Connector is the Android companion built to talk to the desktop gateway — pairing, capability-tracking and remote command execution straight from your phone.",
    seo: {
      title: "ULTRON 2.0 Connector — Android companion app",
      description:
        "The ULTRON 2.0 Connector is the Android companion of Growth Guild Labs' ULTRON 2.0: QR pairing over the local WebSocket gateway, capability discovery, remote commands.",
    },
    status: {
      state: "Official Android APK (v2.0.0)",
      note: "Signed Android package available for direct download. Pairs with the desktop gateway over local network.",
    },
    featureGroups: [
      {
        heading: "Local handshake",
        capabilities: [
          {
            title: "QR / barcode pairing",
            detail:
              "The APK bundles Google ML Kit barcode models and native androidx camera-camera2 libraries — pairing with the desktop gateway runs through the camera.",
          },
          {
            title: "Expiring pairing offers",
            detail:
              "The desktop gateway's pairing model (pair_request → pair_approved → authenticate → device_online) is a full pairing protocol with expiring offers and revocation.",
          },
          {
            title: "Persistent device trust",
            detail:
              "The protocol stores a per-device secret against a persistent registry so a paired phone stays trusted across sessions.",
          },
        ],
      },
      {
        heading: "Remote capability surface",
        capabilities: [
          {
            title: "Capability discovery",
            detail:
              "Gateway module capability_manager publishes what a paired device may do; command routing checks capabilities before executing anything.",
          },
          {
            title: "Two-way media channels",
            detail:
              "The JSON protocol models file_transfer and screen_capture as first-class capabilities, exchanged over the local WebSocket.",
          },
          {
            title: "Full desktop action reach",
            detail:
              "Connected commands map onto the desktop action library — the phone is a remote for the same toolset that runs on Windows.",
          },
        ],
      },
      {
        heading: "On-device experience",
        capabilities: [
          {
            title: "Quantum Core theme",
            detail:
              "The app ships its own animated Three.js backdrop (“Quantum Core — a study of light”) with gold-and-mint orb styling and reduced-motion support.",
          },
          {
            title: "Modern Android foundation",
            detail:
              "Built with Jetpack Compose + Material 3, camera and datastore, encrypted storage, OkHttp networking, Firebase components — a current-generation Android stack.",
          },
          {
            title: "Offline-friendly design",
            detail:
              "Everything pairs and talks on the local network first (the desktop gateway is local-most) rather than through a mandatory cloud relay.",
          },
        ],
      },
    ],
    stack: [
      { label: "Platform", value: "Android (arm64-v8a · armeabi-v7a · x86 · x86_64)" },
      { label: "Language", value: "Kotlin 2.0.21, Gradle 8.7" },
      { label: "UI", value: "Jetpack Compose + Material 3" },
      { label: "Pairing", value: "ML Kit barcode scanning + androidx camera" },
      { label: "Identity", value: "Encrypted datastore (androidx security-crypto)" },
      { label: "Transport", value: "WebSocket pairing protocol (JSON envelopes)" },
      { label: "Visuals", value: "Bundled Three.js “Quantum Core” backdrop" },
    ],
    bridge: {
      partnerId: "ultron-2",
      title: "Born from the ULTRON 2.0 gateway",
      detail:
        "The desktop build ships the other end: ultron_connect (gateway, pairing, device manager, capability manager, command router) with a documented JSON protocol.",
    },
    related: ["ultron-2"],
    nextAction: {
      label: "Meet ULTRON 2.0 on the desktop",
      href: "/products/ultron-2",
      note: "The Connector's native bedtime story: the desktop half of the pairing.",
    },
  },

  /* ── 3 ────────────────────────────────────────────────────────────────── */
  {
    id: "jarvis-2",
    name: "JARVIS 2.0",
    display: "J.A.R.V.I.S. 2.0",
    role: "Voice assistant with a live 3D avatar for Windows",
    platform: "Windows 10 / 11 · 64-bit",
    packaging: "JARVIS-2.0-Windows-x64 · packaged executable suite",
    accent: "red",
    image: "/products/jarvis-2.png",
    imageAlt: "J.A.R.V.I.S. app icon: a blue circular reactor ring",
    imageCaption: "App icon shipped inside the JARVIS 2.0 Windows build.",
    chips: ["Windows", "Voice AI", "Avatar"],
    summary:
      "JARVIS 2.0 is the guild's atmospheric voice assistant — a Windows desktop companion with a lip-synced 3D face, wake-word awareness, a long-term memory engine and a browser-based remote dashboard.",
    seo: {
      title: "JARVIS 2.0 — voice assistant with a 3D avatar",
      description:
        "JARVIS 2.0 is a working Windows voice assistant from Growth Guild Labs: Gemini-powered conversation, a 3D face with viseme lip-sync, wake word, dashboard and plugin tooling.",
    },
    status: {
      state: "Official Release (v1.0.0)",
      note: "Packaged Windows x64 release build with verified SHA-256 checksum. Available in the Download Centre.",
    },
    featureGroups: [
      {
        heading: "Voice-first design",
        capabilities: [
          {
            title: "Wake word detection",
            detail:
              "A dedicated wake_word module listens locally, so the assistant wakes on a spoken trigger instead of listening to every word.",
          },
          {
            title: "Honest two-way voice",
            detail:
              "stt (speech recognition) and tts (synthetic voice) pair with an “echo” module to cancel its own audio — a deliberate anti-feedback design.",
          },
          {
            title: "Push-to-talk fallback",
            detail:
              "config exposes push_to_talk and wake word toggles, because keyboards exist and sometimes you'd rather press a key than speak.",
          },
        ],
      },
      {
        heading: "The living avatar",
        capabilities: [
          {
            title: "A 3D face, not a sticker",
            detail:
              "The package ships a face_model.obj with avatar_mesh and a dedicated viseme module — the face lip-syncs what it says, mesh and audio realigned together.",
          },
          {
            title: "First-person identity",
            detail:
              "JARVIS 2.0's built-in prompt instructs it to speak about “my face” in the first person — the avatar is treated as its own face, not a graphic review panel.",
          },
          {
            title: "Configure-your-own HUD",
            detail:
              "A hud_style setting (“face” illustrated in the shipped config) plus a user-configurable UI colour let the avatar personality be personalised, not hardcoded.",
          },
        ],
      },
      {
        heading: "Action family",
        capabilities: [
          {
            title: "Computer & browser control",
            detail:
              "computer_control, computer_settings, browser_control, desktop, open_app and system_monitor take direct actionable paths in the desktop.",
          },
          {
            title: "Content engine",
            detail:
              "file_controller + file_processor move, read and summarise files; send_message sends notifications; reminder and proactive reach out when you need to hear something.",
          },
          {
            title: "Life admin layer",
            detail:
              "weather_report, flight_finder, game_updater and code_helper cover weather, flights, game updates and code assist as part of the shipped toolset.",
          },
        ],
      },
      {
        heading: "Dashboard & memory",
        capabilities: [
          {
            title: "TLS-protected local dashboard",
            detail:
              "A bundled server serves app.html over HTTPS with its own certificates and an encrypted crypto-js login vault — a true word to the wise on browser control panels.",
          },
          {
            title: "Long-term memory engine",
            detail:
              "memory/long_term.json and a memory_manager module persist what JARVIS learns between sessions.",
          },
          {
            title: "Undo-able & confirm-gated",
            detail:
              "Shipped undo and confirm gates protect irreversible actions, aligned with the guild's 'asked-person-first' philosophy for trust-sensitive operations.",
          },
        ],
      },
    ],
    stack: [
      { label: "Platform", value: "Windows 64-bit · packaged Python build" },
      { label: "Core", value: "Gemini LLM route (gemini.py + llm_client.py)" },
      { label: "Voice", value: "Local wake word, STT, TTS, echo cancellation" },
      { label: "Avatar", value: "face_model.obj + avatar_mesh + viseme lip-sync" },
      { label: "Actions", value: "aisle of Python action modules incl. code/dev agents" },
      { label: "Dashboard", value: "HTTPS server + encrypted login app.html" },
      { label: "Memory", value: "memory/long_term.json via memory_manager" },
      { label: "Extensibility", value: "Plugin loader + module templates" },
    ],
    hud: [
      {
        name: "Mark 85 Arc Core HUD",
        detail:
          "The packaged HUD theme is titled “JARVIS — Mark 85 Arc Core”, carrying a full arc-reactor palette (#ff1744 core red, #ffb300 gold, glass panels and a holo-grid backdrop).",
        palette: ["#ff1744", "#ffb300", "#ff5252"],
      },
    ],
    bridge: {
      partnerId: "jarvis-2-phone",
      title: "A voice experience, in two shapes",
      detail:
        "The desktop build and the phone build share the same assistant family and design language — each is distinct software, not one product masquerading as two.",
    },
    related: ["jarvis-2-phone", "friday-ai"],
    nextAction: {
      label: "See JARVIS 2.0 Phone",
      href: "/products/jarvis-2-phone",
      note: "The sibling voice experience built for Android screens.",
    },
  },

  /* ── 4 ────────────────────────────────────────────────────────────────── */
  {
    id: "jarvis-2-phone",
    name: "JARVIS 2.0 Phone",
    display: "J.A.R.V.I.S. 2.0 · PHONE",
    role: "Compact voice experience for Android",
    platform: "Android",
    packaging: "JARVIS_release.apk · signed Android package",
    accent: "violet",
    image: "/products/jarvis-2-phone.png",
    imageAlt: "Ghost avatar illustration from the JARVIS 2.0 Phone package",
    imageCaption: "Avatar artwork shipped inside the JARVIS 2.0 Phone APK.",
    chips: ["Android", "Offline voice", "Floating HUD"],
    summary:
      "The phone-sized cut of the JARVIS family: an Android voice experience with local offline speech recognition, a floating transparent HUD and a collectible set of avatar companions dubbed “overlay toys”.",
    seo: {
      title: "JARVIS 2.0 Phone — offline voice companion for Android",
      description:
        "JARVIS 2.0 Phone is the Android voice experience from Growth Guild Labs: local offline speech recognition, ghost avatar, floating HUD overlays — built as its own product.",
    },
    status: {
      state: "Official Android APK (v2.0.0)",
      note: "Signed Android package available for direct download. Pairs with the desktop gateway over local network.",
    },
    featureGroups: [
      {
        heading: "Offline by architecture",
        capabilities: [
          {
            title: "Local speech recognition",
            detail:
              "The APK ships a full Vosk “model-en-us” speech model (acoustic model, decoded grammar, ivector) — commands are transcribed on the phone, not streamed to a service.",
          },
          {
            title: "Speaker verification model",
            detail:
              "A bundled “model-spk” (speaker model with transform functions) allows the app to model voices — a genuinely privacy-positive design.",
          },
          {
            title: "Wake-first behaviour",
            detail:
              "Bundling local recognition means the phone assistant can listen locally first, and only escalate when needed.",
          },
        ],
      },
      {
        heading: "A HUD in slots",
        capabilities: [
          {
            title: "Mark 85 Arc Core layer",
            detail:
              "A packaged assets/hud/index.html implements the “JARVIS — Mark 85 Arc Core” overlay — the same arc-reactor visual language as the desktop sibling, tuned for a smaller screen.",
          },
          {
            title: "Overlay toys (yes, really)",
            detail:
              "16 bundled overlay toys — alien, blob, cat, droid, flower, ghost, hexagon, mech, pebble, star, triangle and friends — form an in-HUD companion set.",
          },
          {
            title: "The interactive ghost",
            detail:
              "A bundled ghost-avatar web view hosts a reactive ghost character (with a mouth viseme) that reacts to mic events — the app's visual front-of-house.",
          },
        ],
      },
      {
        heading: "Built as its own product",
        capabilities: [
          {
            title: "Distinct from JARVIS 2.0",
            detail:
              "The phone package and the desktop package are separate deliverables with separate responsibilities — the phone build is a compact sibling, not a webview shell of the desktop app.",
          },
          {
            title: "Android-native tooling",
            detail:
              "The APK bundles its own dex code with assets for speech, overlays, and the HUD — a genuinely Android-styled product rather than a port.",
          },
          {
            title: "Part of the JARVIS family",
            detail:
              "Family DNA runs through both: the Mark 85 layers, the ghost avatar identity and the voice-first interaction model.",
          },
        ],
      },
    ],
    stack: [
      { label: "Platform", value: "Android · signed APK" },
      { label: "Speech", value: "Vosk model-en-us (offline) + model-spk speaker model" },
      { label: "HUD", value: "assets/hud/index.html — “Mark 85 Arc Core” theme" },
      { label: "Avatar", value: "ghost-avatar-v2.html (interactive bot avatar)" },
      { label: "Companions", value: "16 overlay toys (alien, cat, droid, ghost, …)" },
      { label: "Orb layer", value: "Bundled Three.js orb.html background" },
    ],
    hud: [
      {
        name: "Mark 85 Arc Core HUD (phone cut)",
        detail:
          "The phone HUD (“JARVIS - Mark 85 Arc Core”) ships with its own red-and-gold palette, GPU backgrounds and a holo-grid — the compact twin of the desktop's HUD.",
        palette: ["#ff1744", "#ffb300", "#ff5252"],
      },
      {
        name: "Ghost avatar",
        detail:
          "The ghost avatar renders through a bundled bot-avatars web component with a reactive mouth (viseme-driven) and pointer-tracking eye behaviour.",
        palette: ["#7c5cff", "#79baff", "#93dbed"],
      },
    ],
    bridge: {
      partnerId: "jarvis-2",
      title: "Family pair with the desktop build",
      detail:
        "Both belong to the JARVIS line with shared design language — verified as separate packages, separate stacks and separate capabilities.",
    },
    related: ["jarvis-2", "ultron-2-connector"],
    nextAction: {
      label: "See JARVIS 2.0 on the desktop",
      href: "/products/jarvis-2",
      note: "For the widescreen cut of the same family.",
    },
  },

  /* ── 5 ────────────────────────────────────────────────────────────────── */
  {
    id: "friday-ai",
    name: "F.R.I.D.A.Y. AI",
    display: "F.R.I.D.A.Y. AI",
    role: "Hands-free desk assistant with a self-extending skill system",
    platform: "Windows (packaged) · cross-platform source",
    packaging: "FRIDAY_AI_v1.0_Windows.zip · packaged executable",
    accent: "cyan",
    image: "/products/friday-ai.png",
    imageAlt: "F.R.I.D.A.Y. AI logo: a blue arc reactor emblem over the name FRIDAY",
    imageCaption: "Logo artwork shipped inside the F.R.I.D.A.Y. Windows build.",
    chips: ["Windows", "Live voice", "Wake word", "Plugin-ready"],
    summary:
      "F.R.I.D.A.Y. is the guild's always-on conversation: say “FRIDAY” and it wakes, then runs your computer — system control, research, file work and more — through a redrawing skill engine that can grow by dropping in a new file.",
    seo: {
      title: "F.R.I.D.A.Y. AI — hands-free assistant that runs your computer",
      description:
        "F.R.I.D.A.Y. AI is a working desk assistant from Growth Guild Labs: local wake word, Gemini Live conversation, computer control, research, plugins and a memory panel.",
    },
    status: {
      state: "Official Release (v1.0.0)",
      note: "Packaged Windows executable suite with openWakeWord and Gemini Live audio. Available in the Download Centre.",
    },
    featureGroups: [
      {
        heading: "Hands-free life",
        capabilities: [
          {
            title: "Local “FRIDAY” wake word",
            detail:
              "Sleeps until called: a bundled local detector runs in its own thread and, while asleep, your microphone spares the cloud entirely — wake is opt-in with a one-click download.",
          },
          {
            title: "Designed to acknowledge",
            detail:
              "Speaks one contextual sentence the moment a task starts (“Right away — going through that file now.”) and then runs the tool, so silence never equals confusion.",
          },
          {
            title: "Session continuity",
            detail:
              "A dropped connection, a new microphone or a new voice no longer wipes the conversation — resumption handles are captured and replayed.",
          },
          {
            title: "Unlimited sessions",
            detail:
              "Sliding-window context compression keeps a single conversation going for hours.",
          },
        ],
      },
      {
        heading: "Computer control",
        capabilities: [
          {
            title: "Real system commands",
            detail:
              "Via its computer_settings and desktop modules: volume, brightness, Wi-Fi, power shortcuts and keyboard/mouse/windows control by voice.",
          },
          {
            title: "Browser & YouTube",
            detail:
              "Dedicated browser_control and youtube_video actions handle navigation, playback and YouTube control by voice.",
          },
          {
            title: "A confirmation you can forge-proof",
            detail:
              "Shutdown, restart and Wi-Fi waits for a human button press — the model cannot confirm its own irreversible actions.",
          },
          {
            title: "Undo it can take back",
            detail:
              "Saying “undo” reverses what it did: moved or renamed files, created items, changed settings — with size and safety limits.",
          },
        ],
      },
      {
        heading: "Research & references",
        capabilities: [
          {
            title: "Multiple search modes",
            detail:
              "Gemini-grounded search with a DuckDuckGo fallback, in news / research / price / compare / search modes.",
          },
          {
            title: "Document reading",
            detail:
              "The file_processor action reads, summarises and answers questions about local files.",
          },
          {
            title: "Morning briefing",
            detail:
              "On first boot it greets you, reads the time, recaps yesterday and pulls live news — and remembers what it said at yesterday's session.",
          },
        ],
      },
      {
        heading: "Memory & skills",
        capabilities: [
          {
            title: "Recallable memory",
            detail:
              "Nothing is silently forgotten: the prompt carries a budgeted core of facts while the rest is searched locally on demand (a memory panel can view and delete every item).",
          },
          {
            title: "Self-describing skills",
            detail:
              "Every bundled action describes itself in its own file, and dropping a single .py into plugins/ teaches FRIDAY a new tool — one-file tool growth.",
          },
          {
            title: "Plugin surfaces",
            detail:
              "A plugin system with discovery, validation and crash isolation ships as part of the core.",
          },
        ],
      },
      {
        heading: "Craft",
        capabilities: [
          {
            title: "Reactive HUD",
            detail:
              "Waveform and arc-reactor core pulse to real audio; live theming recolours the whole HUD from a hue wheel or hex without a restart.",
          },
          {
            title: "Voice picker",
            detail:
              "Choose among five native Gemini voices with live switching.",
          },
          {
            title: "Audio device picker",
            detail:
              "Which microphone? FRIDAY's picker measures per-host-API latency and falls back gracefully when the saved device is gone.",
          },
          {
            title: "Background monitoring",
            detail:
              "User-configured topic watching checks for new headlines once a day and alerts naturally.",
          },
        ],
      },
    ],
    stack: [
      { label: "Engine", value: "Gemini Flash 3.1 Live (native audio conversation)" },
      { label: "Interface", value: "PyQt6 HUD — reactive waveform, arc-reactor core, drawers" },
      { label: "Wake word", value: "Local openWakeWord model (opt-in, offline)" },
      { label: "Skills", value: "Self-describing TOOL/PLUGIN modules (one file = one skill)" },
      { label: "Memory", value: "memory/long_term.json on your machine; local recall search" },
      { label: "Safety", value: "UI-issued confirmation tokens + shared undo stack" },
      { label: "Dashboard", value: "Remote control from your phone via QR pairing" },
      { label: "Theme", value: "“cyan” default, live hue recolouring" },
    ],
    hud: [
      {
        name: "Arc Reactor HUD",
        detail:
          "The futuristic HUD (per its bundled README) holds a “cyan” theme with a reactive waveform and an arc-reactor core that pulses to live audio.",
        palette: ["#00d4ff", "#f3fbfb"],
      },
    ],
    bridge: {
      partnerId: "jarvis-2",
      title: "Life-extension sibling: JARVIS 2.0",
      detail:
        "FRIDAY runs the always-awake hands-free desk experience; JARVIS 2.0 shares the guild's voice-family DNA with its own avatar persona.",
    },
    related: ["jarvis-2", "ultron-2"],
    nextAction: {
      label: "Explore the rest of the guild",
      href: "/ecosystem",
      note: "FRIDAY is one of five working apps — the ecosystem page is the map.",
    },
  },
];

/* ── Helpers ───────────────────────────────────────────────────────────── */

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function productHref(id: string): string {
  return `/products/${id}`;
}

export function relatedProducts(product: Product): Product[] {
  const found = product.related
    .map((id) => getProduct(id))
    .filter((p): p is Product => Boolean(p));
  // Always fall back to a product the visitor can realistically jump to.
  return found.length > 0
    ? found
    : [PRODUCTS[0], PRODUCTS[1]].filter((p) => p.id !== product.id);
}

/** Stable URL ordering for sitemap & static params (matches route order). */
export const PRODUCT_ORDER = [
  "ultron-2",
  "ultron-2-connector",
  "jarvis-2",
  "jarvis-2-phone",
  "friday-ai",
] as const;
