"use client";

import { useState, useRef, useEffect } from "react";
import { sound } from "@/lib/proceduralAudio";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "system" | "accent";
  text: string;
}

const INITIAL_LINES: TerminalLine[] = [
  {
    id: "init-1",
    type: "system",
    text: "GROWTH GUILD LABS // NEURAL KERNEL v2.4.0 [READY]",
  },
  {
    id: "init-2",
    type: "accent",
    text: "Host: Windows x64 Core | Pairing Gateway: Local WebSocket | ASR: Vosk Offline",
  },
  {
    id: "init-3",
    type: "output",
    text: "Type 'help' or click any quick diagnostic chip below to execute.",
  },
];

export function LiveNeuralTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [inputVal, setInputVal] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    sound.playClick();

    const newLines: TerminalLine[] = [
      ...lines,
      { id: `in-${Date.now()}`, type: "input", text: `❯ ${cmd}` },
    ];

    if (!trimmed) {
      setLines(newLines);
      return;
    }

    if (trimmed === "clear") {
      setLines([
        {
          id: `clear-${Date.now()}`,
          type: "system",
          text: "TERMINAL CLEARED // NEURAL KERNEL STANDBY",
        },
      ]);
      setInputVal("");
      return;
    }

    if (trimmed === "help") {
      newLines.push(
        { id: `out-${Date.now()}-1`, type: "accent", text: "AVAILABLE KERNEL COMMANDS:" },
        { id: `out-${Date.now()}-2`, type: "output", text: "  status      - Run full ecosystem node telemetry check" },
        { id: `out-${Date.now()}-3`, type: "output", text: "  ultron      - Inspect ULTRON 2.0 FastMCP 56-tool pipeline" },
        { id: `out-${Date.now()}-4`, type: "output", text: "  jarvis      - Check 3D Avatar & Vosk speech engines" },
        { id: `out-${Date.now()}-5`, type: "output", text: "  friday      - Query Gemini Live native audio voice status" },
        { id: `out-${Date.now()}-6`, type: "output", text: "  download    - Print active APK & Windows package downloads" },
        { id: `out-${Date.now()}-7`, type: "output", text: "  founders    - Verify Growth Guild Labs leadership manifest" },
        { id: `out-${Date.now()}-8`, type: "output", text: "  clear       - Wipe console buffer" }
      );
    } else if (trimmed === "status") {
      newLines.push(
        { id: `out-${Date.now()}-1`, type: "accent", text: "DIAGNOSTIC TELEMETRY MATRIX:" },
        { id: `out-${Date.now()}-2`, type: "output", text: "  [OK] ULTRON 2.0 Desktop       :: PyQt6 Shell · 56 MCP Tools · ONLINE" },
        { id: `out-${Date.now()}-3`, type: "output", text: "  [OK] ULTRON 2.0 Connector     :: Android Gateway · ML Kit Barcode · ONLINE" },
        { id: `out-${Date.now()}-4`, type: "output", text: "  [OK] JARVIS 2.0 Desktop       :: 3D Face Avatar · Mark 85 Core · ONLINE" },
        { id: `out-${Date.now()}-5`, type: "output", text: "  [OK] JARVIS 2.0 Phone         :: Offline Vosk ASR · Hinglish AI · ONLINE" },
        { id: `out-${Date.now()}-6`, type: "output", text: "  [OK] F.R.I.D.A.Y. AI          :: Gemini Live Voice Engine · ONLINE" }
      );
    } else if (trimmed === "ultron") {
      newLines.push(
        { id: `out-${Date.now()}-1`, type: "accent", text: "ULTRON 2.0 CAPABILITY MANIFEST:" },
        { id: `out-${Date.now()}-2`, type: "output", text: "  • Actions: 56+ FastMCP modules (Browser, Document, Settings)" },
        { id: `out-${Date.now()}-3`, type: "output", text: "  • Browser: Playwright Headless MCP Client" },
        { id: `out-${Date.now()}-4`, type: "output", text: "  • Vision: OpenCV screen processing + real-time context capture" },
        { id: `out-${Date.now()}-5`, type: "output", text: "  • Gateway: FastAPI + Local WebSocket zero-cloud pairing" }
      );
    } else if (trimmed === "jarvis") {
      newLines.push(
        { id: `out-${Date.now()}-1`, type: "accent", text: "JARVIS 2.0 SUBSYSTEM VERIFICATION:" },
        { id: `out-${Date.now()}-2`, type: "output", text: "  • 3D Viseme Avatar: face_model.obj real-time lip synchronization" },
        { id: `out-${Date.now()}-3`, type: "output", text: "  • Offline Speech: Vosk model-en-us + model-spk speaker authentication" },
        { id: `out-${Date.now()}-4`, type: "output", text: "  • Memory Engine: memory/long_term.json persistent vault" },
        { id: `out-${Date.now()}-5`, type: "output", text: "  • Android APK: Universal signed release package (94.8 MB)" }
      );
    } else if (trimmed === "friday") {
      newLines.push(
        { id: `out-${Date.now()}-1`, type: "accent", text: "F.R.I.D.A.Y. AI NATIVE VOICE ENGINE:" },
        { id: `out-${Date.now()}-2`, type: "output", text: "  • Voice Engine: Gemini Flash 3.1 Live native bidirectional audio" },
        { id: `out-${Date.now()}-3`, type: "output", text: "  • Wake Word: Local openWakeWord 'FRIDAY' (100% private offline)" },
        { id: `out-${Date.now()}-4`, type: "output", text: "  • Telemetry: Real-time CPU, RAM, GPU hardware status sensors" },
        { id: `out-${Date.now()}-5`, type: "output", text: "  • Extensibility: Drop-in single-file Python plugin architecture" }
      );
    } else if (trimmed === "download") {
      newLines.push(
        { id: `out-${Date.now()}-1`, type: "accent", text: "ACTIVE DISTRIBUTED PACKAGES:" },
        { id: `out-${Date.now()}-2`, type: "output", text: "  1. ULTRON 2.0 (Win x64)     :: 400.3 MB · SHA-256: CF3314...1137" },
        { id: `out-${Date.now()}-3`, type: "output", text: "  2. ULTRON Connect (APK)     :: 26.8 MB  · /releases/ULTRON_2.0_Connect.apk" },
        { id: `out-${Date.now()}-4`, type: "output", text: "  3. JARVIS 2.0 (Win x64)     :: 228.7 MB · SHA-256: 22B9E2...0CB6" },
        { id: `out-${Date.now()}-5`, type: "output", text: "  4. JARVIS Phone (APK)       :: 94.8 MB  · /releases/JARVIS-release.apk" },
        { id: `out-${Date.now()}-6`, type: "output", text: "  5. F.R.I.D.A.Y. AI (Win)    :: 253.0 MB · SHA-256: DD3FFF...4C78" }
      );
    } else if (trimmed === "founders") {
      newLines.push(
        { id: `out-${Date.now()}-1`, type: "accent", text: "GROWTH GUILD LABS LEADERSHIP MANIFEST:" },
        { id: `out-${Date.now()}-2`, type: "output", text: "  • Zaid Uddin    :: CEO & Founder · Lead System Architect (PyQt6/Voice/MCP)" },
        { id: `out-${Date.now()}-3`, type: "output", text: "  • Idrees Uddin  :: Co-founder · Systems Engineering & Companion Gateways" },
        { id: `out-${Date.now()}-4`, type: "output", text: "  • GitHub Repo   :: https://github.com/zaid-A1/growthguildlabs-website" }
      );
    } else {
      newLines.push({
        id: `err-${Date.now()}`,
        type: "system",
        text: `Command not recognized: '${trimmed}'. Type 'help' for valid instructions.`,
      });
    }

    setLines(newLines);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    }
  };

  const chips = [
    { label: "SYS_STATUS", cmd: "status" },
    { label: "ULTRON_MCP", cmd: "ultron" },
    { label: "JARVIS_3D", cmd: "jarvis" },
    { label: "FRIDAY_VOICE", cmd: "friday" },
    { label: "DOWNLOADS", cmd: "download" },
    { label: "FOUNDERS", cmd: "founders" },
  ];

  return (
    <div className="rounded-2xl border border-cyan-electric/30 bg-[#02070b]/95 p-5 sm:p-7 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] font-mono text-xs overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-red-500/80" />
          <span className="size-3 rounded-full bg-yellow-500/80" />
          <span className="size-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-[0.7rem] uppercase tracking-wider text-muted-grey">
            TERMINAL // GGL_LIVE_CONSOLE
          </span>
        </div>
        <span className="text-[0.65rem] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          CONNECTED : LOCALHOST:8080
        </span>
      </div>

      {/* Terminal log output */}
      <div className="h-64 sm:h-72 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-white/10">
        {lines.map((l) => (
          <div
            key={l.id}
            className={`leading-relaxed ${
              l.type === "input"
                ? "text-ice-white font-bold"
                : l.type === "accent"
                ? "text-cyan-electric font-semibold"
                : l.type === "system"
                ? "text-yellow-400/90"
                : "text-mist/90"
            }`}
          >
            {l.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Quick click command chips */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
        <span className="text-[0.65rem] text-muted-grey uppercase tracking-wider mr-1">
          QUICK EXECUTE:
        </span>
        {chips.map((c) => (
          <button
            key={c.label}
            type="button"
            onClick={() => executeCommand(c.cmd)}
            onMouseEnter={() => sound.playHover()}
            className="rounded border border-cyan-electric/30 bg-cyan-electric/5 px-2.5 py-1 text-[0.65rem] text-cyan-electric hover:bg-cyan-electric/15 hover:border-cyan-electric transition-colors"
          >
            [{c.label}]
          </button>
        ))}
        <button
          type="button"
          onClick={() => executeCommand("clear")}
          className="rounded border border-white/10 px-2 py-1 text-[0.65rem] text-muted-grey hover:text-white"
        >
          [CLEAR]
        </button>
      </div>

      {/* Command prompt input */}
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-cyan-electric/40 bg-void/80 px-3.5 py-2.5">
        <span className="text-emerald-400 font-bold">❯</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command ('help', 'status', 'ultron', 'download')..."
          className="w-full bg-transparent text-ice-white outline-none placeholder:text-muted-grey/50"
        />
        <button
          type="button"
          onClick={() => executeCommand(inputVal || "status")}
          className="text-cyan-electric text-[0.7rem] uppercase tracking-wider hover:underline"
        >
          RUN
        </button>
      </div>
    </div>
  );
}
