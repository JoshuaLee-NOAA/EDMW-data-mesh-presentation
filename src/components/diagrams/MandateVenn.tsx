"use client";

import { Fish, Shield, Database } from "lucide-react";

export default function MandateVenn() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-2 rounded-2xl">
      <p className="text-center font-display text-sm md:text-base font-bold text-slate-900 mb-2">
        Legal & Regulatory Mandates
      </p>
      <div className="relative w-full max-w-[420px]" style={{ aspectRatio: "1/1" }}>
        {/* Circle 1: Fisheries Science and Policy (Domain — Sky Gold) — top-left */}
        <div
          className="absolute rounded-full border-2 border-skygold flex flex-col items-center justify-center text-center p-3 shadow-lg"
          style={{
            width: "50%",
            height: "50%",
            top: "5%",
            left: "2%",
            background: "rgba(245, 158, 11, 0.10)", // skygold with opacity
            zIndex: 1,
          }}
        >
          <Fish size={14} className="text-skygold mb-1" />
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-skygold leading-tight text-center mb-1">
            Fisheries Science{" "}
            <br className="md:hidden" />
            & Policy
          </span>
          <span className="text-[8px] md:text-[9px] font-medium text-slate-500 leading-tight">
            MSA, ESA, MMPA & NEPA
          </span>
        </div>

        {/* Circle 2: Information Security (Governance — NOAA Blue) — top-right */}
        <div
          className="absolute rounded-full border-2 border-noaa-blue flex flex-col items-center justify-center text-center p-3 shadow-lg"
          style={{
            width: "50%",
            height: "50%",
            top: "5%",
            right: "2%",
            background: "rgba(0, 48, 135, 0.05)", // noaa-blue with opacity
            zIndex: 1,
          }}
        >
          <Shield size={14} className="text-noaa-blue mb-1" />
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-noaa-blue leading-tight text-center mb-1">
            Information{" "}
            <br className="md:hidden" />
            Security Policy
          </span>
          <span className="text-[8px] md:text-[9px] font-medium text-slate-500 leading-tight">
            NIST SP 800-53
          </span>
        </div>

        {/* Circle 3: Data (Product — Seagrass) — bottom-center */}
        <div
          className="absolute rounded-full border-2 border-seagrass flex flex-col items-center justify-center text-center p-3 shadow-lg"
          style={{
            width: "50%",
            height: "50%",
            bottom: "3%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 168, 143, 0.10)", // seagrass with opacity
            zIndex: 1,
          }}
        >
          <Database size={14} className="text-seagrass mb-1" />
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-seagrass mb-1">
            Data Policy
          </span>
          <span className="text-[8px] md:text-[9px] font-medium text-slate-500 leading-tight">
            Evidence / OPEN Data Acts
          </span>
        </div>

        {/* Center overlap label */}
        <div
          className="absolute bg-white border-2 border-noaa-blue rounded-lg flex flex-col items-center justify-center text-center p-2 z-20 shadow-md"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "34%",
            minHeight: "18%",
          }}
        >
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-noaa-blue leading-tight">
            Fishery Data Products
          </span>
        </div>

        {/* Tension annotation: Domain–Governance seam */}
        <div
          className="absolute text-center z-30"
          style={{
            top: "16%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <span className="text-[8px] md:text-[9px] italic text-slate-500 leading-tight bg-white/80 px-1.5 py-0.5 rounded shadow-sm border border-slate-100">
            quality vs. security
          </span>
        </div>

        {/* Tension annotation: Domain–Product seam */}
        <div
          className="absolute text-center z-30"
          style={{
            top: "48%",
            left: "0%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-[8px] md:text-[9px] italic text-slate-500 leading-tight bg-white/80 px-1.5 py-0.5 rounded shadow-sm border border-slate-100 whitespace-nowrap">
            confidentiality vs. openness
          </span>
        </div>

        {/* Tension annotation: Governance–Product seam */}
        <div
          className="absolute text-center z-30"
          style={{
            top: "48%",
            right: "0%",
            transform: "translate(50%, -50%)",
          }}
        >
          <span className="text-[8px] md:text-[9px] italic text-slate-500 leading-tight bg-white/80 px-1.5 py-0.5 rounded shadow-sm border border-slate-100 whitespace-nowrap">
            security vs. access
          </span>
        </div>

        {/* Legend */}
        <div
          className="absolute flex gap-3 z-20 bg-white border border-slate-100 rounded-md px-2 py-1 shadow-sm"
          style={{ bottom: "2%", left: "50%", transform: "translateX(-50%)" }}
        >
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-600 uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-skygold shrink-0" />
            <span>Domain</span>
          </span>
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-600 uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-noaa-blue shrink-0" />
            <span>Governance</span>
          </span>
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-600 uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-seagrass shrink-0" />
            <span>Data</span>
          </span>
        </div>
      </div>
    </div>
  );
}
