import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Network } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-n8n-red/10 border border-n8n-red/20 text-n8n-orange text-xs font-mono uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-n8n-red animate-pulse"></span>
              Next Gen Automation
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight"
            >
              Wir automatisieren <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-n8n-orange to-n8n-red">
                Ihren Erfolg.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Wir entwickeln komplexe KI-Workflows mit n8n. Skalierbares Hosting, 
              maßgeschneiderte Business Cases. Sie behalten die Kontrolle über Ihre Credentials, wir übernehmen die Technik.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="group relative px-8 py-4 bg-white text-black font-bold rounded text-lg overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Projekt starten <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-n8n-orange to-n8n-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300"></span>
              </a>
              
              <a href="#services" className="px-8 py-4 border border-gray-700 text-white font-bold rounded text-lg hover:border-n8n-orange hover:text-n8n-orange transition-colors">
                Use Cases ansehen
              </a>
            </motion.div>
          </div>

          {/* Right side visual representation of n8n nodes */}
          <div className="relative hidden lg:block h-[600px]">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="absolute inset-0 flex items-center justify-center"
            >
               {/* Central Node */}
               <div className="relative z-20 w-24 h-24 bg-gradient-to-br from-n8n-orange to-n8n-red rounded-2xl shadow-[0_0_50px_rgba(234,75,113,0.4)] flex items-center justify-center">
                  <Cpu className="w-10 h-10 text-white" />
               </div>

               {/* Orbiting Nodes */}
               {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 bg-n8n-card border border-n8n-border rounded-xl flex items-center justify-center z-10"
                    animate={{
                      rotate: [0, 360],
                      x: [120, 0, -120, 0],
                      y: [0, 120, 0, -120],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 2
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: -32,
                      marginTop: -32
                    }}
                  >
                    <Network className="text-gray-500 w-6 h-6" />
                  </motion.div>
               ))}

               {/* Connecting Lines (Svg Overlay) */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF8E53" stopOpacity="0" />
                      <stop offset="50%" stopColor="#FF4D4D" stopOpacity="1" />
                      <stop offset="100%" stopColor="#FF8E53" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Animated dashed lines could go here */}
               </svg>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;