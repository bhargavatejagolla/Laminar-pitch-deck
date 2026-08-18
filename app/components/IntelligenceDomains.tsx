"use client";

import { motion } from "framer-motion";
import { Shield, Car, Users, Siren, User, Droplets, Building2, SquareParking, ArrowRight, ArrowDown } from "lucide-react";
import { useState } from "react";

const domains = [
  { id: "safety", title: "URBAN SAFETY", icon: Shield, color: "#ef4444", desc: "Understand what shouldn't be happening.", detail: "AI-assisted situational awareness for operators: abnormal activity, behavioral analysis, and incident intelligence." },
  { id: "traffic", title: "TRAFFIC", icon: Car, color: "#f59e0b", desc: "See traffic as a living system.", detail: "Vehicle flow → Density → Queue → Congestion → Risk." },
  { id: "crowd", title: "CROWD", icon: Users, color: "#8b5cf6", desc: "Movement through space and time.", detail: "Surfaces abnormal crowd patterns and emerging density risks for operator attention." },
  { id: "emergency", title: "EMERGENCY", icon: Siren, color: "#dc2626", desc: "Time becomes operational.", detail: "Turns an isolated detection into a coordinated incident workflow across responders." },
  { id: "personal", title: "PERSONAL SAFETY", icon: User, color: "#06b6d4", desc: "Risk at human scale.", detail: "Guardian Route: AI-assisted personal safety workflows connecting environmental awareness with emergency escalation." },
  { id: "environment", title: "ENVIRONMENT", icon: Droplets, color: "#3b82f6", desc: "See disruption as it develops.", detail: "Interpret visual environmental conditions and surface infrastructure disruption signals." },
  { id: "infrastructure", title: "INFRASTRUCTURE", icon: Building2, color: "#a8a29e", desc: "Monitor the city itself.", detail: "The camera network becomes an observation layer for more than security." },
  { id: "parking", title: "SMART PARKING", icon: SquareParking, color: "#10b981", desc: "Know where capacity exists.", detail: "Availability, occupancy, and historical patterns across urban spaces." },
];

