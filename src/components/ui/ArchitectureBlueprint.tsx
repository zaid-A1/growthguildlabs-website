"use client";

import { useState } from "react";
import { sound } from "@/lib/proceduralAudio";

interface ArchitectureNode {
  id: string;
  title: string;
  role: string;
  icon: string;
  color: string;
  specs: string[];
  protocol: string;
}

const NODES: ArchitectureNode[] = [
  {
    id: "windows-core",
    title: "Windows Host Intelligence",
    role: "Desktop Operating Shell (PyQt6)",
    icon: "🖥️",
    color: "#00E5FF",
    specs: [
      "PyQt6 Hardware-Accelerated UI",
      "Gemini Flash 3.1 Live Audio Pipeline",
      "Local openWakeWord & Vosk ASR Engine",
      "Persistent memory_manager (long_term.json)",
    ],
    protocol: "FASTAPI // PORT 8080 LOCALHOST",
  },
  {
    id: "gateway-bridge",
    title: "Companion Gateway Bridge",
    role: "Zero-Cloud Encrypted Transport",
    icon: "⚡",
    color: "#FFD700",
    specs: [
      "Local WebSocket Handshake Protocol",
      "Expiring Pairing Offers & Revocation",
      "ML Kit QR Barcode High-Speed Handshake",
      "Per-Device Secret in Encrypted Datastore",
    ],
    protocol: "WSS:// ENCRYPTED JSON ENVELOPES",
  },
  {
    id: "android-remote",
    title: "Android Companion Mobile",
    role: "Companion Remote & Voice Agent",
    icon: "📱",
    color: "#7C5CFF",
    specs: [
      "Jetpack Compose + Material 3 Native UI",
      "Offline Vosk Speech Transcription",
      "16 Collectible Floating HUD Overlay Toys",
      "Multilingual Hindi/English/Hinglish Voice",
    ],
    protocol: "OKHTTP // CAMERA-CAMERA2 PIPELINE",
  },
  {
    id: "mcp-tools",
    title: "FastMCP Action Layer",
    role: "Autonomous Tool-Calling Matrix",
    icon: "🔌",
    color: "#00FF88",
    specs: [
      "56+ Specialized FastMCP Python Tools",
      "Playwright Headless Browser Automation",
      "DOCX / XLSX / PDF Document Generator",
      "Arduino & Electronic Wiring Schematics",
    ],
    protocol: "PYTHON FAST-MCP PROTOCOL V1.0",
  },
];

export function ArchitectureBlueprint() {
  const [activeNode, setActiveNode] = useState<ArchitectureNode>(NODES[0]);

  return (
    <div className="relative rounded-3xl border border-white/10 bg-void/70 p-6 sm:p-10 backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-cyan-electric">
            CROSS-PLATFORM TOPOLOGY
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-ice-white mt-1">
            System Connectivity Matrix
          </h3>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-mist font-light leading-relaxed">
          Hover or tap any architectural node to inspect encrypted payloads, data streams, and hardware execution layers.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
        {NODES.map((node) => {
          const isSelected = activeNode.id === node.id;
          return (
            <div
              key={node.id}
              onClick={() => {
                setActiveNode(node);
                sound.playClick();
              }}
              onMouseEnter={() => {
                setActiveNode(node);
                sound.playHover();
              }}
              className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "bg-white/[0.05] shadow-[0_0_30px_rgba(0,0,0,0.8)] scale-[1.02]"
                  : "border-white/5 bg-white/[0.02] hover:border-white/20"
              }`}
              style={{
                borderColor: isSelected ? node.color : undefined,
                boxShadow: isSelected ? `0 0 25px ${node.color}22` : undefined,
              }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{node.icon}</span>
                  <span
                    className="font-mono text-[0.6rem] uppercase tracking-widest px-2 py-0.5 rounded-full border"
                    style={{
                      color: node.color,
                      borderColor: `${node.color}44`,
                      backgroundColor: `${node.color}11`,
                    }}
                  >
                    ACTIVE
                  </span>
                </div>
                <h4 className="mt-4 font-display text-lg font-bold text-ice-white">
                  {node.title}
                </h4>
                <p className="mt-1 font-mono text-xs text-muted-grey">
                  {node.role}
                </p>
              </div>

              <div className="mt-6 border-t border-white/5 pt-3">
                <span className="font-mono text-[0.62rem] text-cyan-electric block truncate">
                  {node.protocol}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Node Spec Inspector Terminal */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-[#010609] p-5 sm:p-7">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-base">{activeNode.icon}</span>
            <span
              className="font-mono text-xs font-bold uppercase tracking-wider"
              style={{ color: activeNode.color }}
            >
              INSPECTING: {activeNode.title}
            </span>
          </div>
          <span className="font-mono text-[0.65rem] text-muted-grey uppercase">
            PROTOCOL: {activeNode.protocol}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {activeNode.specs.map((spec, i) => (
            <div
              key={spec}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs font-mono text-mist"
            >
              <span
                className="font-bold text-[0.7rem]"
                style={{ color: activeNode.color }}
              >
                0{i + 1} //
              </span>
              <span>{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
