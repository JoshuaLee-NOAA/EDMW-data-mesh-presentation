"use client";

import React from "react";
import { Settings, Shield, Activity, Database, Server, Cloud, HardDrive, Share2, Layers, Eye } from "lucide-react";

export default function ThreeTierGovernance() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-2 py-3 rounded-2xl">
      <p className="text-center font-display text-sm md:text-base font-bold text-slate-900">
        Three-Tier Federated Governance
      </p>

      <div className="w-full max-w-[420px] flex flex-col gap-1">
        {/* Global Policies — Governance (NOAA Blue) */}
        <div className="border-2 border-noaa-blue/40 rounded-lg p-3 bg-noaa-blue/5 flex flex-col justify-center shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] md:text-[11px] font-bold text-noaa-blue uppercase tracking-wider">
              Global Policies
            </p>
            <div className="flex gap-1">
              <Settings className="w-4 h-4 text-noaa-blue" />
              <Shield className="w-4 h-4 text-noaa-blue" />
              <Activity className="w-4 h-4 text-noaa-blue" />
              <Cloud className="w-4 h-4 text-noaa-blue" />
            </div>
          </div>
          <div className="flex gap-1">
            <span className="flex-1 text-[8px] md:text-[9px] text-slate-800 font-medium bg-white border border-noaa-blue/30 rounded px-2 py-1.5 text-center shadow-xs">
              Encryption: KMS
            </span>
            <span className="flex-1 text-[8px] md:text-[9px] text-slate-800 font-medium bg-white border border-noaa-blue/30 rounded px-2 py-1.5 text-center shadow-xs">
              IAM: least privilege
            </span>
            <span className="flex-1 text-[8px] md:text-[9px] text-slate-800 font-medium bg-white border border-noaa-blue/30 rounded px-2 py-1.5 text-center shadow-xs">
              Org Policy constraints
            </span>
          </div>
        </div>

        {/* Enforcement arrow: Global → Domain */}
        <div className="flex flex-col items-center -my-1 z-10">
          <svg width="16" height="12" viewBox="0 0 16 12">
            <line x1="8" y1="0" x2="8" y2="10" stroke="#94A3B8" strokeWidth="1.5" />
            <polygon points="4,8 8,12 12,8" fill="#94A3B8" />
          </svg>
          <span className="text-[7px] md:text-[8px] text-slate-500 font-medium bg-white px-1.5 rounded border border-slate-200 shadow-sm relative -top-1">
            Org Policy · Terraform validate
          </span>
        </div>

        {/* Domain Policies — Domain (Skygold) */}
        <div className="border-2 border-skygold/40 rounded-lg p-3 bg-skygold/5 flex flex-col justify-center shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] md:text-[11px] font-bold text-skygold uppercase tracking-wider">
              Domain Policies
            </p>
            <div className="flex gap-1">
              <Server className="w-4 h-4 text-skygold" />
              <Share2 className="w-4 h-4 text-skygold" />
              <Layers className="w-4 h-4 text-skygold" />
              <Eye className="w-4 h-4 text-skygold" />
            </div>
          </div>
          <div className="flex gap-1">
            <span className="flex-1 text-[8px] md:text-[9px] text-slate-800 font-medium bg-white border border-skygold/30 rounded px-2 py-1.5 text-center shadow-xs">
              EM §402(b) restricted
            </span>
            <span className="flex-1 text-[8px] md:text-[9px] text-slate-800 font-medium bg-white border border-skygold/30 rounded px-2 py-1.5 text-center shadow-xs">
              Data freshness: 48hr SLO
            </span>
            <span className="flex-1 text-[8px] md:text-[9px] text-slate-800 font-medium bg-white border border-skygold/30 rounded px-2 py-1.5 text-center shadow-xs">
              VPC subnet per domain
            </span>
          </div>
        </div>

        {/* Enforcement arrow: Domain → Product */}
        <div className="flex flex-col items-center -my-1 z-10">
          <svg width="16" height="12" viewBox="0 0 16 12">
            <line x1="8" y1="0" x2="8" y2="10" stroke="#94A3B8" strokeWidth="1.5" />
            <polygon points="4,8 8,12 12,8" fill="#94A3B8" />
          </svg>
          <span className="text-[7px] md:text-[8px] text-slate-500 font-medium bg-white px-1.5 rounded border border-slate-200 shadow-sm relative -top-1">
            IAM conditions · policy-as-code
          </span>
        </div>

        {/* Product Policies — Product (Seagrass) */}
        <div className="border-2 border-seagrass/40 rounded-lg p-3 bg-seagrass/5 flex flex-col justify-center shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] md:text-[11px] font-bold text-seagrass uppercase tracking-wider">
              Product Policies
            </p>
            <div className="flex gap-1">
              <Activity className="w-4 h-4 text-seagrass" />
              <Database className="w-4 h-4 text-seagrass" />
              <Server className="w-4 h-4 text-seagrass" />
              <HardDrive className="w-4 h-4 text-seagrass" />
            </div>
          </div>
          <div className="flex gap-1">
            <span className="flex-1 text-[8px] md:text-[9px] text-slate-800 font-medium bg-white border border-seagrass/30 rounded px-2 py-1.5 text-center shadow-xs">
              Schema versioning
            </span>
            <span className="flex-1 text-[8px] md:text-[9px] text-slate-800 font-medium bg-white border border-seagrass/30 rounded px-2 py-1.5 text-center shadow-xs">
              Row-level access
            </span>
            <span className="flex-1 text-[8px] md:text-[9px] text-slate-800 font-medium bg-white border border-seagrass/30 rounded px-2 py-1.5 text-center shadow-xs">
              Retention policy
            </span>
          </div>
        </div>

        <div className="h-2"></div>

        {/* NIST Inheritance callout */}
        <div className="border border-coral/30 rounded-md p-2 bg-coral/5 text-center shadow-sm">
          <p className="text-[9px] md:text-[10px] font-bold text-coral">
            NIST SP 800-53 — 60–70% of controls inherited from platform ATO
          </p>
          <p className="text-[7px] md:text-[8px] text-slate-500 mt-0.5">
            Remaining 30–40% assessed at domain/product level
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-3 mt-1">
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-noaa-blue shrink-0" />
            <span>Global</span>
          </span>
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-skygold shrink-0" />
            <span>Domain</span>
          </span>
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-seagrass shrink-0" />
            <span>Product</span>
          </span>
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-500 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-coral shrink-0" />
            <span>Platform</span>
          </span>
        </div>
      </div>
    </div>
  );
}
