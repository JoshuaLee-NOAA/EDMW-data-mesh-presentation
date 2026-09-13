"use client";

import React from "react";
import { Database, Cloud, Server, Settings, Activity, Shield, FileText, Eye } from "lucide-react";

export default function EMArchitectureStacked() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto justify-center h-full">
      {/* ------------------------------------------------------------- */}
      {/* TOP DIAGRAM: Data Product Anatomy */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full flex flex-col gap-2">
        <p className="text-center font-display text-[11px] sm:text-xs font-bold text-slate-900">
          EM Data Product — Internal Anatomy
        </p>

        <div className="rounded-lg p-2.5 flex flex-col gap-2 bg-white border border-slate-100 shadow-sm">
          {/* Storage Layer — Product (Seagrass) */}
          <div className="rounded-md p-2 border-2 border-seagrass/30 bg-seagrass/5">
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-seagrass mb-1.5">
              Storage Layer
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-white border border-slate-200 rounded p-1.5 text-center shadow-xs">
                <Database className="w-3.5 h-3.5 mx-auto mb-1 text-seagrass" />
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Trip Metadata</p>
                <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Vessel ID, timestamps</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-1.5 text-center shadow-xs">
                <Cloud className="w-3.5 h-3.5 mx-auto mb-1 text-seagrass" />
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Raw Video & Sensors</p>
                <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Camera footage, gear logs</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-1.5 text-center shadow-xs">
                <Database className="w-3.5 h-3.5 mx-auto mb-1 text-seagrass" />
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Reviewer Notings</p>
                <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Annotations, segments</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-1.5 text-center shadow-xs">
                <Database className="w-3.5 h-3.5 mx-auto mb-1 text-seagrass" />
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Logbook Recon.</p>
                <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Cross-ref flags</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-1.5 text-center shadow-xs">
                <Database className="w-3.5 h-3.5 mx-auto mb-1 text-seagrass" />
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Species ID</p>
                <p className="text-[7px] text-slate-500 leading-tight mt-0.5">IDs with confidence</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-1.5 text-center shadow-xs">
                <Database className="w-3.5 h-3.5 mx-auto mb-1 text-seagrass" />
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Trip Report</p>
                <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Quality-verified output</p>
              </div>
            </div>
            {/* Flow direction indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-2">
              <span className="text-[7px] md:text-[8px] font-bold text-slate-700">Capture</span>
              <span className="text-slate-400 text-[7px]">→</span>
              <span className="text-[7px] md:text-[8px] font-bold text-slate-700">Processing</span>
              <span className="text-slate-400 text-[7px]">→</span>
              <span className="text-[7px] md:text-[8px] font-bold text-slate-700">Publication</span>
            </div>
          </div>

          {/* Interface Layer — Interface (Skygold) */}
          <div className="rounded-md p-2 border-2 border-skygold/30 bg-skygold/5">
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-skygold mb-1.5">
              Interface Layer
            </p>
            <div className="flex gap-1.5">
              <div className="flex-1 bg-white border border-slate-200 rounded p-1.5 flex items-center gap-2 shadow-xs">
                <Server className="w-4 h-4 shrink-0 text-skygold" />
                <div>
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-800">REST API</p>
                  <p className="text-[7px] text-slate-500">Cloud Run</p>
                </div>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded p-1.5 flex items-center gap-2 shadow-xs">
                <Database className="w-4 h-4 shrink-0 text-skygold" />
                <div>
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-800">SQL Query</p>
                  <p className="text-[7px] text-slate-500">BigQuery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Governance Layer — Governance (NOAA Blue) */}
          <div className="rounded-md p-2 border-2 border-noaa-blue/30 bg-noaa-blue/5">
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-noaa-blue mb-1.5">
              Governance Layer
            </p>
            <div className="flex gap-1.5">
              <div className="flex-1 bg-white border border-slate-200 rounded p-1.5 text-center shadow-xs">
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Data Contract</p>
                <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Schema v1.2, SLOs</p>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded p-1.5 text-center shadow-xs">
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Quality SLOs</p>
                <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Complete {">"}99%</p>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded p-1.5 text-center shadow-xs">
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Access Control</p>
                <p className="text-[7px] text-slate-500 leading-tight mt-0.5">MSA §402(b)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BOTTOM DIAGRAM: Definition Grid */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full flex flex-col gap-2">
        <p className="text-center font-display text-[11px] sm:text-xs font-bold text-slate-900">
          EM Data Product Definition
        </p>

        <div className="rounded-lg p-2.5 bg-white border border-slate-100 shadow-sm">
          <div className="grid grid-cols-2 gap-2 h-full">
            {/* 1. Data Contract */}
            <div className="border border-slate-200 border-l-[3px] border-l-noaa-blue rounded p-2 flex flex-col gap-1 shadow-xs bg-slate-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-noaa-blue">
                  <span className="text-[8px] font-bold text-white">1</span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Data Contract</p>
              </div>
              <p className="text-[8px] text-slate-500 leading-tight flex-1">Schema v1.2, version policy, access rules.</p>
              <div className="flex items-center gap-1 mt-auto">
                <Settings className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[8px] text-slate-700 font-semibold">Data Catalog</span>
              </div>
            </div>

            {/* 2. Structured Storage */}
            <div className="border border-slate-200 border-l-[3px] border-l-seagrass rounded p-2 flex flex-col gap-1 shadow-xs bg-slate-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-seagrass">
                  <span className="text-[8px] font-bold text-white">2</span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Structured Storage</p>
              </div>
              <p className="text-[8px] text-slate-500 leading-tight flex-1">em_trip_reports, partitioned by date.</p>
              <div className="flex items-center gap-1 mt-auto">
                <Database className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[8px] text-slate-700 font-semibold">BigQuery</span>
              </div>
            </div>

            {/* 3. Raw Storage */}
            <div className="border border-slate-200 border-l-[3px] border-l-seagrass rounded p-2 flex flex-col gap-1 shadow-xs bg-slate-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-seagrass">
                  <span className="text-[8px] font-bold text-white">3</span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Raw Storage</p>
              </div>
              <p className="text-[8px] text-slate-500 leading-tight flex-1">Video footage, 90-day lifecycle → Archive.</p>
              <div className="flex items-center gap-1 mt-auto">
                <Cloud className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[8px] text-slate-700 font-semibold">Cloud Storage</span>
              </div>
            </div>

            {/* 4. Interfaces */}
            <div className="border border-slate-200 border-l-[3px] border-l-skygold rounded p-2 flex flex-col gap-1 shadow-xs bg-slate-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-skygold">
                  <span className="text-[8px] font-bold text-white">4</span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Interfaces</p>
              </div>
              <p className="text-[8px] text-slate-500 leading-tight flex-1">REST API & SQL Query Interface.</p>
              <div className="flex items-center gap-1 mt-auto">
                <Server className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[8px] text-slate-700 font-semibold">Cloud Run + BQ</span>
              </div>
            </div>

            {/* 5. Quality SLOs */}
            <div className="border border-slate-200 border-l-[3px] border-l-noaa-blue rounded p-2 flex flex-col gap-1 shadow-xs bg-slate-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-noaa-blue">
                  <span className="text-[8px] font-bold text-white">5</span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Quality SLOs</p>
              </div>
              <p className="text-[8px] text-slate-500 leading-tight flex-1">Completeness {">"}99%, Accuracy {">"}95%.</p>
              <div className="flex items-center gap-1 mt-auto">
                <Activity className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[8px] text-slate-700 font-semibold">Dataplex</span>
              </div>
            </div>

            {/* 6. Access Controls */}
            <div className="border border-slate-200 border-l-[3px] border-l-noaa-blue rounded p-2 flex flex-col gap-1 shadow-xs bg-slate-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-noaa-blue">
                  <span className="text-[8px] font-bold text-white">6</span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Access Controls</p>
              </div>
              <p className="text-[8px] text-slate-500 leading-tight flex-1">Row-level security via NOAA Azure AD.</p>
              <div className="flex items-center gap-1 mt-auto">
                <Shield className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[8px] text-slate-700 font-semibold">Cloud IAM</span>
              </div>
            </div>

            {/* 7. Lifecycle */}
            <div className="border border-slate-200 border-l-[3px] border-l-noaa-blue rounded p-2 flex flex-col gap-1 shadow-xs bg-slate-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-noaa-blue">
                  <span className="text-[8px] font-bold text-white">7</span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Lifecycle Mgmt</p>
              </div>
              <p className="text-[8px] text-slate-500 leading-tight flex-1">12-month retention → 5-year NARA.</p>
              <div className="flex items-center gap-1 mt-auto">
                <FileText className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[8px] text-slate-700 font-semibold">Cloud Logging</span>
              </div>
            </div>

            {/* 8. Observability */}
            <div className="border border-slate-200 border-l-[3px] border-l-skygold rounded p-2 flex flex-col gap-1 shadow-xs bg-slate-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-skygold">
                  <span className="text-[8px] font-bold text-white">8</span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Observability</p>
              </div>
              <p className="text-[8px] text-slate-500 leading-tight flex-1">Freshness tracking, latency, error rates.</p>
              <div className="flex items-center gap-1 mt-auto">
                <Eye className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[8px] text-slate-700 font-semibold">Cloud Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
