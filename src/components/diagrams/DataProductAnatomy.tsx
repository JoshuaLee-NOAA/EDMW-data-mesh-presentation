"use client";

import React from "react";
import { Database, Cloud, Server } from "lucide-react";

export default function DataProductAnatomy() {
  return (
    <div className="w-full h-full flex flex-col p-2 gap-2">
      {/* Header */}
      <p className="text-center font-display text-sm md:text-base font-bold text-slate-900">
        EM Data Product — Internal Anatomy
      </p>

      {/* Outer boundary */}
      <div className="flex-1 p-2 flex flex-col gap-1.5">
        {/* Storage Layer — Product (Seagrass) */}
        <div className="rounded-md p-1.5 border-2 border-seagrass/30 bg-seagrass/5 shadow-md">
          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-seagrass mb-1">
            Storage Layer
          </p>
          <div className="grid grid-cols-3 gap-1">
            <div className="bg-white border border-slate-200 rounded p-1 text-center">
              <Database className="w-3 h-3 mx-auto mb-0.5 text-seagrass" />
              <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Trip Metadata</p>
              <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Vessel ID, timestamps</p>
            </div>
            <div className="bg-white border border-slate-200 rounded p-1 text-center">
              <Cloud className="w-3 h-3 mx-auto mb-0.5 text-seagrass" />
              <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Raw Video & Sensors</p>
              <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Camera footage, logs</p>
            </div>
            <div className="bg-white border border-slate-200 rounded p-1 text-center">
              <Database className="w-3 h-3 mx-auto mb-0.5 text-seagrass" />
              <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Reviewer Notings</p>
              <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Annotations, segments</p>
            </div>
            <div className="bg-white border border-slate-200 rounded p-1 text-center">
              <Database className="w-3 h-3 mx-auto mb-0.5 text-seagrass" />
              <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Logbook Recon.</p>
              <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Cross-ref, flags</p>
            </div>
            <div className="bg-white border border-slate-200 rounded p-1 text-center">
              <Database className="w-3 h-3 mx-auto mb-0.5 text-seagrass" />
              <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Species ID</p>
              <p className="text-[7px] text-slate-500 leading-tight mt-0.5">IDs with confidence</p>
            </div>
            <div className="bg-white border border-slate-200 rounded p-1 text-center">
              <Database className="w-3 h-3 mx-auto mb-0.5 text-seagrass" />
              <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Trip Report</p>
              <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Quality-verified output</p>
            </div>
          </div>
          {/* Flow direction indicator */}
          <div className="flex items-center justify-center gap-1 mt-1">
            <span className="text-[7px] md:text-[8px] font-bold text-slate-700">Capture</span>
            <span className="text-slate-400 text-[7px]">→</span>
            <span className="text-[7px] md:text-[8px] font-bold text-slate-700">Processing</span>
            <span className="text-slate-400 text-[7px]">→</span>
            <span className="text-[7px] md:text-[8px] font-bold text-slate-700">Publication</span>
          </div>
        </div>

        {/* Interface Layer — Interface (Skygold) */}
        <div className="rounded-md p-1.5 border-2 border-skygold/30 bg-skygold/5 shadow-md">
          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-skygold mb-1">
            Interface Layer
          </p>
          <div className="flex gap-1">
            <div className="flex-1 bg-white border border-slate-200 rounded p-1 flex items-center gap-1">
              <Server className="w-3.5 h-3.5 shrink-0 text-skygold" />
              <div>
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">REST API</p>
                <p className="text-[7px] text-slate-500">Cloud Run</p>
              </div>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded p-1 flex items-center gap-1">
              <Database className="w-3.5 h-3.5 shrink-0 text-skygold" />
              <div>
                <p className="text-[8px] md:text-[9px] font-bold text-slate-800">SQL Query</p>
                <p className="text-[7px] text-slate-500">BigQuery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Governance Layer — Governance (NOAA Blue) */}
        <div className="rounded-md p-1.5 border-2 border-noaa-blue/30 bg-noaa-blue/5 shadow-md">
          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-noaa-blue mb-1">
            Governance Layer
          </p>
          <div className="flex gap-1">
            <div className="flex-1 bg-white border border-slate-200 rounded p-1 text-center">
              <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Data Contract</p>
              <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Schema v1.2, SLOs</p>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded p-1 text-center">
              <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Quality SLOs</p>
              <p className="text-[7px] text-slate-500 leading-tight mt-0.5">Complete {">"}99%</p>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded p-1 text-center">
              <p className="text-[8px] md:text-[9px] font-bold text-slate-800">Access Control</p>
              <p className="text-[7px] text-slate-500 leading-tight mt-0.5">MSA §402(b)</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-3 mt-0.5">
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-600 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-seagrass shrink-0" />
            <span>Storage</span>
          </span>
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-600 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-skygold shrink-0" />
            <span>Interface</span>
          </span>
          <span className="flex items-center gap-1 text-[7px] font-medium text-slate-600 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-noaa-blue shrink-0" />
            <span>Governance</span>
          </span>
        </div>
      </div>
    </div>
  );
}
