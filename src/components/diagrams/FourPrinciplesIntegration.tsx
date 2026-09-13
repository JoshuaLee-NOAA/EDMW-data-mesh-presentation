"use client";

import React from "react";

export default function FourPrinciplesIntegration() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-2 rounded-2xl">
      <div className="relative w-full max-w-[400px]" style={{ aspectRatio: "1/1" }}>
        {/* Top-Left: Domain Ownership (Sky Gold) */}
        <div
          className="absolute flex flex-col items-center justify-center text-center rounded-lg border-2 bg-white shadow-md p-2"
          style={{
            width: "42%",
            height: "36%",
            top: "2%",
            left: "2%",
            borderColor: "rgba(245, 158, 11, 0.5)", // skygold
            background: "rgba(245, 158, 11, 0.06)",
          }}
        >
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-skygold">
            Principle 1
          </span>
          <span className="font-display text-[11px] md:text-xs font-bold text-skygold leading-tight mt-0.5">
            Domain Ownership
          </span>
          <span className="text-[8px] md:text-[9px] text-slate-600 font-medium leading-tight mt-2">
            Distributes accountability to the mission domains that generate and understand the data.
          </span>
        </div>

        {/* Top-Right: Data as a Product (Seagrass) */}
        <div
          className="absolute flex flex-col items-center justify-center text-center rounded-lg border-2 bg-white shadow-md p-2"
          style={{
            width: "42%",
            height: "36%",
            top: "2%",
            right: "2%",
            borderColor: "rgba(0, 168, 143, 0.5)", // seagrass
            background: "rgba(0, 168, 143, 0.06)",
          }}
        >
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-seagrass">
            Principle 2
          </span>
          <span className="font-display text-[11px] md:text-xs font-bold text-seagrass leading-tight mt-0.5">
            Data as a Product
          </span>
          <span className="text-[8px] md:text-[9px] text-slate-600 font-medium leading-tight mt-2">
            Transforms data into an actively managed offering with defined consumers and quality guarantees.
          </span>
        </div>

        {/* Bottom-Left: Self-Serve Platform (NOAA Blue) */}
        <div
          className="absolute flex flex-col items-center justify-center text-center rounded-lg border-2 bg-white shadow-md p-2"
          style={{
            width: "42%",
            height: "36%",
            bottom: "2%",
            left: "2%",
            borderColor: "rgba(0, 48, 135, 0.4)", // noaa-blue
            background: "rgba(0, 48, 135, 0.05)",
          }}
        >
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-noaa-blue">
            Principle 3
          </span>
          <span className="font-display text-[11px] md:text-xs font-bold text-noaa-blue leading-tight mt-0.5">
            Self-Serve Platform
          </span>
          <span className="text-[8px] md:text-[9px] text-slate-600 font-medium leading-tight mt-2">
            Provides shared GCP infrastructure that makes domain autonomy feasible at scale.
          </span>
        </div>

        {/* Bottom-Right: Federated Governance (Coral) */}
        <div
          className="absolute flex flex-col items-center justify-center text-center rounded-lg border-2 bg-white shadow-md p-2"
          style={{
            width: "42%",
            height: "36%",
            bottom: "2%",
            right: "2%",
            borderColor: "rgba(255, 107, 74, 0.5)", // coral
            background: "rgba(255, 107, 74, 0.05)",
          }}
        >
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-coral">
            Principle 4
          </span>
          <span className="font-display text-[11px] md:text-xs font-bold text-coral leading-tight mt-0.5">
            Computational Governance
          </span>
          <span className="text-[8px] md:text-[9px] text-slate-600 font-medium leading-tight mt-2">
            Coordinates decentralized ownership through automated rules rather than manual gatekeeping.
          </span>
        </div>

        {/* SVG: lines + edge labels + center label */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {/* Horizontal: Ownership ↔ Product */}
          <line x1="44%" y1="20%" x2="56%" y2="20%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="50%" y="17%" textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="600">
            enables
          </text>
          {/* Horizontal: Platform ↔ Governance */}
          <line x1="44%" y1="80%" x2="56%" y2="80%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="50%" y="83%" textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="600">
            enforces
          </text>
          {/* Vertical: Ownership ↔ Platform */}
          <line x1="23%" y1="38%" x2="23%" y2="62%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="17%" y="51.5%" textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="600">
            depends on
          </text>
          {/* Vertical: Product ↔ Governance */}
          <line x1="77%" y1="38%" x2="77%" y2="62%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="83%" y="51.5%" textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="600">
            requires
          </text>
          {/* Diagonal: Ownership → Governance */}
          <line x1="44%" y1="38%" x2="56%" y2="62%" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3,3" />
          {/* Diagonal: Platform → Product */}
          <line x1="44%" y1="62%" x2="56%" y2="38%" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3,3" />

          {/* Center label */}
          <text x="50%" y="48%" textAnchor="middle" fill="#334155" fontSize="7" fontStyle="italic" fontWeight="500">
            Interdependent
          </text>
          <text x="50%" y="54%" textAnchor="middle" fill="#334155" fontSize="7" fontStyle="italic" fontWeight="500">
            Coherent System
          </text>
        </svg>

        {/* Legend */}
        <div
          className="absolute flex gap-2 bg-white border border-slate-100 rounded-md px-2 py-1 shadow-sm"
          style={{ bottom: "0%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
        >
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-600 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-skygold shrink-0" />
            <span>Domain</span>
          </span>
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-600 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-seagrass shrink-0" />
            <span>Product</span>
          </span>
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-600 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-noaa-blue shrink-0" />
            <span>Platform</span>
          </span>
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-600 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-coral shrink-0" />
            <span>Governance</span>
          </span>
        </div>
      </div>
    </div>
  );
}
