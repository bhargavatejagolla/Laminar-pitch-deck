"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Play, ArrowRight, Activity, Terminal, BrainCircuit, Cpu } from "lucide-react";
import SplitFlapText from "./SplitFlapText";

export function Phase7_Conclusion() {
  return (
    <section className="relative w-full bg-void text-text overflow-hidden py-32 border-t border-line/50" id="readiness">
      
      {/* 1. Technical Assets & Innovation */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">LAMINAR / TECHNICAL ASSETS</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
            The foundation is built.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-panel border border-line p-8 rounded-sm group hover:border-signal/50 transition-colors"
          >
            <BrainCircuit className="w-8 h-8 text-signal mb-6 group-hover:animate-pulse" />
            <h4 className="font-mono text-sm tracking-widest font-bold mb-4">PROPRIETARY AI MODELS</h4>
            <p className="text-muted text-xs leading-relaxed font-sans">
              Custom-trained computer vision and behavioral analysis pipelines optimized for urban surveillance edge-cases.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-panel border border-line p-8 rounded-sm group hover:border-signal/50 transition-colors"
          >
            <Activity className="w-8 h-8 text-signal mb-6 group-hover:animate-pulse" />
            <h4 className="font-mono text-sm tracking-widest font-bold mb-4">NOVEL ALGORITHMS</h4>
            <p className="text-muted text-xs leading-relaxed font-sans">
              Advanced multi-camera fusion and 4D spatial reconstruction allowing contextual intelligence across separate feeds.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-panel border border-line p-8 rounded-sm group hover:border-signal/50 transition-colors"
          >
            <Terminal className="w-8 h-8 text-signal mb-6 group-hover:animate-pulse" />
            <h4 className="font-mono text-sm tracking-widest font-bold mb-4">PROPRIETARY DATASETS</h4>
            <p className="text-muted text-xs leading-relaxed font-sans">
              Curated synthetic and real-world urban datasets ensuring high accuracy in diverse environmental conditions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. TRL Level */}
      <div className="bg-panel/20 border-y border-line/30 py-32 mb-40">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-medium tracking-tight mb-16 text-muted"
          >
            Current Technology Readiness Level
          </motion.h3>

          <div className="relative max-w-4xl mx-auto flex items-center justify-between font-mono text-[10px] md:text-xs">
            {/* Background Line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-line" />
            
            {/* Progress Line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "66.66%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-signal shadow-[0_0_10px_rgba(0,240,255,0.8)]"
            />

            <div className="relative z-10 flex flex-col items-center gap-4 text-muted/50">
              <div className="w-3 h-3 rounded-full bg-panel border-2 border-line" />
              <span className="hidden md:block">TRL 1-3</span>
              <span className="md:hidden">1-3</span>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4 text-muted/50">
              <div className="w-3 h-3 rounded-full bg-panel border-2 border-line" />
              <span className="hidden md:block">TRL 4-5</span>
              <span className="md:hidden">4-5</span>
            </div>
            
            {/* Active TRL 6 */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="relative z-20 flex flex-col items-center gap-4 text-signal font-bold tracking-widest"
            >
              <div className="w-6 h-6 rounded-full bg-void border-2 border-signal shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center justify-center">
                <div className="w-2 h-2 bg-signal rounded-full animate-ping" />
              </div>
              <div className="absolute top-10 flex flex-col items-center w-48 text-center">
                <span className="text-sm">TRL 6</span>
                <span className="text-text mt-1 text-xs">Prototype Demonstration</span>
              </div>
            </motion.div>

            <div className="relative z-10 flex flex-col items-center gap-4 text-muted/30">
              <div className="w-3 h-3 rounded-full bg-panel border-2 border-line/30" />
              <span className="hidden md:block">TRL 7-8</span>
              <span className="md:hidden">7-8</span>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4 text-muted/30">
              <div className="w-3 h-3 rounded-full bg-panel border-2 border-line/30" />
              <span className="hidden md:block">TRL 9</span>
              <span className="md:hidden">9</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The Ask / Prototype CTA */}
      <div className="py-40 flex flex-col items-center text-center container mx-auto px-6 relative">
        {/* Glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-signal/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Cpu className="w-16 h-16 text-signal mx-auto mb-12 opacity-80" />
          
          <SplitFlapText
            words={["LAUNCH READY", "SYNC ONLINE", "SIGNAL LIVE"]}
            flipDuration={0.12}
            stagger={0.06}
            cycleDelay={2400}
            charset="alphanumeric"
            flipsPerChar={8}
            tileColor="#111827"
            textColor="#00F0FF"
            tileRadius={8}
            gap={6}
            fontSize={52}
            loop
            padTo={12}
            className="mb-12"
          />
          
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            The infrastructure is already built.
          </h2>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-16 text-signal drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            It's time to turn it on.
          </h2>

          <p className="text-xl text-muted font-light mb-16 max-w-2xl mx-auto">
            Experience the LAMINAR functional prototype and see how we are transforming raw video into urban intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://eurekapitch2026.c40.airoapp.ai/pitch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 bg-signal text-void px-8 py-4 font-mono text-sm font-bold tracking-widest hover:bg-white transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
              VIEW PROTOTYPE
              <div className="absolute inset-0 border border-signal scale-[1.05] opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </a>

            <a 
              href="mailto:eureka26@ecell.in" 
              className="flex items-center gap-3 text-text border border-line px-8 py-4 font-mono text-sm tracking-widest hover:border-signal/50 hover:text-signal transition-colors"
            >
              CONTACT TEAM
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
