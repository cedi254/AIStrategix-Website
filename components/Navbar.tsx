import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-n8n-dark/90 backdrop-blur-lg border-b border-n8n-border' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-n8n-orange to-n8n-red rounded-md flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span>n8n<span className="text-n8n-red">Flow</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm text-gray-300">
          <a href="#services" className="hover:text-n8n-orange transition-colors">Services</a>
          <a href="#process" className="hover:text-n8n-orange transition-colors">Prozess</a>
          <a href="#model" className="hover:text-n8n-orange transition-colors">Preismodell</a>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-white text-black font-bold rounded hover:bg-n8n-orange hover:text-white transition-all duration-300"
          >
            Gespräch buchen
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-n8n-dark border-b border-n8n-border overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4 font-mono text-sm">
            <a href="#services" onClick={() => setIsMobileOpen(false)}>Services</a>
            <a href="#process" onClick={() => setIsMobileOpen(false)}>Prozess</a>
            <a href="#model" onClick={() => setIsMobileOpen(false)}>Preismodell</a>
            <a href="#contact" onClick={() => setIsMobileOpen(false)} className="text-n8n-orange">Gespräch buchen</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;