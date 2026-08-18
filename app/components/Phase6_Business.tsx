"use client";

import { motion } from "framer-motion";
import { Globe2, Crosshair, Target, Cpu, Cloud, Zap, ArrowRight, Server, Layers, Camera } from "lucide-react";

export function Phase6_Business() {
  return (
    <section className="relative w-full bg-void text-text overflow-hidden py-16 border-t border-line/30" id="business">
      
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true,  }}
          className="font-mono text-xs text-signal tracking-[0.2em] mb-8"
        >
          LAMINAR / ECONOMICS OF INTELLIGENCE
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium tracking-tight mb-4"
        >
          The market isn't just security.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-medium tracking-tight text-muted mb-8"
        >
          It's urban operations.
        </motion.h2>
      </div>

      {/* 1. Addressable Market (TAM / Target Customers) */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-20">
        <div className="flex flex-col items-center justify-center relative h-[600px] md:h-[800px] w-full max-w-4xl mx-auto overflow-hidden">
          {/* Subtle central glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-signal/10 via-void to-void" />

          {/* Concentric Market Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            
            {/* TAM */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-[350px] h-[350px] md:w-[700px] md:h-[700px] rounded-full border border-line/30 border-dashed animate-[spin_60s_linear_infinite]"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-10 md:top-16 left-1/2 -translate-x-1/2 font-mono text-xs md:text-sm text-muted/60 tracking-widest bg-void px-4 py-1 rounded-full border border-line/30 z-20"
            >
              GLOBAL SMART CITY INFRASTRUCTURE
            </motion.div>

            {/* SAM */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full border border-signal/30 animate-[spin_40s_linear_infinite_reverse]"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="absolute top-28 md:top-48 left-1/2 -translate-x-1/2 font-mono text-sm md:text-base text-signal/80 tracking-widest bg-void px-4 py-1 rounded-full border border-signal/20 z-20"
            >
              TRANSIT HUBS & AIRPORTS
            </motion.div>

            {/* SOM */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              className="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full border-2 border-signal shadow-[0_0_50px_rgba(0,240,255,0.15)] flex items-center justify-center bg-signal/5 backdrop-blur-sm"
            >
              <Globe2 className="w-16 h-16 md:w-24 md:h-24 text-signal animate-pulse drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="absolute mt-48 md:mt-72 font-mono text-base md:text-lg text-text font-bold tracking-[0.2em] bg-void px-6 py-2 rounded-full border border-signal shadow-[0_0_20px_rgba(0,240,255,0.1)] z-20"
            >
              LARGE CAMPUSES & ENTERPRISE
            </motion.div>

          </div>
        </div>
      </div>

      {/* 2. Competitor Analysis & USP */}
      <div className="bg-panel/30 border-y border-line/30 py-16 mb-20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              We don't sell cameras.
            </h2>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-signal drop-shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              We sell the intelligence they lack.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-8 max-w-6xl mx-auto items-center">
            
            {/* The Competitor Way */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-void border border-line p-8 md:p-12 rounded-sm"
            >
              <div className="font-mono text-xs text-muted tracking-widest mb-8">THE OLD WAY / COMPETITORS</div>
              <h3 className="text-2xl font-medium mb-12 text-muted">Hardware Replacement</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-12 opacity-30">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <Server className="w-8 h-8 text-line" />
                    <span className="text-[10px] font-mono">NEW CAM {i+1}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 font-mono text-xs tracking-widest border-t border-line/50 pt-8">
                <div className="flex justify-between text-critical">
                  <span>CAPEX</span> <span>EXTREME</span>
                </div>
                <div className="flex justify-between text-critical">
                  <span>DEPLOYMENT</span> <span>MONTHS</span>
                </div>
                <div className="flex justify-between text-critical">
                  <span>VENDOR LOCK-IN</span> <span>YES</span>
                </div>
              </div>
            </motion.div>

            {/* The LAMINAR Way */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel shining-border p-8 md:p-12 rounded-xl shadow-[0_0_40px_rgba(0,240,255,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-signal/50">LAMINAR USP</div>
              <div className="font-mono text-xs text-signal font-bold tracking-widest mb-8">THE LAMINAR WAY</div>
              <h3 className="text-2xl font-medium mb-12 text-text">Intelligence Layer</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-12 relative">
                <div className="absolute inset-0 bg-signal/10 rounded-sm blur-md" />
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 relative z-10">
                    <div className="relative">
                      <Camera className="w-8 h-8 text-muted" />
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-signal rounded-full animate-ping" />
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-signal rounded-full" />
                    </div>
                    <span className="text-[10px] font-mono text-signal">AI ACTIVE</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 font-mono text-xs tracking-widest border-t border-signal/30 pt-8">
                <div className="flex justify-between text-signal">
                  <span>CAPEX</span> <span>ZERO HARDWARE</span>
                </div>
                <div className="flex justify-between text-signal">
                  <span>DEPLOYMENT</span> <span>INSTANT SCALABILITY</span>
                </div>
                <div className="flex justify-between text-signal">
                  <span>ARCHITECTURE</span> <span>SOFTWARE MARGINS</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 3. Revenue Model */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">REVENUE MODEL</div>
          <h2 className="text-4xl font-medium mb-8">A frictionless land-and-expand SaaS model.</h2>
          <p className="text-muted text-lg font-light leading-relaxed">
            License the intelligence node, upsell the domain capabilities. LAMINAR's software-first approach allows for continuous MRR expansion without hardware bottlenecks.
          </p>
        </motion.div>

        {/* Node Expansion Animation */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-panel border border-line p-8 flex flex-col items-center text-center rounded-sm"
          >
            <div className="w-12 h-12 rounded-full border border-signal flex items-center justify-center mb-6 bg-void text-signal shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              1
            </div>
            <h4 className="font-mono text-sm tracking-widest font-bold mb-4">BASE NODE</h4>
            <p className="text-muted/80 text-xs font-sans mb-6 h-12">
              Monthly SaaS license per camera feed processed.
            </p>
            <div className="text-signal font-mono text-lg mt-auto border-t border-line/50 w-full pt-4">
              MRR FOUNDATION
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-panel border border-line p-8 flex flex-col items-center text-center rounded-sm"
          >
            <div className="w-12 h-12 rounded-full border border-signal flex items-center justify-center mb-6 bg-void text-signal shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-mono text-sm tracking-widest font-bold mb-4">DOMAIN ADD-ONS</h4>
            <p className="text-muted/80 text-xs font-sans mb-6 h-12">
              Upsell advanced modules: Traffic, Crowd, 4D Spatial Intelligence.
            </p>
            <div className="text-signal font-mono text-lg mt-auto border-t border-line/50 w-full pt-4">
              ACV EXPANSION
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-panel border border-line p-8 flex flex-col items-center text-center rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-signal/10 rounded-bl-full" />
            <div className="w-12 h-12 rounded-full border border-signal flex items-center justify-center mb-6 bg-void text-signal shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <Cloud className="w-5 h-5" />
            </div>
            <h4 className="font-mono text-sm tracking-widest font-bold mb-4">ENTERPRISE SCALE</h4>
            <p className="text-muted/80 text-xs font-sans mb-6 h-12">
              City-wide deployments, dedicated instances, and custom integrations.
            </p>
            <div className="text-signal font-mono text-lg mt-auto border-t border-line/50 w-full pt-4">
              HIGH LTV
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
