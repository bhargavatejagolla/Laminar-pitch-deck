"use client";

import { motion } from "framer-motion";
import { Network, Activity, Layers, ArrowDown } from "lucide-react";

export function IntelligenceEngine() {
  return (
    <section className="relative w-full bg-void text-text overflow-hidden py-16" id="technology">
      
      {/* 1. The Opening - Connecting the Signals */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-20">
        <div className="flex flex-col items-center justify-center min-h-[50vh] relative">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-32 w-full mb-16 relative px-4">
            {/* Connection Line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true,  }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-[10%] right-[10%] h-px bg-signal hidden md:block origin-left"
            />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel border border-line p-6 rounded-xl text-center z-10 w-full md:min-w-[150px] md:w-auto"
            >
              <div className="w-2 h-2 bg-signal rounded-full mx-auto mb-2 animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
              <div className="font-mono text-xs text-muted mb-1">CAM_047</div>
              <div className="font-mono text-[10px] text-signal/70">VIDEO STREAM</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel border border-line p-6 rounded-xl text-center z-10 w-full md:min-w-[150px] md:w-auto"
            >
              <div className="w-2 h-2 bg-signal rounded-full mx-auto mb-2 animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
              <div className="font-mono text-xs text-muted mb-1">CAM_082</div>
              <div className="font-mono text-[10px] text-signal/70">VIDEO STREAM</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-panel border border-line p-6 rounded-xl text-center z-10 w-full md:min-w-[150px] md:w-auto"
            >
              <div className="w-2 h-2 bg-signal rounded-full mx-auto mb-2 animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
              <div className="font-mono text-xs text-muted mb-1">CAM_052</div>
              <div className="font-mono text-[10px] text-signal/70">VIDEO STREAM</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
              LAMINAR CONNECTS THE SIGNALS.
            </h2>
            <p className="text-lg md:text-xl text-muted font-sans font-light leading-relaxed">
              LAMINAR transforms visual streams from existing camera infrastructure into contextual, spatial, and temporal intelligence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. The Six-Stage Intelligence Model */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <div className="absolute left-6 md:left-[50px] top-0 bottom-0 w-px bg-line">
          <motion.div 
            className="w-full bg-signal shadow-[0_0_10px_rgba(0,240,255,0.8)]"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>

        {/* 01 OBSERVE */}
        <div className="relative pl-12 md:pl-24 py-16">
          <div className="absolute left-[-4px] md:left-[46px] top-24 w-2 h-2 bg-void border-2 border-signal rounded-full z-10" />
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true,  }}>
            <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">01 / OBSERVE</div>
            <h3 className="text-3xl md:text-4xl font-medium mb-6">See what is happening.</h3>
            <p className="text-muted/80 font-sans font-light leading-relaxed mb-8 max-w-2xl">
              Computer vision processes visual activity across connected camera feeds to identify objects, movement, people, vehicles, environmental changes, and relevant events.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-[10px] text-muted">
              {['PERSON', 'VEHICLE', 'CROWD', 'ROAD', 'WATER', 'OBJECT'].map(t => (
                <span key={t} className="px-3 py-1 border border-line bg-panel rounded-sm">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 02 UNDERSTAND */}
        <div className="relative pl-12 md:pl-24 py-16">
          <div className="absolute left-[-4px] md:left-[46px] top-24 w-2 h-2 bg-void border-2 border-signal rounded-full z-10" />
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true,  }}>
            <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">02 / UNDERSTAND</div>
            <h3 className="text-3xl md:text-4xl font-medium mb-6 max-w-xl">Seeing an object isn't understanding a situation.</h3>
            
            <div className="bg-panel/50 border border-line p-6 rounded-sm mb-6 max-w-md font-mono text-sm flex flex-col gap-2">
              <div className="text-muted">PERSON</div>
              <div className="text-line">+</div>
              <div className="text-muted">RUNNING</div>
              <div className="text-line">+</div>
              <div className="text-muted">NIGHT</div>
              <div className="text-line">+</div>
              <div className="text-muted">ISOLATED AREA</div>
              <div className="h-px bg-line my-2" />
              <div className="text-signal font-bold tracking-widest">CONTEXT</div>
            </div>

            <p className="text-muted/80 font-sans font-light leading-relaxed max-w-2xl">
              LAMINAR combines visual observations with behavioral, spatial, and environmental context to interpret what may be occurring.
            </p>
          </motion.div>
        </div>

        {/* 03 CORRELATE */}
        <div className="relative pl-12 md:pl-24 py-16">
          <div className="absolute left-[-4px] md:left-[46px] top-24 w-2 h-2 bg-void border-2 border-signal rounded-full z-10" />
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true,  }}>
            <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">03 / CORRELATE</div>
            <h3 className="text-3xl md:text-4xl font-medium mb-6">One event. Multiple perspectives.</h3>
            
            <div className="flex items-center gap-6 mb-8 max-w-md">
              <div className="flex flex-col gap-2 border-r border-line pr-6 font-mono text-xs text-muted">
                <div>CAM 014 ──┐</div>
                <div>CAM 027 ──┤</div>
                <div>CAM 031 ──┼──►</div>
                <div>CAM 042 ──┘</div>
              </div>
              <div className="font-mono text-sm text-signal font-bold tracking-widest">
                CORRELATED EVENT
              </div>
            </div>

            <p className="text-xl text-text font-medium mb-4">Context doesn't live inside one camera.</p>
            <p className="text-muted/80 font-sans font-light leading-relaxed max-w-2xl">
              It lives between them. LAMINAR connects location, time, movement, entities, and events to create a richer incident picture.
            </p>
          </motion.div>
        </div>

        {/* 04 PREDICT */}
        <div className="relative pl-12 md:pl-24 py-16">
          <div className="absolute left-[-4px] md:left-[46px] top-24 w-2 h-2 bg-void border-2 border-signal rounded-full z-10" />
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true,  }}>
            <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">04 / PREDICT</div>
            <h3 className="text-3xl md:text-4xl font-medium mb-12 max-w-2xl">Don't only ask what happened. Ask what is changing.</h3>
            
            <div className="relative flex justify-between items-start z-10 mb-12 max-w-md border-t border-line/50 pt-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-2 h-2 rounded-full bg-void border-2 border-muted mb-4 -mt-[21px]" />
                <div className="font-mono text-[10px] tracking-widest text-muted mb-1">PAST</div>
                <div className="font-sans text-xs text-muted/50">Normal</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-2 h-2 rounded-full bg-void border-2 border-signal mb-4 -mt-[21px]" />
                <div className="font-mono text-[10px] tracking-widest text-signal mb-1">NOW</div>
                <div className="font-sans text-xs text-muted/70">Emerging pattern</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-2 h-2 rounded-full bg-void border-2 border-warning mb-4 -mt-[21px]" />
                <div className="font-mono text-[10px] tracking-widest text-warning mb-1">FUTURE</div>
                <div className="font-sans text-xs text-muted/50">Possible risk</div>
              </div>
            </div>

            <p className="text-muted/80 font-sans font-light leading-relaxed max-w-2xl">
              LAMINAR analyzes temporal patterns, trends, and evolving conditions to surface emerging risks and operational signals.
            </p>
          </motion.div>
        </div>

        {/* 05 ORCHESTRATE */}
        <div className="relative pl-12 md:pl-24 py-16">
          <div className="absolute left-[-4px] md:left-[46px] top-24 w-2 h-2 bg-void border-2 border-signal rounded-full z-10" />
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true,  }}>
            <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">05 / ORCHESTRATE</div>
            <h3 className="text-3xl md:text-4xl font-medium mb-8 max-w-2xl">Intelligence becomes useful when it can drive action.</h3>
            
            <div className="flex gap-2 font-mono text-[10px] text-muted mb-8 items-center flex-wrap">
              <span>INCIDENT</span> <span className="text-signal">→</span>
              <span>VERIFY</span> <span className="text-signal">→</span>
              <span>CLASSIFY</span> <span className="text-signal">→</span>
              <span>PRIORITIZE</span> <span className="text-signal">→</span>
              <span>RECOMMEND</span> <span className="text-signal">→</span>
              <span className="text-text border-b border-signal">COORDINATE</span>
            </div>

            <p className="text-muted/80 font-sans font-light leading-relaxed max-w-2xl">
              LAMINAR supports operators with actionable intelligence and coordinated workflows—connecting traffic control, emergency response, and security teams.
            </p>
          </motion.div>
        </div>

        {/* 06 RESPOND */}
        <div className="relative pl-12 md:pl-24 py-16">
          <div className="absolute left-[-4px] md:left-[46px] top-24 w-2 h-2 bg-void border-2 border-signal rounded-full z-10" />
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true,  }}>
            <div className="font-mono text-xs text-signal tracking-[0.2em] mb-4">06 / RESPOND</div>
            <h3 className="text-3xl md:text-4xl font-medium mb-8 max-w-2xl">From intelligence to coordinated action.</h3>
            
            <div className="bg-panel border border-line p-6 rounded-sm max-w-md font-mono text-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-critical" />
              <div className="text-critical font-bold tracking-widest mb-4">INCIDENT / HIGH PRIORITY</div>
              <div className="grid grid-cols-[100px_1fr] gap-2 mb-6">
                <span className="text-muted">LOCATION</span> <span>Sector 4</span>
                <span className="text-muted">TYPE</span> <span>Road obstruction</span>
                <span className="text-muted">STATUS</span> <span>Verified</span>
              </div>
              <div className="text-signal mb-2">RESPONSE</div>
              <div className="text-muted flex flex-col gap-1">
                <span>→ Traffic control</span>
                <span>→ Emergency team</span>
                <span>→ Route recommendation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. The Architecture Reveal */}
      <div className="py-20 text-center container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="font-mono text-xs tracking-widest text-signal mb-12">REAL-TIME EVENT PIPELINE • LOW-LATENCY • EVENT-DRIVEN</div>
          
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            No new citywide camera ecosystem required.
          </h2>
          
          <p className="text-xl text-muted font-light leading-relaxed mb-16 max-w-3xl mx-auto">
            LAMINAR is designed as an intelligence layer over existing visual infrastructure, allowing organizations to augment their current camera ecosystem rather than rebuild it from scratch.
          </p>
          
          <div className="flex flex-col items-center gap-4 text-xs font-mono tracking-widest text-muted">
            <div className="border border-signal/50 bg-signal/10 text-signal px-12 py-4 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.1)]">
              LAMINAR INTELLIGENCE
            </div>
            <div className="w-px h-8 bg-line" />
            <div className="flex gap-4">
              <div className="border border-line bg-panel px-6 py-3 rounded-sm">CCTV</div>
              <div className="border border-line bg-panel px-6 py-3 rounded-sm">DATA</div>
              <div className="border border-line bg-panel px-6 py-3 rounded-sm">SYSTEMS</div>
            </div>
            <div className="w-px h-8 bg-line" />
            <div className="text-muted/50 border-t border-line/50 pt-4 px-12">
              EXISTING CITY INFRASTRUCTURE
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. Multi-modal Intelligence */}
      <div className="py-16 bg-panel/30 border-y border-line/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              The camera is the beginning—not the boundary.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center">
            {/* 3 Dimensions */}
            <div className="flex flex-col items-center justify-center font-mono text-sm text-muted relative h-48">
              <div className="absolute top-0 text-signal font-bold">CONTEXT</div>
              <div className="absolute top-6 bottom-6 w-px bg-line" />
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2">SPACE</div>
              <div className="absolute left-[35%] right-[35%] top-1/2 h-px bg-line -translate-y-1/2" />
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2">TIME</div>
              <div className="absolute bottom-0 text-text">EVENT</div>
            </div>

            <div>
              <p className="text-lg text-muted/80 font-sans font-light leading-relaxed mb-8">
                LAMINAR combines spatial, temporal and contextual signals to build richer incident intelligence.
              </p>
              
              <div className="grid grid-cols-3 gap-4 font-mono text-[10px] text-center border-l-2 border-signal pl-6">
                <div>
                  <div className="text-muted/50 mb-2">RAW</div>
                  <div className="text-muted">CAMERA 047<br/>████ VIDEO ███</div>
                </div>
                <div>
                  <div className="text-muted/50 mb-2">LAMINAR</div>
                  <div className="text-signal">VISION<br/>+<br/>CONTEXT</div>
                </div>
                <div>
                  <div className="text-muted/50 mb-2">INTELLIGENCE</div>
                  <div className="text-text">INCIDENT<br/>│<br/>ACTION</div>
                </div>
              </div>
              <div className="mt-8 text-xl font-medium text-text">
                Video is data. Context is intelligence.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. The Transition */}
      <div className="py-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-muted">
            LAMINAR isn't another camera system.
          </h2>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-text drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            It's the intelligence layer above the camera system.
          </h2>

          <div className="mb-12 flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl font-medium mb-4 text-signal">From pixels to context.</h3>
            <h3 className="text-2xl md:text-4xl font-medium mb-12">From context to action.</h3>
            
            <p className="font-mono text-sm tracking-widest text-muted/80 mb-8">
              Now let's see what that intelligence can actually do.
            </p>
            <ArrowDown className="w-5 h-5 text-signal animate-bounce" />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
