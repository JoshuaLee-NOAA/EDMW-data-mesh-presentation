"use client";

import React from "react";
import { Database, Cloud, Server, Settings, Activity, Shield, FileText, Eye } from "lucide-react";

const definitionCards = [
  {
    num: 1,
    title: "Data Contract",
    desc: "Stable interface between producer and consumer. Schema v1.2, SLOs, version policy, access rules.",
    icon: <Settings className="w-3 h-3 shrink-0" />,
    tech: "Data Catalog",
    color: "noaa-blue",
  },
  {
    num: 2,
    title: "Structured Storage",
    desc: "em_trip_reports (partitioned by date), em_species_ids (clustered by region), reconciliation records.",
    icon: <Database className="w-3 h-3 shrink-0" />,
    tech: "BigQuery",
    color: "seagrass",
  },
  {
    num: 3,
    title: "Raw Storage",
    desc: "Raw video footage, sensor logs, reviewer notings. 90-day lifecycle → Archive. NARA 5-year retention.",
    icon: <Cloud className="w-3 h-3 shrink-0" />,
    tech: "Cloud Storage",
    color: "seagrass",
  },
  {
    num: 4,
    title: "Interfaces",
    desc: "REST API (Read) for programmatic access. SQL Query Interface for analytical consumers. Ingestion API.",
    icon: <Server className="w-3 h-3 shrink-0" />,
    tech: "Cloud Run + BigQuery",
    color: "skygold",
  },
  {
    num: 5,
    title: "Quality SLOs",
    desc: "Completeness >99%, species accuracy >95% family / >90% species. Automated validation rules.",
    icon: <Activity className="w-3 h-3 shrink-0" />,
    tech: "Dataplex",
    color: "noaa-blue",
  },
  {
    num: 6,
    title: "Access Controls",
    desc: "Row-level security enforcing MSA §402(b) confidentiality. Federated to NOAA Azure AD.",
    icon: <Shield className="w-3 h-3 shrink-0" />,
    tech: "Cloud IAM",
    color: "noaa-blue",
  },
  {
    num: 7,
    title: "Lifecycle Management",
    desc: "3 stages: fishing year →12-month retention →5-year NARA. Auto-archive. Immutable audit trail.",
    icon: <FileText className="w-3 h-3 shrink-0" />,
    tech: "Cloud Logging",
    color: "noaa-blue",
  },
  {
    num: 8,
    title: "Observability",
    desc: "SLO dashboards for consumers. Freshness tracking, query latency percentiles, error rate monitoring.",
    icon: <Eye className="w-3 h-3 shrink-0" />,
    tech: "Cloud Monitoring",
    color: "skygold",
  },
];

export default function EMDataProductDefinition() {
  return (
    <div className="w-full h-full flex flex-col p-2 gap-2">
      {/* Header */}
      <p className="text-center font-display text-sm md:text-base font-bold text-slate-900">
        EM Data Product Definition
      </p>

      {/* Outer boundary */}
      <div className="flex-1 rounded-lg p-2.5">
        {/* 4×2 grid */}
        <div className="grid grid-cols-2 gap-2 h-full">
          {definitionCards.map((card) => (
            <div
              key={card.num}
              className={`border border-slate-200 border-l-[3px] rounded p-2 flex flex-col gap-1 shadow-xs bg-slate-50/50 ${
                card.color === "noaa-blue" ? "border-l-noaa-blue" :
                card.color === "seagrass" ? "border-l-seagrass" :
                card.color === "skygold" ? "border-l-skygold" : "border-l-coral"
              }`}
            >
              {/* Card header: number + title */}
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                    card.color === "noaa-blue" ? "bg-noaa-blue" :
                    card.color === "seagrass" ? "bg-seagrass" :
                    card.color === "skygold" ? "bg-skygold" : "bg-coral"
                  }`}
                >
                  <span className="text-[8px] font-bold text-white">{card.num}</span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">
                  {card.title}
                </p>
              </div>

              {/* Description */}
              <p className="text-[8px] text-slate-500 leading-tight flex-1">
                {card.desc}
              </p>

              {/* Tech badge */}
              <div className="flex items-center gap-1 mt-auto text-slate-400">
                {card.icon}
                <span className="text-[8px] text-slate-700 font-semibold">
                  {card.tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-3">
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
  );
}
