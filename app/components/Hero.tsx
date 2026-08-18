"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Activity } from "lucide-react";
import { useEffect, useState } from "react";
import WebThreads from "./WebThreads";

const pipelineStages = [
  "OBSERVE",
  "UNDERSTAND",
  "CORRELATE",
  "PREDICT",
  "ORCHESTRATE",
  "RESPOND",
];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-8 overflow-hidden">
      {/* Background WebThreads */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <WebThreads 
          color1="#00F0FF"
          color2="#3b82f6"
          color3="#20262E"
          speed={0.15}
          threadCount={8}
          frequency={3}
          spread={0.2}
          taper={1.2}
          position={0.5}
          fanMode="center"
          glow={0.03}
          falloff={0.6}
          thickness={1.1}
          brightness={0.8}
          opacity={1}
          mirror={true}
          shimmer={true}
          grain={true}
          grainIntensity={0.03}
          mouseInteraction={true}
          mouseStrength={0.2}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--color-void)_100%)] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col flex-grow justify-center">
        {/* Top Annotation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs text-signal tracking-[0.2em] mb-8 flex items-center gap-3"
        >
          <Activity className="w-3 h-3" />
          LAMINAR / URBAN INTELLIGENCE SYSTEM
        </motion.div>

        {/* Main Headlines */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-muted mb-2"
          >
            THE CITY ALREADY HAS THE CAMERAS.
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text mb-8 drop-shadow-[0_0_15px_rgba(0,240,255,0.1)]"
          >
            LAMINAR GIVES THEM INTELLIGENCE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="text-lg md:text-xl text-muted font-sans font-light max-w-2xl leading-relaxed mb-12"
          >
            An AI-powered intelligence layer that transforms existing CCTV infrastructure into real-time, contextual, and predictive urban intelligence.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.5 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#intelligence"
            className="group flex items-center justify-center space-x-2 px-8 py-3.5 bg-text text-void font-mono text-sm font-semibold tracking-widest hover:bg-signal transition-colors"
          >
            <span>EXPLORE LAMINAR</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#prototype"
            className="group flex items-center justify-center space-x-2 px-8 py-3.5 border border-line text-text font-mono text-sm tracking-widest hover:border-signal/50 hover:bg-panel transition-colors"
          >
            <span>VIEW PROTOTYPE</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Easter Eggs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5 }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 font-mono text-[10px] tracking-widest text-muted/50 text-right"
        >
          <div>
            <p className="text-signal/70 mb-1">MULTI-CAMERA INTELLIGENCE</p>
            <p>SPATIAL / TEMPORAL / CONTEXTUAL</p>
          </div>
          <div>
            <p className="text-signal/70 mb-1">EXISTING INFRASTRUCTURE</p>
            <p>+ AI INTELLIGENCE</p>
          </div>
        </motion.div>
      </div>

      {/* Signature Pipeline (Bottom) */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-16 lg:mt-0">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 font-mono text-xs md:text-sm tracking-widest text-muted/40">
          {pipelineStages.map((stage, index) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0.3, color: "var(--color-muted)" }}
              animate={{ opacity: 1, color: "var(--color-text)" }}
              transition={{
                duration: 0.5,
                delay: 4 + index * 0.4, // Pipeline illuminates sequentially
              }}
              className="flex items-center"
            >
              <span className={index === pipelineStages.length - 1 ? "text-signal font-semibold drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" : ""}>
                {stage}
              </span>
              {index < pipelineStages.length - 1 && (
                <span className="mx-2 md:mx-4 text-line">→</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Status / Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 6 }}
          className="flex justify-between items-end mt-8 border-t border-line/50 pt-6"
        >
          <div className="font-mono text-[10px] tracking-widest flex items-center gap-2 text-muted">
            <div className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            LAMINAR / FUNCTIONAL PROTOTYPE
          </div>
          <div className="font-mono text-[10px] tracking-widest text-muted/50 flex flex-col items-center gap-2">
            SCROLL TO UNDERSTAND
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
