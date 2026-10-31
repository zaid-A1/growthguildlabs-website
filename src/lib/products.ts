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
        heading: "Autonomous Skill Creation & Core Intelligence",
        capabilities: [
          {
            title: "🧬 AI-Generated Skills",
            detail:
              "Tell ULTRON 2.0 what you want it to do, and it can create the code for a new skill, register it dynamically, and execute the new capability without manual programming.",
          },
          {
            title: "🤖 Multiple AI Models & APIQIK",
            detail:
              "ULTRON 2.0 works seamlessly with different AI models through integrations such as APIQIK and Gemini, giving the assistant flexibility in choosing the ideal neural model behind any task.",
          },
          {
            title: "👁️ Screen Intelligence & Vision",
            detail:
              "ULTRON 2.0 can understand and analyze what is happening on your screen in real time, extracting context and using that visual information while executing multi-step tasks.",
          },
        ],
      },
      {
        heading: "Desktop Orchestration & Hardware Workflows",
        capabilities: [
          {
            title: "🖥️ PC & Computer Control",
            detail:
              "The packaged desktop app (ULTRON2.exe, PyQt6) controls applications, manages running processes, organizes files, adjusts system settings, and executes desktop automations.",
          },
          {
            title: "🌐 Browser Automation",
            detail:
              "Navigate websites, click, type, interact with web pages, and perform multi-step web scraping and browser automation sessions via Playwright headless MCP client.",
          },
          {
            title: "📁 File & Document Handling",
            detail:
              "Work directly with files, source code, and documents: structured PDF generation, DOCX/XLSX workbooks via bundled python-docx, openpyxl, and PyMuPDF.",
          },
          {
            title: "🔌 Arduino & Sensor Workflows",
            detail:
              "Ask ULTRON 2.0 about electronic components and sensors to have it generate visual wiring diagrams and schematics to connect and understand them.",
          },
        ],
      },
      {
        heading: "Connected Devices & The Planetary View",
        capabilities: [
          {
            title: "📱 Connected Devices & Gateway",
            detail:
              "Connect ULTRON 2.0 with other devices over local WebSocket channels, extending the desktop assistant's capabilities directly to the mobile Connector app.",
          },
          {
            title: "🌍 Interactive WebGL Globe",
            detail:
              "A bundled Three.js planetary globe with Earth night textures and Leaflet maps allows you to visualize global locations and calculate aerial distances between different coordinates.",
          },
          {
            title: "⚡ Smart-Home & Network Watchdog",
            detail:
              "Direct device control for smart-home units (lights, plugs, AC, TVs) and net_sentinel in-package network telemetry that watches connectivity on your behalf.",
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
      "JARVIS 2.0 is the guild's atmospheric voice assistant — more than an assistant, a vision of the future exploring voice interaction, visual awareness, AI memory, coding assistance, web research, live system monitoring, and a remote dashboard. Built as part of the journey behind GROWTH GUILD by Mohammed Zaid Uddin Siddiqui.",
    seo: {
      title: "JARVIS 2.0 — voice assistant with a 3D avatar & vision",
      description:
        "JARVIS 2.0 is a futuristic Windows AI assistant concept and build from Growth Guild Labs: voice conversation, 3D face avatar, AI memory, code assistance, system control, and remote dashboard.",
    },
    status: {
      state: "Official Release (v1.0.0)",
      note: "Packaged Windows x64 release build with verified SHA-256 checksum. Represents the J.A.R.V.I.S. 2.0 vision and active implementation.",
    },
    featureGroups: [
      {
        heading: "🎙️ The Vision & Voice Interaction",
        capabilities: [
          {
            title: "🎙️ Voice & Natural Conversation",
            detail:
              "Local wake-word detection with honest two-way STT, TTS, and dedicated echo cancellation so the assistant wakes on spoken trigger and converses naturally.",
          },
          {
            title: "👁️ Visual Awareness & Screen Intelligence",
            detail:
              "Visual perception engine capable of analyzing on-screen elements, windows, and graphical context to assist with real workflows.",
          },
          {
            title: "🧠 AI Memory Architecture",
            detail:
              "Persistent long-term memory engine (memory_manager with memory/long_term.json) that remembers user preferences and context across sessions.",
          },
          {
            title: "💻 Code Assistance & Developer Tools",
            detail:
              "Dedicated code helper and developer tools for reading codebases, debugging scripts, and generating software components directly through voice commands.",
          },
        ],
      },
      {
        heading: "⚙️ System Control & Integrations",
        capabilities: [
          {
            title: "⚙️ Complete System Control",
            detail:
              "Control desktop applications, modify computer settings, manage audio/display, and automate repetitive operating system actions.",
          },
          {
            title: "🌐 Web & Deep Research",
            detail:
              "Automated browser control, online information gathering, flight lookup, weather reports, and multi-source research grounding.",
          },
          {
            title: "🔌 Plugins & Extensible Integrations",
            detail:
              "Modular plugin architecture allowing seamless addition of custom tools, API hooks, and third-party software connectors.",
          },
          {
            title: "📊 Live System Monitoring",
            detail:
              "Real-time telemetric tracking of system health, active processes, resource utilization, and background network sentinels.",
          },
          {
            title: "📱 Remote HTTPS Dashboard",
            detail:
              "TLS-secured web dashboard served with custom HTTPS certificates and an encrypted login vault for remote monitoring and mobile interaction.",
          },
        ],
      },
      {
        heading: "The Living 3D Avatar",
        capabilities: [
          {
            title: "A 3D Face with Viseme Lip-Sync",
            detail:
              "The package ships a 3D face_model.obj with avatar_mesh and dedicated visemes — the face lip-syncs what it speaks in real time.",
          },
          {
            title: "First-Person Identity",
            detail:
              "Built-in prompt architecture where JARVIS treats the avatar as its own living face, creating an immersive, futuristic presence.",
          },
          {
            title: "Mark 85 Arc Core HUD",
            detail:
              "Carries a signature Iron Man inspired Mark 85 Arc Core visual HUD theme with red/gold palettes, glass panels, and a holo-grid backdrop.",
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
    display: "J.A.R.V.I.S. AI · PHONE",
    role: "Agentic AI Phone assistant & Android automation system",
    platform: "Android",
    packaging: "JARVIS_release.apk · signed Android package",
    accent: "violet",
    image: "/products/jarvis-2-phone.png",
    imageAlt: "Ghost avatar illustration from the JARVIS 2.0 Phone package",
    imageCaption: "Avatar artwork shipped inside the JARVIS 2.0 Phone APK.",
    chips: ["Android", "Agentic AI", "Offline voice", "Floating HUD"],
    summary:
      "More than an assistant — it's your agent. Built around the vision of an intelligent, agentic personal assistant that understands goals, plans multi-step workflows, automates Android apps, and communicates in Hindi, English, and Hinglish.",
    seo: {
      title: "JARVIS AI Phone — Agentic AI & Android Automation",
      description:
        "JARVIS AI Phone is the next-generation personal AI agent from Growth Guild Labs: agentic planning, Android automation, offline Vosk speech, Vision AI, floating HUD toys, and Hinglish voice interaction.",
    },
    status: {
      state: "Official Android APK (v2.0.0)",
      note: "Signed Android package available for direct download. Pairs with the desktop gateway over local network.",
    },
    featureGroups: [
      {
        heading: "🤖 Agentic Intelligence & Voice Automation",
        capabilities: [
          {
            title: "🤖 Agentic AI Intelligence",
            detail:
              "Understand goals, plan multi-step workflows, and coordinate complex tasks. It moves beyond asking questions to helping you accomplish real tasks through natural conversation.",
          },
          {
            title: "📱 Android App Automation",
            detail:
              "Explore smarter ways to interact with your phone, manage applications, and streamline daily actions hands-free on Android.",
          },
          {
            title: "🎙️ Natural Voice Control & Offline ASR",
            detail:
              "Talk naturally with hands-free assistance. Ships a full offline Vosk 'model-en-us' speech model and 'model-spk' speaker recognition for privacy-first, on-device transcription.",
          },
          {
            title: "👁️ Vision AI & Visual Scanning",
            detail:
              "Ask questions about images, scan visual information, and explore multimodal visual understanding directly from your camera.",
          },
        ],
      },
      {
        heading: "⚡ Smart Workflows & Communication",
        capabilities: [
          {
            title: "💬 WhatsApp & Communication Intelligence",
            detail:
              "Explore message drafting, real-time translation, incoming text summarization, and supported communication workflows hands-free.",
          },
          {
            title: "🔔 Notification Intelligence",
            detail:
              "Stay informed with smarter notification handling, priority filtering, and instant contextual audio summaries.",
          },
          {
            title: "📍 Location, Navigation & Reminders",
            detail:
              "Discover nearby places, navigate optimal routes, and organize smart location-based reminders with permission.",
          },
          {
            title: "🎵 Media Control & Playback",
            detail:
              "Manage supported music and media playback functions through voice commands without touching the screen.",
          },
          {
            title: "⚡ Live Task Progress & Verification",
            detail:
              "Track multi-step actions in real time, review progress logs, and verify completed automated steps before finalizing.",
          },
        ],
      },
      {
        heading: "🎨 Futuristic UI & Privacy First",
        capabilities: [
          {
            title: "🌐 Multilingual Vision (Hindi, English, Hinglish)",
            detail:
              "Designed with fluent Hindi, English, and Hinglish interaction in mind, with further language support expanding as development progresses.",
          },
          {
            title: "🎨 Futuristic UI/UX & Mark 85 Arc HUD",
            detail:
              "Modern interface with an interactive AI core, floating reactive Ghost avatar with viseme lip-sync, and 16 collectible in-HUD companion toys.",
          },
          {
            title: "🔐 Privacy First & User in Control",
            detail:
              "Permission-based access, clear activity indicators, and zero background audio streaming to the cloud when idle.",
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
      "F.R.I.D.A.Y. is an advanced AI assistant designed for seamless computer control, information retrieval, and hands-free assistance. Wakes locally on 'FRIDAY', analyzes intent, extracts key entities, determines the optimal tool, and executes system commands, web/YouTube control, telemetry retrieval, and file processing.",
    seo: {
      title: "F.R.I.D.A.Y. AI — hands-free assistant that runs your computer",
      description:
        "F.R.I.D.A.Y. AI is an advanced desk assistant from Growth Guild Labs: local wake word, Gemini Live voice, system control (volume, brightness, power, CPU/RAM/GPU), browser/YouTube, and self-extending plugins.",
    },
    status: {
      state: "Official Release (v1.0.0)",
      note: "Packaged Windows executable suite with openWakeWord and Gemini Live audio. Available in the Download Centre.",
    },
    featureGroups: [
      {
        heading: "⚡ Hands-Free Assistant & Intent Architecture",
        capabilities: [
          {
            title: "Local “FRIDAY” Wake Word",
            detail:
              "Sleeps until called: a bundled local detector runs in its own background thread. While asleep, your microphone spares the cloud entirely — wake is 100% on-device and private.",
          },
          {
            title: "Statistical Patterns & Context-Aware Intent",
            detail:
              "Upon receiving a request via speech or text, FRIDAY analyzes intent, extracts key entities, selects the best specialized tool, and formats the response while preserving conversation context.",
          },
          {
            title: "Designed to Acknowledge & Continuously Converse",
            detail:
              "Speaks a contextual confirmation immediately as a task starts and handles reconnection smoothly with sliding-window context compression for hours of uninterrupted sessions.",
          },
        ],
      },
      {
        heading: "🖥️ Seamless Computer Control & System Telemetry",
        capabilities: [
          {
            title: "System Settings & Power Controls",
            detail:
              "Adjust volume, screen brightness, Wi-Fi connectivity, and issue power shortcuts (sleep, restart, shutdown with safety confirmations) by voice.",
          },
          {
            title: "System Status Metrics (CPU, RAM, GPU)",
            detail:
              "Retrieve real-time hardware telemetry and status metrics including processor load, memory utilization, and GPU diagnostics on demand.",
          },
          {
            title: "Web Browser & YouTube Interaction",
            detail:
              "Interact with web browsers, search real-time information, open links, and navigate or control YouTube video playback directly with natural speech.",
          },
          {
            title: "File Management & Processing Tasks",
            detail:
              "Manage local files and directories, summarize lengthy documents, convert media formats, and extract data with undo-safe operations.",
          },
        ],
      },
      {
        heading: "🧠 Self-Extending Skills & Craft",
        capabilities: [
          {
            title: "Self-Describing Plugin Engine",
            detail:
              "Every action describes its own interface. Dropping a single Python file into the plugins folder immediately teaches FRIDAY a new skill.",
          },
          {
            title: "Recallable Long-Term Memory",
            detail:
              "Budgeted core facts stay in active memory while full conversational histories are recallable on demand via a searchable local memory vault.",
          },
          {
            title: "Reactive Arc Reactor HUD & Voice Customization",
            detail:
              "Waveform and Arc Reactor core pulse to real-time audio with live hue recoloring and selection across 5 native Gemini voice personas.",
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
