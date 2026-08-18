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
    <section ref={containerRef} className="relative w-full bg-void text-text overflow-hidden py-16 border-t border-line/30" id="intelligence">
      
      {/* Dynamic Background Noise (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true,  }}
            className="font-mono text-xs text-signal/80 tracking-[0.2em] mb-8 flex items-center justify-center gap-3"
          >
            <Eye className="w-3 h-3" />
            THE PROBLEM / PASSIVE SURVEILLANCE
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true,  }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-4"
          >
            Cities are watching.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true,  }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-muted mb-8"
          >
            But watching isn't understanding.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true,  }}
            className="text-lg text-muted/80 font-sans font-light leading-relaxed max-w-3xl mx-auto"
          >
            Existing CCTV networks generate enormous amounts of visual information. Human operators and fragmented systems must still identify, interpret, verify, and coordinate responses across constantly changing environments.
          </motion.p>
        </div>

        {/* 1. Camera Wall & Attention Bottleneck */}
        <div className="mb-20 relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true,  }}
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
                viewport={{ once: true,  }}
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
            <div className="h-24 w-px bg-gradient-to-b from-line to-signal relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 96] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-[-1px] w-[3px] h-8 bg-signal shadow-[0_0_8px_rgba(0,240,255,0.8)]"
              />
            </div>
            <div className="border border-signal/50 bg-void backdrop-blur-xl px-8 py-4 rounded-sm font-mono text-sm tracking-widest text-signal shadow-[0_0_20px_rgba(0,240,255,0.1)]">
              THE HUMAN BOTTLENECK
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true,  }}
              className="mt-6 text-muted/80 text-sm max-w-md mx-auto text-center"
            >
              An operator can actively monitor only 4 out of 100 cameras. 96% of the city's visual data is effectively discarded until a forensic search is needed.
            </motion.p>
          </div>
        </div>

        {/* 2. The Context Gap */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true,  }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-medium mb-4">A single camera sees an isolated event.</h3>
            <h3 className="text-3xl md:text-4xl font-medium text-muted mb-6">Connected intelligence reveals the situation.</h3>
            <p className="text-muted/80 max-w-2xl mx-auto font-light text-lg">
              By fusing spatial data across the camera network, LAMINAR understands trajectories, intent, and complex interactions that no single lens can capture.
            </p>
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
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true,  }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-4 max-w-2xl mx-auto leading-tight">
              By the time a situation becomes obvious, valuable context may already be lost.
            </h3>
          </motion.div>

          <div className="max-w-4xl mx-auto relative py-12 px-4 md:px-8">
            {/* Base Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/20 via-amber-500/20 to-red-500/50" />
            
            <div className="relative flex justify-between items-center z-10">
              {/* T-30s */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-[3px] border-cyan-500 bg-void shadow-[0_0_15px_rgba(6,182,212,0.3)]" />
                <div className="text-center">
                  <div className="font-mono text-xs md:text-sm text-muted mb-1 font-bold">T - 30s</div>
                  <div className="text-xs md:text-sm text-muted/60 font-sans">Small anomaly</div>
                </div>
              </motion.div>

              {/* T-15s */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-[3px] border-amber-500 bg-void shadow-[0_0_15px_rgba(245,158,11,0.3)]" />
                <div className="text-center">
                  <div className="font-mono text-xs md:text-sm text-muted mb-1 font-bold">T - 15s</div>
                  <div className="text-xs md:text-sm text-muted/60 font-sans">Growing pattern</div>
                </div>
              </motion.div>

              {/* Incident */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.6)] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                </div>
                <div className="text-center">
                  <div className="font-mono text-sm md:text-base text-red-500 font-bold mb-1 tracking-widest">NOW</div>
                  <div className="text-sm md:text-base text-red-500/80 font-sans font-medium">Incident</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 4. Chaos to Clarity Transition */}
        <div className="py-16 flex flex-col items-center text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true,  }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
              The city doesn't need more eyes.
            </h2>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-signal drop-shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              It needs intelligence between them.
            </h2>
          </motion.div>

          {/* Convergence Node -> Leads into Phase 3 */}
          <div className="h-32 w-px bg-gradient-to-b from-transparent to-signal relative overflow-hidden mb-8">
            <motion.div 
              animate={{ y: [0, 128] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-[-1px] w-[3px] h-16 bg-signal shadow-[0_0_8px_rgba(0,240,255,0.8)]"
            />
          </div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true,  }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="absolute inset-0 bg-signal/20 blur-[50px] -m-12 rounded-full pointer-events-none" />
            <div className="font-mono text-xs tracking-[0.3em] text-signal/80 mb-2">THE SOLUTION</div>
            <div className="font-mono text-2xl md:text-4xl font-bold tracking-[0.2em] text-text drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              LAMINAR
            </div>
            <div className="mt-4 text-muted/60 text-sm tracking-wide font-light max-w-md mx-auto text-center">
              The connective tissue of urban intelligence.
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
