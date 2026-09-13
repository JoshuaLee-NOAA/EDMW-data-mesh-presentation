"use client";

import React from "react";
import { motion } from "framer-motion";
import { SplitSlideData } from "@/types/presentation";
import { CheckCircle2, ShieldCheck, Activity } from "lucide-react";
import MandateVenn from "@/components/diagrams/MandateVenn";
import FourPrinciplesIntegration from "@/components/diagrams/FourPrinciplesIntegration";
import DomainDecompositionDiagram from "@/components/diagrams/DomainDecompositionDiagram";
import EMArchitectureStacked from "@/components/diagrams/EMArchitectureStacked";
import ResourceHierarchy from "@/components/diagrams/ResourceHierarchy";

interface SplitSlideProps {
  data: SplitSlideData;
}

export const SplitSlide: React.FC<SplitSlideProps> = ({ data }) => {
  return (
    <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col justify-center px-4 sm:px-8 py-8 max-w-7xl mx-auto">
      {/* Category Header */}
      {data.category && (
        <span className="text-xs font-semibold text-noaa-blue uppercase tracking-wider mb-2 block">
          {data.category}
        </span>
      )}

      {/* Main Slide Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
        {data.title}
      </h2>

      {/* Subtitle */}
      {data.subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mb-8 font-normal leading-relaxed">
          {data.subtitle}
        </p>
      )}

      {/* 2-Column Responsive Layout (Auto-stacks on mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-stretch">
        {/* Left Column: Bullet Points & Content */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs"
        >
          <div className="flex items-center gap-2 mb-6 text-seagrass font-medium text-sm">
            <Activity className="w-4 h-4" />
            <span>Regional Autonomy is a Feature, not a Bug!</span>
          </div>

          {/* Left Column Description Paragraphs */}
          {data.description && (
            <div className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed space-y-4 mb-8">
              {Array.isArray(data.description) ? (
                data.description.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))
              ) : (
                <p>{data.description}</p>
              )}
            </div>
          )}

          {/* Left Column Bullets */}
          {data.bullets && data.bullets.length > 0 && (
          <ul className="space-y-4 mb-8">
            {data.bullets?.map((bullet, idx) => {
              const isEmphasized = data.emphasizeBulletIndices?.includes(idx);
              return (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx + 0.2, duration: 0.4 }}
                  className={`flex items-start gap-3 text-sm sm:text-base leading-normal transition-all ${
                    isEmphasized
                      ? "border-l-4 border-coral bg-coral/5 p-3 sm:p-4 rounded-r-lg text-slate-900 shadow-[inset_1px_0_0_0_rgba(255,107,74,0.1)]"
                      : "text-slate-700 font-normal"
                  }`}
                >
                  <CheckCircle2
                    className={`w-5 h-5 shrink-0 mt-0.5 ${
                      isEmphasized ? "text-coral" : "text-seagrass"
                    }`}
                  />
                  <span className={isEmphasized ? "font-medium" : ""}>
                    {bullet}
                  </span>
                </motion.li>
              );
            })}
          </ul>
          )}

          {/* Left Column Optional Stats UI - Sleek Centered Pills */}
          {data.stats && data.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex gap-3 sm:gap-4 flex-wrap justify-center mt-auto pt-6 border-t border-slate-100"
            >
              {data.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2 w-[130px] h-8 bg-gradient-to-tr from-slate-50 to-slate-100 border border-slate-200/80 rounded-full"
                >
                  <span className="text-sm font-semibold text-noaa-blue">
                    {stat.value}
                  </span>
                  <span className="text-[9px] font-medium text-slate-500 uppercase tracking-widest leading-none mt-[1px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Right Column: Visual Card or Diagram */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center items-center h-full min-h-[300px]"
        >
          {data.mediaType === "diagram" && data.mediaDiagramId === "MandateVenn" ? (
            <div className="w-full h-full min-h-[300px] flex items-center justify-center relative">
              <MandateVenn />
              {data.mediaCaption && (
                <p className="absolute -bottom-6 text-xs text-slate-500 italic text-center w-full">
                  {data.mediaCaption}
                </p>
              )}
            </div>
          ) : data.mediaType === "diagram" && data.mediaDiagramId === "FourPrinciplesIntegration" ? (
            <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
              <FourPrinciplesIntegration />
              {data.mediaCaption && (
                <p className="absolute -bottom-6 text-xs text-slate-500 italic text-center w-full">
                  {data.mediaCaption}
                </p>
              )}
            </div>
          ) : data.mediaType === "diagram" && data.mediaDiagramId === "DomainDecompositionDiagram" ? (
            <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center relative">
              <DomainDecompositionDiagram />
              {data.mediaCaption && (
                <p className="mt-8 text-xs text-slate-500 italic text-center w-full max-w-sm">
                  {data.mediaCaption}
                </p>
              )}
            </div>
          ) : data.mediaType === "diagram" && data.mediaDiagramId === "EMArchitectureStacked" ? (
            <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center relative py-4">
              <EMArchitectureStacked />
            </div>
          ) : data.mediaType === "diagram" && data.mediaDiagramId === "ResourceHierarchy" ? (
            <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center relative py-4">
              <ResourceHierarchy />
            </div>
          ) : data.mediaType === "image" && data.mediaUrl ? (
            <div className="w-full h-full flex flex-col justify-center items-center bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden">
              <img
                src={data.mediaUrl}
                alt={data.mediaCaption || "Slide visual"}
                className="w-full h-full object-contain max-h-[400px] lg:max-h-full rounded-xl"
              />
              {data.mediaCaption && (
                <p className="text-xs text-slate-500 italic mt-4 text-center">
                  {data.mediaCaption}
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col justify-between bg-gradient-to-br from-noaa-blue via-noaa-dark to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg relative overflow-hidden w-full h-full">
              {/* Accent Coral Overlay Circle */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-coral/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-mono font-medium text-seagrass-light">
                    SYSTEM SPECIFICATIONS
                  </span>
                  <ShieldCheck className="w-5 h-5 text-coral" />
                </div>

                {data.mediaCardTitle && (
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-white">
                    {data.mediaCardTitle}
                  </h3>
                )}

                {/* Media Card Key-Value Items */}
                {data.mediaCardItems && (
                  <div className="space-y-3.5 mb-6">
                    {data.mediaCardItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm"
                      >
                        <span className="text-slate-300 font-normal">
                          {item.label}
                        </span>
                        <span className="font-semibold text-white font-mono">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {data.mediaCaption && (
                <p className="text-xs text-slate-300 italic border-t border-white/10 pt-4 mt-4">
                  {data.mediaCaption}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
