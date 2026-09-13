"use client";

import React from "react";

export default function DataProductCreationWorkflow() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-1.5 px-2 py-3 rounded-2xl">
      <p className="text-center font-display text-sm md:text-base font-bold text-slate-900 mb-2">
        Data Product Creation & FinOps
      </p>

      {/* Step 1: DPO initiates (Domain — Skygold) */}
      <div className="flex items-center gap-2 bg-white border-2 border-skygold/30 rounded-md p-1.5 shadow-sm">
        <div className="w-4 h-4 rounded-full bg-skygold text-white flex items-center justify-center text-[8px] font-bold shrink-0">1</div>
        <span className="text-[9px] sm:text-[10px] text-slate-800 font-medium">DPO executes platform Terraform template</span>
      </div>

      {/* Steps 2–7: Platform Automation (Automation — Coral) */}
      <div className="border-2 border-dashed border-coral/40 rounded-md p-2 bg-coral/5 shadow-sm">
        <p className="text-[9px] sm:text-[10px] font-bold text-coral uppercase tracking-wider mb-1.5">Platform Automation</p>
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-md p-1.5 shadow-xs mb-1.5">
          <div className="w-4 h-4 rounded-full bg-coral text-white flex items-center justify-center text-[8px] font-bold shrink-0">2</div>
          <span className="text-[9px] sm:text-[10px] text-slate-800">Cloud Build — Validate schema, run integration tests</span>
        </div>
        <div className="flex gap-1">
          {[
            { n: "3", label: "Provision BigQuery dataset" },
            { n: "4", label: "Apply IAM policies" },
            { n: "5", label: "Register in Data Catalog" },
            { n: "6", label: "Deploy quality rules" },
            { n: "7", label: "Deploy SLO dashboards" },
          ].map((step) => (
            <div key={step.n} className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-white border border-slate-200 rounded-md p-1 shadow-xs">
              <span className="text-[9px] font-bold text-coral">{step.n}</span>
              <span className="text-[7px] text-slate-500 text-center leading-tight">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step 8: Sandbox (Legacy — Slate) */}
      <div className="border-2 border-dashed border-slate-400/40 rounded-md p-2 bg-slate-100/50 shadow-sm">
        <p className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Sandbox</p>
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-md p-1.5 shadow-xs">
          <div className="w-4 h-4 rounded-full bg-slate-500 text-white flex items-center justify-center text-[8px] font-bold shrink-0">8</div>
          <span className="text-[9px] sm:text-[10px] text-slate-800">Sandbox validation — Isolated environment</span>
        </div>
      </div>

      {/* Step 9: Promote */}
      <div className="flex items-center gap-2 bg-white border-2 border-skygold/30 rounded-md p-1.5 shadow-sm">
        <div className="w-4 h-4 rounded-full bg-skygold text-white flex items-center justify-center text-[8px] font-bold shrink-0">9</div>
        <span className="text-[9px] sm:text-[10px] text-slate-800 font-medium">DPO promotes to production</span>
      </div>

      {/* Step 10: Discoverable (Interface — Seagrass) */}
      <div className="flex items-center gap-2 bg-white border-2 border-seagrass/30 rounded-md p-1.5 shadow-sm">
        <div className="w-4 h-4 rounded-full bg-seagrass text-white flex items-center justify-center text-[8px] font-bold shrink-0">10</div>
        <span className="text-[9px] sm:text-[10px] text-slate-800 font-medium">Discoverable by Consumers</span>
      </div>

      {/* FinOps Layer (Fiscal — NOAA Blue) */}
      <div className="border-2 border-dashed border-noaa-blue/40 rounded-md p-2 bg-noaa-blue/5 shadow-sm">
        <p className="text-[9px] sm:text-[10px] font-bold text-noaa-blue uppercase tracking-wider mb-1.5">FinOps Layer</p>
        <div className="flex gap-1">
          <div className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-white border border-noaa-blue/20 rounded-md p-1.5 shadow-xs">
            <span className="text-[8px] font-bold text-noaa-blue uppercase">Labels</span>
            <span className="text-[7px] text-slate-500 text-center leading-tight">
              domain / cost-center / env
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-white border border-noaa-blue/20 rounded-md p-1.5 shadow-xs">
            <span className="text-[8px] font-bold text-noaa-blue uppercase">Billing Export</span>
            <span className="text-[7px] text-slate-500 text-center leading-tight">
              Cloud Billing → BigQuery
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-white border border-noaa-blue/20 rounded-md p-1.5 shadow-xs">
            <span className="text-[8px] font-bold text-noaa-blue uppercase">Dashboards</span>
            <span className="text-[7px] text-slate-500 text-center leading-tight">
              By cost-center, domain, workload
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-2 sm:gap-3 shrink-0 mt-1 flex-wrap">
        <span className="flex items-center gap-1 text-[7px] font-medium text-slate-500 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-sm bg-skygold shrink-0" />
          <span>Domain</span>
        </span>
        <span className="flex items-center gap-1 text-[7px] font-medium text-slate-500 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-sm bg-coral shrink-0" />
          <span>Automation</span>
        </span>
        <span className="flex items-center gap-1 text-[7px] font-medium text-slate-500 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-sm bg-slate-500 shrink-0" />
          <span>Sandbox</span>
        </span>
        <span className="flex items-center gap-1 text-[7px] font-medium text-slate-500 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-sm bg-seagrass shrink-0" />
          <span>Consumer</span>
        </span>
        <span className="flex items-center gap-1 text-[7px] font-medium text-slate-500 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-sm bg-noaa-blue shrink-0" />
          <span>FinOps</span>
        </span>
      </div>
    </div>
  );
}
