"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeatureGridSlideData } from "@/types/presentation";
import { Layers, Menu, Smartphone, Bot, Sparkles, Code2, Database, Waves, Network, Users, Package, Server, Shield, FileText, Search, Cloud, Scale, DollarSign, Settings } from "lucide-react";
import DataProductAnatomy from "@/components/diagrams/DataProductAnatomy";
import EMDataProductDefinition from "@/components/diagrams/EMDataProductDefinition";
import DataProductCreationWorkflow from "@/components/diagrams/DataProductCreationWorkflow";
import ThreeTierGovernance from "@/components/diagrams/ThreeTierGovernance";

interface FeatureGridSlideProps {
  data: FeatureGridSlideData;
}

export const FeatureGridSlide: React.FC<FeatureGridSlideProps> = ({
  data,
}) => {
  // Icon mapper helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Menu": return <Menu className="w-5 h-5 text-noaa-blue" />;
      case "Smartphone": return <Smartphone className="w-5 h-5 text-coral" />;
      case "Bot": return <Bot className="w-5 h-5 text-seagrass" />;
      case "Code2": return <Code2 className="w-5 h-5 text-skygold" />;
      case "Database": return <Database className="w-5 h-5 text-coral" />;
      case "Waves": return <Waves className="w-5 h-5 text-seagrass" />;
      case "Network": return <Network className="w-5 h-5 text-skygold" />;
      case "Users": return <Users className="w-5 h-5 text-noaa-blue" />;
      case "Package": return <Package className="w-5 h-5 text-coral" />;
      case "Server": return <Server className="w-5 h-5 text-skygold" />;
      case "Shield": return <Shield className="w-5 h-5 text-seagrass" />;
      case "FileText": return <FileText className="w-5 h-5 text-skygold" />;
      case "Search": return <Search className="w-5 h-5 text-seagrass" />;
      case "Cloud": return <Cloud className="w-5 h-5 text-coral" />;
      case "Scale": return <Scale className="w-5 h-5 text-noaa-blue" />;
      case "DollarSign": return <DollarSign className="w-5 h-5 text-skygold" />;
      case "Settings": return <Settings className="w-5 h-5 text-seagrass" />;
      default: return <Layers className="w-5 h-5 text-noaa-blue" />;
    }
  };

  const renderPatternVisual = (pattern: "warehouse" | "lake" | "mesh") => {
    if (pattern === "warehouse") {
      return (
        <div className="w-full h-32 mb-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-end pb-4 relative overflow-hidden">
          {/* Funnel lines */}
          <div className="absolute top-0 w-full h-1/2 flex justify-around px-4">
            <div className="w-0.5 h-full bg-slate-300 transform -rotate-12 translate-x-4"></div>
            <div className="w-0.5 h-full bg-slate-300"></div>
            <div className="w-0.5 h-full bg-slate-300 transform rotate-12 -translate-x-4"></div>
          </div>
          {/* Data blocks falling */}
          <div className="absolute top-4 flex justify-center gap-6 w-full">
            <div className="w-6 h-4 bg-coral/80 rounded-sm"></div>
            <div className="w-6 h-4 bg-coral/80 rounded-sm translate-y-3"></div>
            <div className="w-6 h-4 bg-coral/80 rounded-sm"></div>
          </div>
          {/* Central Cylinder */}
          <div className="w-20 h-14 bg-white border-2 border-coral rounded-lg shadow-sm z-10 flex flex-col justify-end">
            <div className="w-full h-2 border-b-2 border-coral opacity-50 mb-1"></div>
            <div className="w-full h-2 border-b-2 border-coral opacity-50 mb-1"></div>
          </div>
        </div>
      );
    }
    
    if (pattern === "lake") {
      return (
        <div className="w-full h-32 mb-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-end pb-4 relative overflow-hidden">
          {/* Pool container */}
          <div className="w-[80%] h-20 bg-seagrass/10 border-2 border-seagrass/30 rounded-xl shadow-inner flex flex-wrap content-start p-2 gap-2 overflow-hidden">
            {/* Chaotic shapes */}
            <div className="w-5 h-5 bg-coral rounded-full opacity-80"></div>
            <div className="w-4 h-4 bg-skygold rotate-45 opacity-80"></div>
            <div className="w-6 h-3 bg-noaa-blue rounded-sm opacity-80 mt-1"></div>
            <div className="w-3 h-3 bg-slate-600 rounded-full opacity-80 ml-2"></div>
            <div className="w-5 h-5 bg-coral rotate-12 opacity-80"></div>
            <div className="w-7 h-4 bg-seagrass rounded opacity-80"></div>
            <div className="w-4 h-4 bg-skygold rounded-full opacity-80"></div>
          </div>
        </div>
      );
    }

    if (pattern === "mesh") {
      return (
        <div className="w-full h-32 mb-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center relative overflow-hidden">
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <line x1="25%" y1="30%" x2="50%" y2="50%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4" />
            <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4" />
            <line x1="25%" y1="70%" x2="50%" y2="50%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4" />
            <line x1="75%" y1="70%" x2="50%" y2="50%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4" />
            <line x1="25%" y1="30%" x2="25%" y2="70%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4" />
            <line x1="75%" y1="30%" x2="75%" y2="70%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4" />
          </svg>
          
          {/* Distributed Nodes */}
          <div className="absolute top-[30%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-skygold rounded shadow-sm z-10 flex items-center justify-center"><Database className="w-4 h-4 text-skygold"/></div>
          <div className="absolute top-[30%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-skygold rounded shadow-sm z-10 flex items-center justify-center"><Database className="w-4 h-4 text-skygold"/></div>
          <div className="absolute top-[70%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-skygold rounded shadow-sm z-10 flex items-center justify-center"><Database className="w-4 h-4 text-skygold"/></div>
          <div className="absolute top-[70%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-skygold rounded shadow-sm z-10 flex items-center justify-center"><Database className="w-4 h-4 text-skygold"/></div>
          
          {/* Central Governance Hub */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-noaa-blue border-2 border-noaa-blue-light rounded-full shadow-md z-10 flex items-center justify-center">
            <Network className="w-5 h-5 text-white" />
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col justify-center px-4 sm:px-8 py-8 max-w-7xl mx-auto">
      {/* Category Header */}
      {data.category && (
        <span className="text-xs font-semibold text-noaa-blue uppercase tracking-wider mb-2 block">
          {data.category}
        </span>
      )}

      {/* Title Area with optional floated image */}
      <div className="flex justify-between items-start mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div>
        
        {data.titleImageUrl && (
          <div className="hidden sm:block shrink-0">
            <img 
              src={data.titleImageUrl} 
              alt="Slide graphic" 
              className="h-20 md:h-24 w-auto object-contain rounded-xl shadow-sm border border-slate-200 bg-white p-1"
            />
          </div>
        )}
      </div>

      {/* Feature Grid (1-column on mobile, responsive up to 4 columns on desktop) */}
      <div 
        className={`grid grid-cols-1 gap-6 my-4 ${
          data.features.length === 4 
            ? "sm:grid-cols-2 lg:grid-cols-4" 
            : "md:grid-cols-3"
        }`}
      >
        {data.features.map((feature, idx) => {
          // Special Visual-Only Column Render
          if (feature.isVisualColumn) {
            if (feature.diagramId === "DataProductAnatomy") {
              return (
                <motion.div key={feature.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 * idx, duration: 0.5 }} className="w-full h-full relative">
                  <DataProductAnatomy />
                </motion.div>
              );
            }
            if (feature.diagramId === "EMDataProductDefinition") {
              return (
                <motion.div key={feature.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 * idx, duration: 0.5 }} className="w-full h-full relative">
                  <EMDataProductDefinition />
                </motion.div>
              );
            }
            if (feature.diagramId === "DataProductCreationWorkflow") {
              return (
                <motion.div key={feature.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 * idx, duration: 0.5 }} className="w-full h-full relative">
                  <DataProductCreationWorkflow />
                </motion.div>
              );
            }
            if (feature.diagramId === "ThreeTierGovernance") {
              return (
                <motion.div key={feature.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 * idx, duration: 0.5 }} className="w-full h-full relative">
                  <ThreeTierGovernance />
                </motion.div>
              );
            }
            if (feature.imageStack) {
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 * idx, duration: 0.5 }}
                className="flex flex-col gap-6 h-full items-center justify-center pt-2"
              >
                {feature.imageStack.map((img, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 w-full">
                    <img 
                      src={img.url} 
                      className="w-full object-contain mix-blend-multiply" 
                      alt={img.caption || `Visual diagram ${i + 1}`} 
                    />
                    {img.caption && (
                      <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 text-[10px] sm:text-xs font-medium text-slate-600 text-center w-5/6">
                        {img.caption}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            );
            }
          }

          // Standard Card Render
          return (
            <div key={feature.id} className="relative h-full">
              {/* Optional Pulsing Glow Highlight positioned behind the card */}
              {feature.isHighlighted && (
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-2 bg-seagrass/40 rounded-[2rem] blur-xl z-0"
                />
              )}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * idx, duration: 0.5 }}
                className="relative z-10 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group h-full"
              >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                    {getIcon(feature.iconName)}
                  </div>

                  {feature.badge && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-noaa-blue-light text-noaa-blue border border-noaa-blue/20">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Image Placeholder Visuals */}
                {feature.imageUrl && (
                  <div className="w-full h-32 mb-5 rounded-xl border border-slate-200/80 shadow-sm overflow-hidden bg-slate-50 flex items-center justify-center p-2">
                    <img
                      src={feature.imageUrl}
                      alt={`${feature.title} diagram`}
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                    />
                  </div>
                )}

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>

                <div className="text-[11px] sm:text-xs text-slate-600 font-normal leading-relaxed space-y-3">
                  {Array.isArray(feature.description) ? (
                    feature.description.map((paragraph, pIdx) => {
                      const isLast = pIdx === feature.description.length - 1;
                      return (
                        <p
                          key={pIdx}
                          className={
                            isLast
                              ? "mt-4 p-3 bg-slate-50 border-l-2 border-noaa-blue font-medium text-slate-700 italic rounded-r-md"
                              : ""
                          }
                        >
                          {paragraph}
                        </p>
                      );
                    })
                  ) : (
                    <p>{feature.description}</p>
                  )}
                </div>
              </div>

              {/* Era / Citation Pill at bottom of card */}
              {(feature.era || feature.citation) && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  {feature.era && (
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      Era: {feature.era}
                    </span>
                  )}
                  {feature.citation && (
                    <span className="italic text-[10px] sm:text-xs">
                      ({feature.citation})
                    </span>
                  )}
                </div>
              )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