export function IntelligenceDomains() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-void text-text overflow-hidden py-16 border-t border-line/30">
      
      {/* 1. Opening */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true,  }}
          className="font-mono text-xs text-signal tracking-[0.2em] mb-8"
        >
          LAMINAR / INTELLIGENCE DOMAINS
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium tracking-tight mb-4"
        >
          ONE ENGINE.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-medium tracking-tight text-muted mb-8"
        >
          MULTIPLE URBAN INTELLIGENCE DOMAINS.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg text-muted/80 font-sans font-light leading-relaxed max-w-3xl mx-auto"
        >
          The same underlying intelligence layer can be applied across safety, mobility, emergencies, crowds, infrastructure and environmental conditions.
        </motion.p>
      </div>

      {/* 2. Responsive Domain Grid */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-20">
        
        {/* Core Node */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-void border-2 border-signal shadow-[0_0_40px_rgba(0,240,255,0.2)] relative"
          >
            <div className="absolute inset-0 bg-signal/5 blur-xl rounded-full animate-pulse" />
            <div className="font-mono text-lg tracking-[0.3em] text-signal font-bold relative z-10">LAMINAR</div>
            <div className="font-sans text-[10px] text-muted/70 tracking-widest mt-1 relative z-10">INTELLIGENCE CORE</div>
          </motion.div>
        </div>

        {/* Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle connection lines behind grid on desktop */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-line/50 -translate-y-1/2" />
            <div className="absolute left-1/4 right-1/4 top-0 bottom-0 flex justify-between">
               <div className="w-px h-full bg-line/50" />
               <div className="w-px h-full bg-line/50" />
            </div>
          </div>

          {domains.map((domain, i) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true,  }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
              onMouseEnter={() => setActiveDomain(domain.id)}
              onMouseLeave={() => setActiveDomain(null)}
              className="group relative bg-panel/30 border border-line p-6 rounded-xl hover:bg-panel transition-colors"
              style={{ 
                borderColor: activeDomain === domain.id ? domain.color : 'var(--color-line)',
                boxShadow: activeDomain === domain.id ? `0 0 30px ${domain.color}20` : 'none'
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-lg border bg-void transition-all duration-300"
                  style={{ 
                    borderColor: activeDomain === domain.id ? domain.color : 'var(--color-line/50)',
                    color: activeDomain === domain.id ? domain.color : 'var(--color-muted)'
                  }}
                >
                  <domain.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest font-bold mb-1 transition-colors" style={{ color: activeDomain === domain.id ? domain.color : 'var(--color-text)' }}>
                    {domain.title}
                  </div>
                  <div className="text-xs font-sans text-muted leading-tight">
                    {domain.desc}
                  </div>
                </div>
              </div>
              
              <div className={`text-sm font-light font-sans text-muted/90 transition-all duration-300 ${activeDomain === domain.id ? 'opacity-100' : 'opacity-70'}`}>
                {domain.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. The Architecture Convergence */}
      <div className="py-16 bg-panel/30 border-y border-line/30 relative overflow-hidden">
        {/* Subtle radial glow behind the tree */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-signal/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-muted">
              Different problems.
            </h2>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-signal drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              One intelligence layer.
            </h2>
          </motion.div>

          <div className="flex flex-col items-center justify-center font-mono text-sm md:text-base text-muted">
            <div className="bg-void border border-signal px-8 py-3 rounded-md text-signal font-bold tracking-widest mb-8 shadow-[0_0_20px_rgba(0,240,255,0.15)] text-lg">LAMINAR CORE</div>
            <div className="w-px h-12 bg-line" />
            
            <div className="w-full max-w-2xl border-t border-line relative pt-8 flex justify-between px-8 md:px-16">
              <div className="absolute top-0 left-1/2 w-px h-12 bg-line -translate-x-1/2" />
              <div className="flex flex-col items-center">
                <ArrowDown className="w-4 h-4 text-line mb-3" />
                <div className="bg-panel border border-line px-6 py-3 rounded-md shadow-lg font-bold">VISION</div>
              </div>
              <div className="flex flex-col items-center">
                <ArrowDown className="w-4 h-4 text-line mb-3" />
                <div className="bg-panel border border-line px-6 py-3 rounded-md shadow-lg font-bold">SPATIAL</div>
              </div>
              <div className="flex flex-col items-center">
                <ArrowDown className="w-4 h-4 text-line mb-3" />
                <div className="bg-panel border border-line px-6 py-3 rounded-md shadow-lg font-bold">TEMPORAL</div>
              </div>
            </div>

            <div className="w-px h-12 bg-line mt-8" />
            <div className="bg-void border-2 border-line px-8 py-3 rounded-md text-text font-bold shadow-lg">CONTEXT</div>
            <div className="w-px h-12 bg-line" />
            <div className="bg-void border-2 border-line px-8 py-3 rounded-md text-text font-bold shadow-lg">INTELLIGENCE</div>
            <div className="w-px h-12 bg-line" />
            <div className="bg-panel border-2 border-signal/50 px-10 py-4 rounded-md text-signal font-bold tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.1)] text-lg">OPERATIONS</div>
          </div>
        </div>
      </div>

      {/* 4. Modular Deployment & Scalability */}
      <div className="py-16 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Start with one problem. Expand through the same infrastructure.
          </h2>
          <p className="text-muted font-sans font-light max-w-2xl mx-auto">
            The platform compounds. More deployment environments → more intelligence modules → broader platform value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 font-mono text-[10px] md:text-xs">
          <div className="bg-panel/50 border border-line p-6 rounded-sm">
            <div className="text-text font-bold mb-4 tracking-widest text-lg">CITY</div>
            <div className="flex flex-col gap-3 text-muted">
              <div className="flex items-center gap-2"> <div className="w-1 h-1 bg-signal rounded-full" /> Traffic Intelligence</div>
              <div className="flex items-center gap-2"> <div className="w-1 h-1 bg-signal rounded-full" /> Emergency Intelligence</div>
              <div className="flex items-center gap-2"> <div className="w-1 h-1 bg-signal rounded-full" /> Crowd Intelligence</div>
            </div>
          </div>
          <div className="bg-panel/50 border border-line p-6 rounded-sm">
            <div className="text-text font-bold mb-4 tracking-widest text-lg">AIRPORT</div>
            <div className="flex flex-col gap-3 text-muted">
              <div className="flex items-center gap-2"> <div className="w-1 h-1 bg-signal rounded-full" /> Safety</div>
              <div className="flex items-center gap-2"> <div className="w-1 h-1 bg-signal rounded-full" /> Crowd</div>
              <div className="flex items-center gap-2"> <div className="w-1 h-1 bg-signal rounded-full" /> Emergency</div>
            </div>
          </div>
          <div className="bg-panel/50 border border-line p-6 rounded-sm">
            <div className="text-text font-bold mb-4 tracking-widest text-lg">CAMPUS</div>
            <div className="flex flex-col gap-3 text-muted">
              <div className="flex items-center gap-2"> <div className="w-1 h-1 bg-signal rounded-full" /> Personal Safety</div>
              <div className="flex items-center gap-2"> <div className="w-1 h-1 bg-signal rounded-full" /> Parking</div>
              <div className="flex items-center gap-2"> <div className="w-1 h-1 bg-signal rounded-full" /> Incident Intelligence</div>
            </div>
          </div>
        </div>

        {/* 5. One camera, many insights */}
        <div className="mt-32 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-medium tracking-tight mb-16"
          >
            One camera can become multiple intelligence sources.
          </motion.h2>

          <div className="flex flex-col items-center font-mono text-xs text-muted mb-16">
            <div className="bg-panel border border-line px-6 py-2 rounded-sm text-text mb-8">CAMERA 047</div>
            <div className="w-px h-8 bg-line" />
            <div className="w-full max-w-sm border-t border-line relative pt-8 flex justify-between px-8">
              <div className="absolute top-0 left-1/2 w-px h-8 bg-line -translate-x-1/2" />
              <div className="flex flex-col items-center">
                <ArrowDown className="w-3 h-3 text-line mb-2" />
                <div className="text-text font-bold">TRAFFIC</div>
              </div>
              <div className="flex flex-col items-center">
                <ArrowDown className="w-3 h-3 text-line mb-2" />
                <div className="text-text font-bold">CROWD</div>
              </div>
              <div className="flex flex-col items-center">
                <ArrowDown className="w-3 h-3 text-line mb-2" />
                <div className="text-text font-bold">SAFETY</div>
              </div>
            </div>
            <div className="w-full max-w-sm border-b border-line relative pb-8 mt-8 flex justify-between px-8">
              <div className="absolute bottom-0 left-1/2 w-px h-8 bg-line -translate-x-1/2" />
              <div className="flex flex-col items-center">
                <ArrowDown className="w-3 h-3 text-line mt-2" />
              </div>
              <div className="flex flex-col items-center">
                <ArrowDown className="w-3 h-3 text-line mt-2" />
              </div>
              <div className="flex flex-col items-center">
                <ArrowDown className="w-3 h-3 text-line mt-2" />
              </div>
            </div>
            <div className="w-px h-8 bg-line" />
            <div className="bg-void border border-signal px-6 py-2 rounded-sm text-signal font-bold tracking-widest mt-8">CONTEXT</div>
          </div>
        </div>
      </div>

      {/* 6. Explore Deeper Intelligence */}
      <div className="py-16 bg-panel/20 border-t border-line/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="font-mono text-sm tracking-widest text-muted mb-12">EXPLORE DEEPER INTELLIGENCE</div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="#video-search" className="group block bg-void border border-line p-8 hover:border-signal/50 transition-colors">
              <div className="font-mono text-signal text-xs tracking-widest mb-4">01</div>
              <h3 className="text-xl font-medium mb-4 group-hover:text-signal transition-colors">AI Video Search</h3>
              <p className="text-muted/80 font-sans text-sm font-light mb-8">Search hours of visual data with natural language.</p>
              <ArrowRight className="w-4 h-4 text-line group-hover:text-signal transition-colors group-hover:translate-x-1" />
            </a>
            
            <a href="#spatial-4d" className="group block bg-void border border-line p-8 hover:border-signal/50 transition-colors">
              <div className="font-mono text-signal text-xs tracking-widest mb-4">02</div>
              <h3 className="text-xl font-medium mb-4 group-hover:text-signal transition-colors">4D Spatial Intelligence</h3>
              <p className="text-muted/80 font-sans text-sm font-light mb-8">Reconstruct and investigate incidents across space and time.</p>
              <ArrowRight className="w-4 h-4 text-line group-hover:text-signal transition-colors group-hover:translate-x-1" />
            </a>
            
            <a href="#emergency" className="group block bg-void border border-line p-8 hover:border-signal/50 transition-colors">
              <div className="font-mono text-signal text-xs tracking-widest mb-4">03</div>
              <h3 className="text-xl font-medium mb-4 group-hover:text-signal transition-colors">Emergency Orchestration</h3>
              <p className="text-muted/80 font-sans text-sm font-light mb-8">Turn detected incidents into coordinated operational workflows.</p>
              <ArrowRight className="w-4 h-4 text-line group-hover:text-signal transition-colors group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* 7. Final Transition Scene */}
      <div className="py-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center justify-center font-mono text-[10px] tracking-widest text-muted/50 mb-12 space-y-2">
            <div>TRAFFIC</div>
            <div>CROWD</div>
            <div>SAFETY</div>
            <div>EMERGENCY</div>
            <div>ENVIRONMENT</div>
            <div>INFRASTRUCTURE</div>
            <ArrowDown className="w-3 h-3 text-signal/50 mt-4 mb-4" />
          </div>

          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-muted">
            ONE PLATFORM.
          </h2>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-16 text-text drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            MULTIPLE INTELLIGENCE DOMAINS.
          </h2>

          <div className="mt-24 flex flex-col items-center">
            <p className="text-xl md:text-2xl font-light text-muted mb-8">
              But the real question isn't what LAMINAR can detect.
            </p>
            <h3 className="text-2xl md:text-4xl font-medium mb-12 text-signal">
              It's what LAMINAR can understand.
            </h3>
            
            <ArrowDown className="w-5 h-5 text-signal animate-bounce" />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
