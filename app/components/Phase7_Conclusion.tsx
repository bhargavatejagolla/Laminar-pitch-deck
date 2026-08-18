"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Play, ArrowRight, Activity, Terminal, BrainCircuit, Cpu } from "lucide-react";
import SplitFlapText from "./SplitFlapText";

export function Phase7_Conclusion() {
  return (
    <section className="relative w-full bg-void text-text overflow-hidden py-16 border-t border-line/50" id="readiness">
      
      {/* 1. Technical Assets & Innovation */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-20">
        <motion.div
          viewport={{ once: true }}
          className="text-center mb-12"
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
            className="bg-panel border border-line p-8 md:p-10 rounded-xl group hover:border-signal/50 hover:bg-signal/5 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-signal/10 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
            <BrainCircuit className="w-10 h-10 md:w-12 md:h-12 text-signal mb-8 group-hover:animate-pulse drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]" />
            <h4 className="font-mono text-base md:text-lg tracking-widest font-bold mb-4">PROPRIETARY AI MODELS</h4>
            <p className="text-muted text-sm md:text-base leading-relaxed font-sans">
              Custom-trained computer vision and behavioral analysis pipelines optimized for urban surveillance edge-cases.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-panel border border-line p-8 md:p-10 rounded-xl group hover:border-signal/50 hover:bg-signal/5 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-signal/10 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
            <Activity className="w-10 h-10 md:w-12 md:h-12 text-signal mb-8 group-hover:animate-pulse drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]" />
            <h4 className="font-mono text-base md:text-lg tracking-widest font-bold mb-4">NOVEL ALGORITHMS</h4>
            <p className="text-muted text-sm md:text-base leading-relaxed font-sans">
              Advanced multi-camera fusion and 4D spatial reconstruction allowing contextual intelligence across separate feeds.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-panel border border-line p-8 md:p-10 rounded-xl group hover:border-signal/50 hover:bg-signal/5 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-signal/10 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
            <Terminal className="w-10 h-10 md:w-12 md:h-12 text-signal mb-8 group-hover:animate-pulse drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]" />
            <h4 className="font-mono text-base md:text-lg tracking-widest font-bold mb-4">PROPRIETARY DATASETS</h4>
            <p className="text-muted text-sm md:text-base leading-relaxed font-sans">
              Curated synthetic and real-world urban datasets ensuring high accuracy in diverse environmental conditions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. TRL Level */}
      <div className="bg-panel/20 border-y border-line/30 py-16 mb-20">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-medium tracking-tight mb-16 text-muted"
          >
            Current Technology Readiness Level
          </motion.h3>

          <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between font-mono text-xs gap-12 md:gap-0 mt-24">
            {/* Background Line */}
            <div className="absolute left-[50%] md:left-0 top-0 bottom-0 md:top-1/2 md:bottom-auto w-px md:w-full md:h-px bg-line -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2" />
            
            {/* Progress Line */}
            <motion.div 
              initial={{ height: 0, width: 0 }}
              whileInView={{ height: "66.66%", width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-[50%] md:left-0 top-0 md:top-1/2 w-[2px] md:w-full h-0 md:h-[2px] bg-signal shadow-[0_0_10px_rgba(0,240,255,0.8)] -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 origin-top md:origin-left md:[!height:2px] max-md:[!width:2px]"
            />

            <div className="relative z-10 flex flex-col md:flex-col items-center gap-4 text-muted/50 bg-panel px-4 py-2 md:p-0 md:bg-transparent rounded-sm">
              <div className="w-3 h-3 rounded-full bg-void border-2 border-line hidden md:block" />
              <span>TRL 1-3</span>
            </div>
            <div className="relative z-10 flex flex-col md:flex-col items-center gap-4 text-muted/50 bg-panel px-4 py-2 md:p-0 md:bg-transparent rounded-sm">
              <div className="w-3 h-3 rounded-full bg-void border-2 border-line hidden md:block" />
              <span>TRL 4-5</span>
            </div>
            
            {/* Active TRL 6 */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="relative z-20 flex flex-col md:flex-col items-center gap-4 text-signal font-bold tracking-widest bg-void p-6 md:p-0 rounded-xl md:rounded-none border border-signal/30 md:border-none shadow-[0_0_30px_rgba(0,240,255,0.1)] md:shadow-none"
            >
              <div className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-void border-2 border-signal shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center justify-center">
                <div className="w-3 h-3 md:w-2 md:h-2 bg-signal rounded-full animate-ping" />
              </div>
              <div className="md:absolute md:top-10 flex flex-col items-center w-full md:w-48 text-center">
                <span className="text-lg md:text-sm">TRL 6</span>
                <span className="text-text mt-2 md:mt-1 text-sm md:text-xs">Functional Prototype</span>
              </div>
            </motion.div>

            <div className="relative z-10 flex flex-col md:flex-col items-center gap-4 text-muted/30 bg-panel px-4 py-2 md:p-0 md:bg-transparent rounded-sm">
              <div className="w-3 h-3 rounded-full bg-void border-2 border-line/30 hidden md:block" />
              <span>TRL 7-8</span>
            </div>
            <div className="relative z-10 flex flex-col md:flex-col items-center gap-4 text-muted/30 bg-panel px-4 py-2 md:p-0 md:bg-transparent rounded-sm">
              <div className="w-3 h-3 rounded-full bg-void border-2 border-line/30 hidden md:block" />
              <span>TRL 9</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The Ask / Prototype CTA */}
      <div className="py-20 flex flex-col items-center text-center container mx-auto px-6 relative">
        {/* Glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-signal/10 blur-[150px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Cpu className="w-20 h-20 md:w-32 md:h-32 text-signal mx-auto mb-16 opacity-80 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]" />
          
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
