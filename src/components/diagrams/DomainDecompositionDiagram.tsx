"use client";

import React from "react";
import { Star } from "lucide-react";

const domains = [
  { id: 1, label: "Stock Assessment & Surveys", cite: "MSA §404, NS2", highlight: false },
  { id: 2, label: "Fishery Monitoring", cite: "MSA §403", highlight: true },
  { id: 3, label: "Vessel Operations & Effort", cite: "MSA §402", highlight: false },
  { id: 4, label: "Permits & Limited Access", cite: "MSA §303A", highlight: false },
  { id: 5, label: "Protected Species & Bycatch", cite: "MSA NS9, ESA, MMPA", highlight: false },
  { id: 6, label: "Habitat Conservation", cite: "MSA §305, EFH", highlight: false },
  { id: 7, label: "Socioeconomics", cite: "MSA NS8", highlight: false },
  { id: 8, label: "Enforcement", cite: "MSA §311", highlight: false },
];

const refProducts = [
  "Species Taxonomies",
  "Vessel Registries",
  "Geographic Boundaries",
];

export default function DomainDecompositionDiagram() {
  return (
    <div className="flex flex-col gap-3 justify-center w-full max-w-md mx-auto p-4 rounded-2xl">
      {/* Header */}
      <div className="text-center mb-2">
        <p className="font-display text-sm md:text-base font-bold text-noaa-blue leading-tight">
          8 Mission Domains
        </p>
        <p className="font-sans text-[10px] md:text-[11px] text-slate-500 leading-tight mt-0.5">
          Decomposed by MSA statutory function, not by region
        </p>
        <p className="font-sans text-[9px] italic text-slate-400 mt-1 flex items-center justify-center gap-1">
          <Star className="w-3 h-3 text-skygold fill-skygold" /> EM case study domain (MSA §403)
        </p>
      </div>

      {/* 8 stacked domain cards */}
      <div className="flex flex-col gap-1.5">
        {domains.map((d) => (
          <div
            key={d.id}
            className={`flex items-center justify-between rounded-lg px-3 py-2 transition-all ${
              d.highlight
                ? "border-2 border-skygold bg-skygold/10 shadow-sm"
                : "border border-noaa-blue/20 bg-slate-50"
            }`}
          >
            <p className="font-display text-[11px] sm:text-xs font-bold text-noaa-blue flex items-center gap-1.5">
              {d.highlight && <Star className="w-3.5 h-3.5 text-skygold fill-skygold" />}
              {d.label}
            </p>
            <p className="font-sans text-[9px] sm:text-[10px] font-medium text-slate-500 ml-2 shrink-0">
              {d.cite}
            </p>
          </div>
        ))}
      </div>

      {/* Shared Reference Products */}
      <div className="border-t border-slate-200 pt-3 mt-2">
        <p className="font-sans text-[9px] sm:text-[10px] text-slate-500 text-center font-medium uppercase tracking-wider mb-2">
          Shared Reference Products
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {refProducts.map((r) => (
            <span
              key={r}
              className="border border-noaa-blue/20 rounded-full px-2.5 py-1 text-[9px] sm:text-[10px] font-medium text-noaa-blue bg-noaa-blue/5"
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
