import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import ModelSection from './components/ModelSection';
import WorkflowSection from './components/WorkflowSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { NodeBackground } from './components/NodeBackground';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-n8n-dark text-white selection:bg-n8n-orange selection:text-black font-sans">
      {/* Global Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
         <NodeBackground mousePosition={mousePosition} />
      </div>

      {/* Cursor Glow */}
      <div 
        className="fixed w-[500px] h-[500px] bg-n8n-red/10 rounded-full blur-[100px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-transform duration-100 ease-out"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex flex-col gap-0">
          <HeroSection />
          <ServiceSection />
          <WorkflowSection />
          <ModelSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;