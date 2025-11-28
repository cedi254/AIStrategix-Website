import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import ModelSection from './components/ModelSection';
import WorkflowSection from './components/WorkflowSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AGBPage from './components/AGBPage';
import ImpressumPage from './components/ImpressumPage';
import DatenschutzPage from './components/DatenschutzPage';
import { NodeBackground } from './components/NodeBackground';

const Home: React.FC = () => (
  <main className="flex-grow flex flex-col gap-0">
    <HeroSection />
    <ServiceSection />
    <WorkflowSection />
    <ModelSection />
    <ContactSection />
  </main>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import CustomCursor from './components/CustomCursor';

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
    <Router>
      <CustomCursor />
      <ScrollToTop />
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

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agb" element={<AGBPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;