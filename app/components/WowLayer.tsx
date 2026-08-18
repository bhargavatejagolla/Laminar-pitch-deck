"use client";

import { motion } from "framer-motion";
import { Search, Map, Activity, ArrowRight, Play, Camera, ArrowDown } from "lucide-react";

export function WowLayer() {
  return (
    <section className="relative w-full bg-void text-text overflow-hidden py-32 border-t border-line/30" id="prototype">
      
      {/* 1. Transition */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-40">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl font-medium tracking-tight mb-8"
        >
          But what happens inside the layer?
        </motion.h2>
      </div>

      {/* 01 - AI VIDEO SEARCH */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-40" id="video-search">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">01 / AI VIDEO SEARCH</div>
            <h3 className="text-4xl md:text-5xl font-medium mb-4">Find the moment.</h3>
            <h3 className="text-4xl md:text-5xl font-medium text-muted mb-8">Without watching the hours.</h3>
            
            <div className="flex gap-4 font-mono text-[10px] text-muted mb-8">
              <span>SEARCH</span>
              <span className="text-signal">→</span>
              <span>RETRIEVE</span>
              <span className="text-signal">→</span>
              <span className="text-text border-b border-signal pb-1">UNDERSTAND</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="glass-panel shining-border p-8 rounded-xl relative overflow-hidden"
          >
            {/* Visual Timeline Compression */}
            <div className="mb-8">
              <div className="flex justify-between font-mono text-[10px] text-muted mb-2">
                <span>00:00</span>
                <span>23:59</span>
              </div>
              <div className="h-4 bg-void border border-line rounded flex items-center px-1 overflow-hidden">
                <motion.div 
                  initial={{ width: "100%" }}
                  whileInView={{ width: "100%", opacity: [1, 0.3, 0] }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-2 bg-muted/20 w-full"
                />
              </div>
            </div>

            <div className="relative z-10 mb-8 border border-signal/30 bg-void p-4 rounded-sm">
              <div className="flex items-center gap-3 text-signal font-mono text-xs mb-2">
                <Search className="w-3 h-3" />
                NATURAL LANGUAGE QUERY
              </div>
              <div className="text-sm font-sans font-light text-text italic">
                "Show me vehicles that stopped near the intersection after 8 PM."
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <div className="font-mono text-[10px] text-signal mb-4 tracking-widest">MATCHES FOUND</div>
              <div className="flex gap-4">
                {['20:14', '20:37', '21:02', '21:18'].map((time, i) => (
                  <motion.div 
                    key={time}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8 + (i * 0.2) }}
                    className="bg-void border border-signal/50 px-3 py-1 font-mono text-xs text-text rounded-sm shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                  >
                    [ {time} ]
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 02 - 4D SPATIAL INTELLIGENCE */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-40" id="spatial-4d">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="glass-panel shining-border p-8 rounded-xl lg:order-1 order-2 h-[400px] relative flex flex-col justify-center items-center overflow-hidden"
          >
            {/* Minimalist 3D Space concept using 2D transforms */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(32,38,46,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(32,38,46,0.3)_1px,transparent_1px)] bg-[size:20px_20px] [transform:rotateX(60deg)] origin-center" />
            
            <div className="relative z-10 w-full max-w-sm">
              <div className="flex justify-between mb-8 font-mono text-[10px] text-muted">
                <div className="flex flex-col items-center">
                  <div className="w-1.5 h-1.5 bg-muted rounded-full mb-2" />
                  <div>CAM 01</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-1.5 h-1.5 bg-muted rounded-full mb-2" />
                  <div>CAM 02</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-1.5 h-1.5 bg-muted rounded-full mb-2" />
                  <div>CAM 03</div>
                </div>
              </div>

              {/* Connecting lines */}
              <div className="relative h-20 border-b border-line">
                <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ delay: 0.5, duration: 1 }} className="absolute left-[10%] top-0 w-px bg-signal/50" />
                <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ delay: 0.7, duration: 1 }} className="absolute left-[50%] top-0 w-px bg-signal/50" />
                <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ delay: 0.9, duration: 1 }} className="absolute right-[10%] top-0 w-px bg-signal/50" />
                
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }} 
                  whileInView={{ scale: 1, opacity: 1 }} 
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="absolute bottom-[-16px] left-[50%] -translate-x-1/2 bg-void border border-signal px-4 py-1 rounded-sm shadow-[0_0_15px_rgba(0,240,255,0.2)] font-mono text-xs text-signal font-bold"
                >
                  INCIDENT
                </motion.div>
              </div>

              <div className="mt-16 border-t border-line/30 pt-4 flex justify-between font-mono text-[10px] text-muted">
                <span>PAST</span>
                <span className="text-signal">NOW</span>
                <span>NEXT</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-2 order-1">
            <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">02 / 4D SPATIAL INTELLIGENCE</div>
            <h3 className="text-4xl md:text-5xl font-medium mb-4">An incident isn't a frame.</h3>
            <h3 className="text-3xl md:text-4xl font-medium text-muted mb-12">It's a story unfolding through space and time.</h3>
            
            <div className="bg-void border border-line p-6 rounded-sm mb-8 max-w-sm">
              <div className="flex flex-col gap-4 font-mono text-xs tracking-widest">
                <div className="flex items-center justify-between"><span className="text-muted">SPACE</span> <span className="text-text">+</span></div>
                <div className="flex items-center justify-between"><span className="text-muted">TIME</span> <span className="text-text">+</span></div>
                <div className="flex items-center justify-between"><span className="text-muted">CONTEXT</span> <span className="text-signal">→</span></div>
              </div>
            </div>
            
            <p className="text-xl text-text font-medium border-l-2 border-signal pl-4">
              From CCTV footage to a 4D incident story.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 03 - EMERGENCY ORCHESTRATION */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-40" id="emergency">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">03 / EMERGENCY ORCHESTRATION</div>
            <h3 className="text-4xl md:text-5xl font-medium mb-4">Detection is only the beginning.</h3>
            <h3 className="text-4xl md:text-5xl font-medium text-muted mb-12">The response matters.</h3>
            
            <div className="flex flex-col gap-4 max-w-sm mb-8">
              <h4 className="text-2xl font-medium">One event.</h4>
              <h4 className="text-2xl font-medium text-signal">One shared operational picture.</h4>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Incident Card */}
            <div className="bg-panel border border-critical/50 rounded-sm p-6 w-full max-w-md shadow-[0_0_20px_rgba(239,68,68,0.05)] mb-8">
              <div className="font-mono text-xs text-critical tracking-widest font-bold border-b border-line pb-4 mb-4">INCIDENT DETECTED</div>
              <div className="grid grid-cols-[100px_1fr] gap-3 font-mono text-xs mb-6">
                <span className="text-muted">TYPE</span> <span className="text-text font-bold">ROAD OBSTRUCTION</span>
                <span className="text-muted">PRIORITY</span> <span className="text-critical">HIGH</span>
                <span className="text-muted">LOCATION</span> <span className="text-text">SECTOR 04</span>
              </div>
              <div className="font-mono text-[10px] tracking-widest text-muted mb-2">STATUS</div>
              <div className="flex flex-col gap-2 font-mono text-[10px]">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-signal rounded-full" /> Detected</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-signal rounded-full" /> Context verified</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-signal rounded-full animate-pulse" /> Response recommended</div>
              </div>
            </div>

            {/* Branches */}
            <div className="w-full max-w-md flex flex-col items-center">
              <div className="w-px h-8 bg-line" />
              <div className="w-full border-t border-line relative pt-6 flex justify-between px-4 text-center font-mono text-[10px] tracking-widest">
                <div className="absolute top-0 left-1/2 w-px h-6 bg-line -translate-x-1/2" />
                <div className="flex flex-col items-center w-24">
                  <ArrowDown className="w-3 h-3 text-line mb-2" />
                  <div className="bg-void border border-line px-2 py-2 rounded-sm w-full">OPERATOR<br/>ALERT</div>
                </div>
                <div className="flex flex-col items-center w-24">
                  <ArrowDown className="w-3 h-3 text-line mb-2" />
                  <div className="bg-void border border-line px-2 py-2 rounded-sm w-full">TRAFFIC<br/>CONTROL</div>
                </div>
                <div className="flex flex-col items-center w-24">
                  <ArrowDown className="w-3 h-3 text-line mb-2" />
                  <div className="bg-void border border-critical/50 px-2 py-2 rounded-sm w-full text-critical">EMERGENCY<br/>TEAM</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. THE THREE CAPABILITIES CONNECT */}
      <div className="py-32 bg-panel/30 border-y border-line/30 mb-40">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center text-center">
          <div className="font-mono text-sm tracking-widest text-muted flex flex-col items-center gap-4">
            <div className="bg-void border border-line px-8 py-3 rounded-sm">AI VIDEO SEARCH</div>
            <ArrowDown className="w-4 h-4 text-signal" />
            <div className="text-signal font-bold">DISCOVER</div>
            <ArrowDown className="w-4 h-4 text-signal" />
            
            <div className="bg-void border border-line px-8 py-3 rounded-sm">4D SPATIAL INTELLIGENCE</div>
            <ArrowDown className="w-4 h-4 text-signal" />
            <div className="text-signal font-bold">UNDERSTAND</div>
            <ArrowDown className="w-4 h-4 text-signal" />
            
            <div className="bg-void border border-line px-8 py-3 rounded-sm">EMERGENCY ORCHESTRATION</div>
            <ArrowDown className="w-4 h-4 text-signal" />
            <div className="text-signal font-bold">ACT</div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="mt-24 font-mono text-2xl md:text-4xl font-bold tracking-[0.2em]"
          >
            <span className="text-text">DISCOVER</span> <span className="text-signal mx-4">→</span>
            <span className="text-text">UNDERSTAND</span> <span className="text-signal mx-4">→</span>
            <span className="text-text">ACT</span>
          </motion.div>
        </div>
      </div>

      {/* 5. USE REAL PRODUCT EVIDENCE */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs tracking-widest text-signal mb-4">LAMINAR / PROTOTYPE</div>
          <h2 className="text-3xl md:text-4xl font-medium">Real product evidence.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Prototype Screenshot Placeholder 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-signal/5 blur-xl group-hover:bg-signal/10 transition-colors" />
            <div className="relative bg-void border border-line rounded-sm overflow-hidden aspect-video flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-signal via-void to-void" />
              <div className="text-center z-10">
                <Camera className="w-8 h-8 text-muted mx-auto mb-4" />
                <div className="font-mono text-xs tracking-widest text-muted/80">ACTUAL PRODUCT UI</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between font-mono text-[10px] text-muted tracking-widest px-2">
              <span>FUNCTIONAL PROTOTYPE</span>
              <span className="text-signal">REAL-TIME EVENTS</span>
            </div>
          </div>

          {/* Prototype Screenshot Placeholder 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-signal/5 blur-xl group-hover:bg-signal/10 transition-colors" />
            <div className="relative bg-void border border-line rounded-sm overflow-hidden aspect-video flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-signal via-void to-void" />
              <div className="text-center z-10">
                <Play className="w-8 h-8 text-muted mx-auto mb-4" />
                <div className="font-mono text-xs tracking-widest text-muted/80">REAL 4D / INTELLIGENCE VIEW</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between font-mono text-[10px] text-muted tracking-widest px-2">
              <span>MULTI-CAMERA FUSION</span>
              <span className="text-signal">SPATIAL CONTEXT</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. BEFORE / AFTER Moment */}
      <div className="py-32 bg-panel/30 border-y border-line/30 mb-40">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center">
            
            {/* BEFORE */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="font-mono text-xs tracking-widest text-muted mb-8">BEFORE</div>
              <h3 className="text-4xl font-medium mb-12">RAW VIDEO</h3>
              
              <div className="grid grid-cols-2 gap-4 opacity-50">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-void border border-line aspect-video rounded-sm flex items-center justify-center">
                    <span className="font-mono text-[10px] text-muted">CAM 0{i}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="font-mono text-xs tracking-widest text-signal mb-8">AFTER</div>
              <h3 className="text-4xl font-medium mb-12 text-signal drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">URBAN INTELLIGENCE</h3>
              
              <div className="bg-void border border-signal p-8 rounded-sm aspect-square md:aspect-auto flex flex-col justify-center items-center shadow-[0_0_30px_rgba(0,240,255,0.05)]">
                <div className="w-full max-w-xs grid grid-cols-2 gap-y-8 font-mono text-sm tracking-widest text-text text-left">
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-signal rounded-full" /> EVENT</div>
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-signal rounded-full" /> TIMELINE</div>
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-signal rounded-full" /> CONTEXT</div>
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-signal rounded-full" /> RISK</div>
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-signal rounded-full" /> LOCATION</div>
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-signal rounded-full" /> RESPONSE</div>
                </div>
              </div>
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mt-32 flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-muted">Same cameras.</h2>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-text">A new intelligence layer.</h2>
          </motion.div>
        </div>
      </div>

      {/* 7. TECHNICAL STACK REVEAL */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="font-mono text-2xl font-bold tracking-[0.3em] text-signal mb-12">LAMINAR</div>
          <div className="font-mono text-[10px] tracking-widest text-muted mb-4">INTELLIGENCE LAYER</div>
          
          <div className="w-full h-px bg-line mb-12" />
          
          <div className="flex flex-col gap-6 font-mono text-sm tracking-widest">
            <div className="bg-panel border border-line py-4 rounded-sm text-text font-bold">AI / CONTEXT / PREDICTION</div>
            <div className="bg-void border border-line py-4 rounded-sm text-muted">SPATIAL + TEMPORAL INTELLIGENCE</div>
            <div className="bg-void border border-line py-4 rounded-sm text-muted">COMPUTER VISION + TRACKING</div>
            <div className="bg-void border border-line py-4 rounded-sm text-muted">EVENT PIPELINE</div>
            <div className="bg-void border border-line/50 py-4 rounded-sm text-muted/50 border-dashed">EXISTING CCTV INFRASTRUCTURE</div>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-3 font-mono text-[10px] tracking-widest text-signal/70">
            <span className="px-3 py-1 border border-signal/30 rounded-full">Computer Vision</span>
            <span className="px-3 py-1 border border-signal/30 rounded-full">Multi-Camera Fusion</span>
            <span className="px-3 py-1 border border-signal/30 rounded-full">Behavioral Intelligence</span>
            <span className="px-3 py-1 border border-signal/30 rounded-full">Predictive Analytics</span>
            <span className="px-3 py-1 border border-signal/30 rounded-full">Geospatial Intelligence</span>
            <span className="px-3 py-1 border border-signal/30 rounded-full">AI Video Search</span>
            <span className="px-3 py-1 border border-signal/30 rounded-full">4D Reconstruction</span>
            <span className="px-3 py-1 border border-signal/30 rounded-full">Real-Time Events</span>
          </div>
        </motion.div>
      </div>

      {/* 8. Final Transition */}
      <div className="py-40 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            LAMINAR doesn't just detect what a camera sees.
          </h2>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-24 text-signal drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            It builds intelligence around what is happening.
          </h2>
          
          <div className="flex flex-col items-center gap-3 font-mono text-[10px] tracking-widest text-muted mb-40">
            <div>VIDEO</div><ArrowDown className="w-3 h-3 text-signal" />
            <div>CONTEXT</div><ArrowDown className="w-3 h-3 text-signal" />
            <div>SPATIAL</div><ArrowDown className="w-3 h-3 text-signal" />
            <div>TEMPORAL</div><ArrowDown className="w-3 h-3 text-signal" />
            <div className="text-text font-bold">INTELLIGENCE</div><ArrowDown className="w-3 h-3 text-signal" />
            <div className="text-signal font-bold border-b border-signal">ACTION</div>
          </div>

          <div className="text-center pt-32 border-t border-line/30 w-full max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-medium mb-4 text-muted">Built as a platform.</h3>
            <h3 className="text-2xl md:text-3xl font-medium mb-12 text-muted">Designed to scale across environments.</h3>
            
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-24">
              Who needs this intelligence?
            </h2>
            <ArrowDown className="w-6 h-6 text-signal animate-bounce mt-12 mx-auto" />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
