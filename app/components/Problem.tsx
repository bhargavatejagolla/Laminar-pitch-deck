"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Eye, GitMerge, Clock } from "lucide-react";

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Camera Wall Data
  const cameraNodes = Array.from({ length: 24 }).map((_, i) => i);

  return (
    <section ref={containerRef} className="relative w-full bg-void text-text overflow-hidden py-32 border-t border-line/30" id="intelligence">
      
      {/* Dynamic Background Noise (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-mono text-xs text-signal/80 tracking-[0.2em] mb-8 flex items-center justify-center gap-3"
          >
            <Eye className="w-3 h-3" />
            THE PROBLEM / PASSIVE SURVEILLANCE
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-4"
          >
            Cities are watching.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-muted mb-8"
          >
            But watching isn't understanding.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-muted/80 font-sans font-light leading-relaxed max-w-3xl mx-auto"
          >
            Existing CCTV networks generate enormous amounts of visual information. Human operators and fragmented systems must still identify, interpret, verify, and coordinate responses across constantly changing environments.
          </motion.p>
        </div>

        {/* 1. Camera Wall & Attention Bottleneck */}
        <div className="mb-40 relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-4">More cameras ≠ more awareness.</h3>
            <p className="text-muted/70 font-mono text-sm tracking-wide">THE ATTENTION BOTTLENECK</p>
          </motion.div>

          {/* Abstract Camera Grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4 max-w-6xl mx-auto relative px-4">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-void/90 z-10 pointer-events-none" />
            {cameraNodes.map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="aspect-video glass-panel border border-line/50 rounded-md flex items-center justify-center overflow-hidden relative group"
              >
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-signal rounded-full shadow-[0_0_8px_rgba(0,240,255,0.8)] opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4px_4px]" />
                <div className="text-[8px] md:text-[10px] font-mono text-muted/50 group-hover:text-signal transition-colors relative z-10">CAM_{String(i).padStart(3, '0')}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottleneck Convergence */}
          <div className="flex flex-col items-center mt-[-40px] relative z-20">
            <div className="h-20 w-px bg-gradient-to-b from-line to-signal" />
            <div className="border border-signal/30 bg-panel/80 backdrop-blur px-6 py-3 rounded-sm font-mono text-xs tracking-widest text-signal">
              HUMAN ATTENTION
            </div>
          </div>
        </div>

        {/* 2. The Context Gap */}
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-4">A single camera sees an event.</h3>
            <h3 className="text-2xl md:text-3xl font-medium text-muted">Multiple cameras can reveal the situation.</h3>
          </motion.div>

          <div className="max-w-5xl mx-auto relative flex flex-col md:flex-row items-center justify-center gap-12 px-6">
            
            <div className="flex flex-col gap-6 w-full md:w-1/3">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-panel p-4 rounded-xl relative">
                <div className="absolute right-[-24px] top-1/2 w-6 h-px bg-signal hidden md:block" />
                <span className="text-muted text-xs block mb-1">CAM 014</span>
                <span className="font-mono text-sm font-bold text-text">PERSON RUNNING</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-panel p-4 rounded-xl relative">
                <div className="absolute right-[-24px] top-1/2 w-6 h-px bg-signal hidden md:block" />
                <span className="text-muted text-xs block mb-1">CAM 027</span>
                <span className="font-mono text-sm font-bold text-text">VEHICLE STOPPED</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="z-10 shining-border bg-void p-8 rounded-full shadow-[0_0_40px_rgba(0,240,255,0.2)] flex flex-col items-center justify-center relative mx-4 min-w-[160px] min-h-[160px]"
            >
              <GitMerge className="w-8 h-8 text-signal mb-3" />
              <span className="font-mono text-sm tracking-widest font-bold text-signal">CONTEXT</span>
            </motion.div>

            <div className="flex flex-col gap-6 w-full md:w-1/3">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-panel p-4 rounded-xl relative text-right md:text-left">
                <div className="absolute left-[-24px] top-1/2 w-6 h-px bg-signal hidden md:block" />
                <span className="text-muted text-xs block mb-1">CAM 031</span>
                <span className="font-mono text-sm font-bold text-text">CROWD FORMING</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="glass-panel p-4 rounded-xl relative text-right md:text-left">
                <div className="absolute left-[-24px] top-1/2 w-6 h-px bg-signal hidden md:block" />
                <span className="text-muted text-xs block mb-1">CAM 042</span>
                <span className="font-mono text-sm font-bold text-text">ROAD BLOCKED</span>
              </motion.div>
            </div>

          </div>
        </div>

        {/* 3. Emerging Risk (Timeline) */}
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-4 max-w-2xl mx-auto leading-tight">
              By the time a situation becomes obvious, valuable context may already be lost.
            </h3>
          </motion.div>

          <div className="max-w-3xl mx-auto relative py-12">
            {/* Base Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-line -translate-y-1/2" />
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-signal to-critical -translate-y-1/2 origin-left"
            />

            <div className="relative flex justify-between items-center z-10">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-void border-2 border-signal mb-4" />
                <div className="font-mono text-[10px] tracking-widest text-muted mb-1">T - 30s</div>
                <div className="font-sans text-xs text-muted/70">Small anomaly</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-void border-2 border-warning mb-4" />
                <div className="font-mono text-[10px] tracking-widest text-muted mb-1">T - 15s</div>
                <div className="font-sans text-xs text-muted/70">Growing pattern</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-critical shadow-[0_0_15px_rgba(239,68,68,0.5)] mb-4 animate-pulse" />
                <div className="font-mono text-[10px] tracking-widest text-critical font-bold mb-1">NOW</div>
                <div className="font-sans text-xs text-critical/80">Incident</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Chaos to Clarity Transition */}
        <div className="py-32 flex flex-col items-center text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
              The city doesn't need more eyes.
            </h2>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-signal drop-shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              It needs intelligence between them.
            </h2>
          </motion.div>

          {/* Convergence Node -> Leads into Phase 3 */}
          <div className="h-32 w-px bg-gradient-to-b from-transparent to-signal relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 128] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-[-1px] w-[3px] h-16 bg-signal shadow-[0_0_8px_rgba(0,240,255,0.8)]"
            />
          </div>
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 font-mono text-xl md:text-2xl font-bold tracking-[0.3em] text-text drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            LAMINAR
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
