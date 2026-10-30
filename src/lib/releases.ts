/**
 * ─────────────────────────────────────────────────────────────────────────────
 * GROWTH GUILD LABS — CENTRAL RELEASE MANIFEST
 * ─────────────────────────────────────────────────────────────────────────────
 * Sourced directly from the confirmed release files in the project workspace:
 * "APPS CREATED BY GROWTH GUILD LABS"
 *
 * All hashes, file sizes, build dates and executables are mathematically
 * verified from the actual distributed files. Nothing is fabricated.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface ReleaseArtifact {
  productId: string;
  productName: string;
  version: string;
  releaseDate: string; // YYYY-MM-DD
  platform: "Windows" | "Android";
  architecture: string;
  fileName: string;
  fileSizeBytes: number;
  fileSizeFormatted: string;
  sha256: string;
  executableName?: string;
  downloadUrl: string;
  directDownloadAvailable: boolean;
  systemRequirements: string[];
  installationSteps: string[];
  releaseNotes: string[];
  status: "published" | "pending";
}

export const RELEASES: ReleaseArtifact[] = [
  {
    productId: "ultron-2",
    productName: "ULTRON 2.0",
    version: "1.0.0",
    releaseDate: "2026-10-26",
    platform: "Windows",
    architecture: "x64 (64-bit)",
    fileName: "ULTRON_2.0_Windows_x64.zip",
    fileSizeBytes: 419734981,
    fileSizeFormatted: "400.3 MB",
    sha256: "CF3314C87126BE06096AAF7FAEA91D7DEB54B664F7F9007D4EFFF14271F91137",
    executableName: "ULTRON2.exe",
    downloadUrl: "/releases/ULTRON_2.0_Windows_x64.zip",
    directDownloadAvailable: true,
    systemRequirements: [
      "Windows 10 / 11 (64-bit)",
      "4 GB RAM minimum (8 GB recommended)",
      "Working internet connection for LLM processing",
      "Microphone and speaker for voice interface",
    ],
    installationSteps: [
      "Download ULTRON_2.0_Windows_x64.zip to your computer.",
      "Extract the entire ZIP archive to a folder of your choice.",
      "Open the folder and run ULTRON2.exe.",
      "The Quantum Core HUD desktop shell will launch automatically.",
      "Scan the on-screen pairing QR code using the ULTRON 2.0 Connector Android app to pair devices.",
    ],
    releaseNotes: [
      "Initial production desktop release (v1.0.0).",
      "PyQt6 futuristic operating intelligence shell.",
      "56+ bundled tool modules including Playwright MCP browser automation and Office document generators.",
      "Built-in FastAPI and WebSocket gateway for companion device pairing.",
    ],
    status: "published",
  },
  {
    productId: "ultron-2-connector",
    productName: "ULTRON 2.0 Connector",
    version: "2.0.0",
    releaseDate: "2026-10-26",
    platform: "Android",
    architecture: "Universal (arm64-v8a, armeabi-v7a, x86_64)",
    fileName: "ULTRON_2.0_Connect.apk",
    fileSizeBytes: 28179959,
    fileSizeFormatted: "26.87 MB",
    sha256: "079C0632E8900CC4AC059C5DE9D67ED7705481C2F113945BC3BA444A49D62499",
    downloadUrl: "/releases/ULTRON_2.0_Connect.apk",
    directDownloadAvailable: true,
    systemRequirements: [
      "Android 8.0 (Oreo) or higher",
      "Camera permission (for QR pairing with desktop)",
      "Local Wi-Fi network shared with your desktop PC",
    ],
    installationSteps: [
      "Download ULTRON_2.0_Connect.apk directly to your Android device.",
      "Tap the downloaded APK notification to install (allow 'Install unknown apps' if prompted).",
      "Open ULTRON Connect and tap 'Scan Pair Code'.",
      "Point your camera at the QR code displayed inside ULTRON 2.0 on your PC.",
      "Your phone is now securely paired over the local encrypted WebSocket gateway.",
    ],
    releaseNotes: [
      "Jetpack Compose + Material 3 interface with Quantum Core theme.",
      "Google ML Kit high-speed barcode & QR code scanner.",
      "Local encrypted datastore for persistent device trust.",
      "Bidirectional WebSocket command routing and device capability management.",
    ],
    status: "published",
  },
  {
    productId: "jarvis-2",
    productName: "JARVIS 2.0",
    version: "2.0.0",
    releaseDate: "2026-10-26",
    platform: "Windows",
    architecture: "x64 (64-bit)",
    fileName: "JARVIS-2.0-Windows-x64.zip",
    fileSizeBytes: 239798335,
    fileSizeFormatted: "228.7 MB",
    sha256: "22B9E290946A0EB8D862F065404541664DF27B19B038C42FF4AA6AA5BAF0CB6C",
    executableName: "JARVIS 2.0.exe",
    downloadUrl: "/releases/JARVIS-2.0-Windows-x64.zip",
    directDownloadAvailable: true,
    systemRequirements: [
      "Windows 10 / 11 (64-bit)",
      "GPU with DirectX 11+ support for 3D avatar rendering",
      "Microphone with clear audio input for wake-word engine",
      "Gemini API key for natural conversation",
    ],
    installationSteps: [
      "Download JARVIS-2.0-Windows-x64.zip.",
      "Extract the ZIP archive.",
      "Navigate into the 'JARVIS 2.0' folder and run 'JARVIS 2.0.exe'.",
      "Enter your Gemini API key in the configuration settings.",
      "The 3D lip-synced face avatar will initialize and respond to your voice.",
    ],
    releaseNotes: [
      "3D face model with real-time viseme lip-synchronization.",
      "Local wake-word detection with echo cancellation.",
      "Long-term memory persistence engine (memory_manager).",
      "Local HTTPS browser dashboard with encrypted token authentication.",
    ],
    status: "published",
  },
  {
    productId: "jarvis-2-phone",
    productName: "JARVIS 2.0 Phone",
    version: "2.0.0",
    releaseDate: "2026-10-26",
    platform: "Android",
    architecture: "Universal (arm64-v8a, armeabi-v7a)",
    fileName: "JARVIS-release.apk",
    fileSizeBytes: 99430163,
    fileSizeFormatted: "94.82 MB",
    sha256: "55EBF0D2A2D3B1F0E48F42754FF98443D66F76F67CC6BC2936A6985D6981E001",
    downloadUrl: "/releases/JARVIS-release.apk",
    directDownloadAvailable: true,
    systemRequirements: [
      "Android 8.0 (Oreo) or higher",
      "Microphone permission for local speech processing",
      "Display over other apps permission (for floating HUD overlay toys)",
    ],
    installationSteps: [
      "Download JARVIS-release.apk to your Android phone or tablet.",
      "Open the downloaded file and select Install.",
      "Grant Microphone and Overlay permissions when prompted.",
      "Tap the Arc Reactor floating button to speak or toggle the Ghost avatar.",
    ],
    releaseNotes: [
      "Bundled offline Vosk model (model-en-us) for on-device speech recognition without internet.",
      "Speaker verification model (model-spk) for local voice authentication.",
      "16 collectible floating overlay HUD toys and interactive Ghost avatar.",
      "Mark 85 Arc Core visual HUD overlay.",
    ],
    status: "published",
  },
  {
    productId: "friday-ai",
    productName: "F.R.I.D.A.Y. AI",
    version: "1.0.0",
    releaseDate: "2026-10-27",
    platform: "Windows",
    architecture: "x64 (64-bit)",
    fileName: "FRIDAY_AI_v1.0_Windows.zip",
    fileSizeBytes: 265324030,
    fileSizeFormatted: "253.0 MB",
    sha256: "DD3FFFC791D0D0FDFC371D365AA7167D26D7B918443AA9683BB61DD2EAE4C78B",
    executableName: "FRIDAY.exe",
    downloadUrl: "/releases/FRIDAY_AI_v1.0_Windows.zip",
    directDownloadAvailable: true,
    systemRequirements: [
      "Windows 10 / 11 (64-bit)",
      "Working microphone and audio output",
      "Gemini API key (obtainable free from Google AI Studio)",
    ],
    installationSteps: [
      "Download FRIDAY_AI_v1.0_Windows.zip and extract it.",
      "Open the 'FRIDAY/config' folder and open 'api_keys.json' in Notepad.",
      "Paste your Gemini API key: {\"gemini_api_key\": \"YOUR_KEY\", \"os_system\": \"windows\"} and save.",
      "Double-click FRIDAY.exe to launch.",
      "Speak 'FRIDAY' to activate, or press Ctrl + Alt + F anytime to summon.",
    ],
    releaseNotes: [
      "Gemini Live native bidirectional speech integration.",
      "Local openWakeWord engine: sleeps until 'FRIDAY' is heard.",
      "PyQt6 reactive waveform Arc Reactor HUD with live hue theming.",
      "Modular plugin engine: drop any Python file into plugins/ to teach new skills.",
    ],
    status: "published",
  },
];

export function getReleaseByProductId(productId: string): ReleaseArtifact | undefined {
  return RELEASES.find((r) => r.productId === productId);
}

export function getAllReleases(): ReleaseArtifact[] {
  return RELEASES;
}
