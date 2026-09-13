"use client";

import React from "react";

const domainNames = [
  "Fishery Monitoring", "Stock Assessment", "Vessel Operations",
  "Permits", "Protected Species", "Habitat", "Socioeconomics", "Enforcement",
];

export default function ResourceHierarchy() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3 p-2">
      {/* Header + Recommendation badge */}
      <div className="flex items-center justify-center gap-2.5">
        <span className="text-[9px] font-bold text-noaa-blue bg-noaa-blue/10 px-2.5 py-1 rounded-full border border-noaa-blue/30">
          ✓ Recommended
        </span>
        <p className="text-center font-display text-base md:text-lg font-bold text-slate-900">
          Domain-Separated Hierarchy
        </p>
      </div>

      <div className="w-full max-w-[500px] flex flex-col gap-2">

        {/* Row 1: Domains (Data Products Only) — Skygold */}
        <div className="border-2 border-skygold/40 rounded-md overflow-hidden shadow-sm bg-white">
          <div className="bg-skygold text-white text-center py-1">
            <p className="text-[9px] font-bold uppercase tracking-wider">Domains — Data Products Only</p>
          </div>
          <div className="p-2 bg-skygold/5 flex flex-col gap-1">
            <div className="grid grid-cols-2 gap-1">
              {domainNames.map(d => (
                <div key={d} className="flex items-center gap-1.5 bg-white border border-slate-200 rounded py-1 px-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-skygold shrink-0" />
                  <span className="text-[8px] text-slate-800 font-medium leading-tight">{d}</span>
                </div>
              ))}
            </div>
            <p className="text-[7px] text-slate-500 italic text-center leading-tight mt-0.5">
              Eight domains, each hosting its own governed data products (BigQuery, Data Catalog, Dataplex)
            </p>
          </div>
        </div>

        {/* Row 2: Data Integration + Applications side-by-side */}
        <div className="flex gap-1.5">
          {/* Data Integration — Coral */}
          <div className="flex-1 border-2 border-coral/30 rounded-md overflow-hidden shadow-sm bg-white">
            <div className="bg-coral text-white text-center py-1">
              <p className="text-[8px] font-bold uppercase tracking-wider">Data Integration</p>
            </div>
            <div className="p-1.5 bg-coral/5 flex flex-col gap-0.5">
              <div className="bg-white border border-slate-200 rounded py-1.5 px-2">
                <p className="text-[8px] text-slate-800 font-bold leading-tight">Pipeline projects</p>
                <p className="text-[7px] text-slate-500 italic">Cloud Dataflow, Cloud Storage, Cloud Build</p>
              </div>
            </div>
          </div>

          {/* Applications — Seagrass */}
          <div className="flex-1 border-2 border-seagrass/30 rounded-md overflow-hidden shadow-sm bg-white">
            <div className="bg-seagrass text-white text-center py-1">
              <p className="text-[8px] font-bold uppercase tracking-wider">Applications</p>
            </div>
            <div className="p-1.5 bg-seagrass/5 flex flex-col gap-0.5">
              <div className="bg-white border border-slate-200 rounded py-1.5 px-2">
                <p className="text-[8px] text-slate-800 font-bold leading-tight">Production + field apps</p>
                <p className="text-[7px] text-slate-500 italic">Cloud Run, Looker Studio, GKE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Scientific Computing + HPC/AI-ML side-by-side */}
        <div className="flex gap-1.5">
          {/* Scientific Computing — NOAA Blue */}
          <div className="flex-1 border-2 border-noaa-blue/30 rounded-md overflow-hidden shadow-sm bg-white">
            <div className="bg-noaa-blue text-white text-center py-1">
              <p className="text-[8px] font-bold uppercase tracking-wider">Scientific Computing</p>
            </div>
            <div className="p-1.5 bg-noaa-blue/5 flex flex-col gap-0.5">
              <div className="bg-white border border-slate-200 rounded py-1.5 px-2">
                <p className="text-[8px] text-slate-800 font-bold leading-tight">Research environments</p>
                <p className="text-[7px] text-slate-500 italic">Vertex AI Workbench, Cloud Workstations</p>
              </div>
            </div>
          </div>

          {/* HPC / AI-ML — Slate */}
          <div className="flex-1 border-2 border-slate-500/30 rounded-md overflow-hidden shadow-sm bg-white">
            <div className="bg-slate-500 text-white text-center py-1">
              <p className="text-[8px] font-bold uppercase tracking-wider">HPC / AI-ML</p>
            </div>
            <div className="p-1.5 bg-slate-500/5 flex flex-col gap-0.5">
              <div className="bg-white border border-slate-200 rounded py-1.5 px-2">
                <p className="text-[8px] text-slate-800 font-bold leading-tight">Specialized compute</p>
                <p className="text-[7px] text-slate-500 italic">GPU Compute, Batch, HPC Toolkit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-folder IAM annotation */}
        <div className="flex items-center justify-center gap-2 py-0.5">
          <svg width="80" height="14" viewBox="0 0 80 14" className="shrink-0">
            <line x1="5" y1="7" x2="75" y2="7" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3" />
            <polygon points="71,4 76,7 71,10" fill="#CBD5E1" />
          </svg>
          <span className="text-[7px] text-slate-500 font-medium italic leading-tight">
            Cross-folder IAM: Sci Computing → Domains · Apps → Domains + Data Integration
          </span>
        </div>

        {/* Shared foundation: Platform + Security */}
        <div className="flex gap-1.5">
          <div className="flex-1 border-2 border-slate-700/30 rounded-md overflow-hidden shadow-sm bg-white">
            <div className="bg-slate-700 text-white text-center py-1">
              <p className="text-[8px] font-bold uppercase tracking-wider">Platform</p>
            </div>
            <div className="p-1.5 bg-slate-700/5 flex flex-col gap-0.5">
              <div className="bg-white border border-slate-200 rounded py-1.5 px-2">
                <p className="text-[8px] text-slate-800 font-bold leading-tight">Shared infrastructure</p>
                <p className="text-[7px] text-slate-500 italic">Networking · Identity · Monitoring · Billing</p>
              </div>
            </div>
          </div>

          <div className="flex-1 border-2 border-slate-800/30 rounded-md overflow-hidden shadow-sm bg-white">
            <div className="bg-slate-800 text-white text-center py-1">
              <p className="text-[8px] font-bold uppercase tracking-wider">Security</p>
            </div>
            <div className="p-1.5 bg-slate-800/5 flex flex-col gap-0.5">
              <div className="bg-white border border-slate-200 rounded py-1.5 px-2">
                <p className="text-[8px] text-slate-800 font-bold leading-tight">Audit + governance</p>
                <p className="text-[7px] text-slate-500 italic">Logging · SCC · Audit Management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom annotation */}
        <p className="text-[7px] text-slate-500 font-medium italic text-center leading-tight">
          Platform and Security serve all folders. FinOps labeling and NIST controls apply regardless of workload placement.
        </p>

        {/* Legend */}
        <div className="flex justify-center gap-3 flex-wrap">
          <span className="flex items-center gap-1 text-[8px] font-medium">
            <span className="w-2.5 h-2.5 rounded-sm bg-skygold shrink-0" />
            <span className="text-slate-600">Domains</span>
          </span>
          <span className="flex items-center gap-1 text-[8px] font-medium">
            <span className="w-2.5 h-2.5 rounded-sm bg-coral shrink-0" />
            <span className="text-slate-600">Data Int.</span>
          </span>
          <span className="flex items-center gap-1 text-[8px] font-medium">
            <span className="w-2.5 h-2.5 rounded-sm bg-seagrass shrink-0" />
            <span className="text-slate-600">Apps</span>
          </span>
          <span className="flex items-center gap-1 text-[8px] font-medium">
            <span className="w-2.5 h-2.5 rounded-sm bg-noaa-blue shrink-0" />
            <span className="text-slate-600">Sci Comp</span>
          </span>
          <span className="flex items-center gap-1 text-[8px] font-medium">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-500 shrink-0" />
            <span className="text-slate-600">HPC</span>
          </span>
          <span className="flex items-center gap-1 text-[8px] font-medium">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-800 shrink-0" />
            <span className="text-slate-600">Security</span>
          </span>
        </div>
      </div>
    </div>
  );
}
