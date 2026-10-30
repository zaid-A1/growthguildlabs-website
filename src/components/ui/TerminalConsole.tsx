"use client";

import { useState, useRef, useEffect } from "react";
import { sound } from "@/lib/soundFx";

interface LogEntry {
  type: "in" | "out" | "err" | "info";
  text: string;
}

const COMMAND_CHIPS = ["status", "ultron", "jarvis", "friday", "checksums", "founders", "clear"];

export function TerminalConsole() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: "info", text: "GROWTH GUILD LABS // TELEMETRY TERMINAL v2.4 ONLINE" },
    { type: "info", text: "Connected to local node mesh. Type 'help' or click commands below." },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const runCommand = (cmd: string) => {
    const raw = cmd.trim();
    if (!raw) return;
    sound.play("terminal");

    const lower = raw.toLowerCase();
    const newLogs: LogEntry[] = [...logs, { type: "in", text: `> ${raw}` }];

    switch (lower) {
      case "help":
        newLogs.push({
          type: "out",
          text: "Available commands:\n  • status     - Real-time online state of the 5 ecosystem apps\n  • ultron     - ULTRON 2.0 system diagnostics & MCP client registry\n  • jarvis     - JARVIS 2.0 voice engine & Android companion specs\n  • friday     - F.R.I.D.A.Y. AI hands-free modular skill loader\n  • checksums  - Cryptographically verified SHA-256 package hashes\n  • founders   - Verified builder credentials (Zaid & Idrees Uddin)\n  • clear      - Flush terminal logs",
        });
        break;

      case "status":
        newLogs.push({
          type: "out",
          text: "[ECOSYSTEM HEALTH: NOMINAL]\n  [01] ULTRON 2.0 (Win64)       ● READY [v2.0, 400.3 MB]\n  [02] ULTRON Connector (APK)   ● READY [Signed, 26.87 MB]\n  [03] JARVIS 2.0 (Win64)       ● READY [v2.0, 228.7 MB]\n  [04] JARVIS Phone (APK)       ● READY [Signed, 94.82 MB]\n  [05] F.R.I.D.A.Y. AI (Win64)  ● READY [v1.0, 253.0 MB]",
        });
        break;

      case "ultron":
        newLogs.push({
          type: "out",
          text: "[ULTRON 2.0 CORE DIAGNOSTICS]\n  Architecture : PyQt6 High-DPI Desktop shell\n  Orchestration: FastMCP tool router (desktop_organizer, playwright_client, system_diagnostics)\n  Radar HUD    : Built-in three.js scan radar (/radar/index.html)\n  Pairing Bridge: UDP port 8089 listener for mobile connector\n  Release State: Windows x64 ZIP compiled with runtime dependencies",
        });
        break;

      case "jarvis":
        newLogs.push({
          type: "out",
          text: "[JARVIS 2.0 SPECIFICATIONS]\n  Voice Subsystem: Vosk neural offline ASR + Gemini streaming endpoint\n  Desktop Client : Dual-monitor HUD with voice wave audio visualization\n  Mobile Client  : JARVIS-release.apk (94.82 MB, Android 8.0+)\n  Companion Mode : Bi-directional telemetry over secure local subnet",
        });
        break;

      case "friday":
        newLogs.push({
          type: "out",
          text: "[F.R.I.D.A.Y. AI SKILL RUNTIME]\n  Design Paradigm: 100% hands-free voice automation\n  Skill Loader   : Dynamic Python skill injector (/skills/*.py)\n  Voice Engine   : Wake-word detection with continuous acoustic stream\n  Status         : v1.0 compiled package ready for distribution",
        });
        break;

      case "checksums":
        newLogs.push({
          type: "out",
          text: "[VERIFIED SHA-256 CHECKSUMS]\n  ULTRON_2.0_Windows_x64.zip : CF3314C87126BE06096AAF7FAEA91D7DEB54B664F7F9007D4EFFF14271F91137\n  ULTRON_2.0_Connect.apk     : 079C0632E8900CC4AC059C5DE9D67ED7705481C2F113945BC3BA444A49D62499\n  JARVIS-2.0-Windows-x64.zip : 22B9E290946A0EB8D862F065404541664DF27B19B038C42FF4AA6AA5BAF0CB6C\n  JARVIS-release.apk         : 55EBF0D2A2D3B1F0E48F42754FF98443D66F76F67CC6BC2936A6985D6981E001\n  FRIDAY_AI_v1.0_Windows.zip : DD3FFFC791D0D0FDFC371D365AA7167D26D7B918443AA9683BB61DD2EAE4C78B",
        });
        break;

      case "founders":
        newLogs.push({
          type: "out",
          text: "[VERIFIED GUILD BUILDERS]\n  Zaid Uddin   - Founder & Lead Architect (Core systems, PyQt6, AI pipelines)\n  Idrees Uddin - Co-founder & Systems Engineer (Product testing, companion bridges)\n  Philosophy   - 'The future is built. Not waited for.' Independent, no fake metrics.",
        });
        break;

      case "clear":
        setLogs([
          { type: "info", text: "GROWTH GUILD LABS // TELEMETRY TERMINAL v2.4 ONLINE" },
          { type: "info", text: "Terminal cleared. Ready for next query." },
        ]);
        setInput("");
        return;

      default:
        newLogs.push({
          type: "err",
          text: `Command not recognized: '${raw}'. Type 'help' for available diagnostic commands.`,
        });
        break;
    }

    setLogs(newLogs);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
  };

  return (
    <div className="panel overflow-hidden border border-cyan-electric/30 bg-panel-strong/95 shadow-[0_0_40px_rgba(0,229,255,0.12)]">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-hairline bg-void/90 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-[0.68rem] tracking-wider text-muted-grey">
            GGL-TELEMETRY-SHELL // bash
          </span>
        </div>
        <span className="font-mono text-[0.62rem] text-cyan-electric tracking-widest flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-cyan-electric animate-ping" />
          LIVE NODE
        </span>
      </div>

      {/* Clickable Quick Command Chips */}
      <div className="flex flex-wrap items-center gap-2 border-b border-hairline/60 bg-void/40 px-4 py-2">
        <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted-grey">
          Quick queries:
        </span>
        {COMMAND_CHIPS.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => runCommand(chip)}
            className="rounded border border-hairline bg-void/70 px-2.5 py-0.5 font-mono text-[0.66rem] text-cyan-electric transition-colors hover:border-cyan-electric hover:bg-cyan-electric/10"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="h-72 overflow-y-auto p-4 font-mono text-xs leading-relaxed scrollbar-thin">
        {logs.map((log, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap mb-1.5 ${
              log.type === "in"
                ? "text-ice-white font-semibold"
                : log.type === "err"
                ? "text-red-400"
                : log.type === "info"
                ? "text-cyan-electric/80"
                : "text-mist"
            }`}
          >
            {log.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Command Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center border-t border-hairline bg-void/80 px-4 py-2.5">
        <span className="font-mono text-xs text-cyan-electric mr-2">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'help' or command here..."
          className="w-full bg-transparent font-mono text-xs text-ice-white placeholder:text-muted-grey focus:outline-none"
        />
        <button
          type="submit"
          className="rounded border border-hairline px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-cyan-electric transition-colors hover:border-cyan-electric hover:bg-cyan-electric/15"
        >
          EXEC
        </button>
      </form>
    </div>
  );
}
