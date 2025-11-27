import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/Logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    setIsMobileOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-n8n-dark/90 backdrop-blur-lg border-b border-n8n-border' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div onClick={handleLogoClick} className="flex items-center gap-2 font-bold text-2xl tracking-tighter cursor-pointer">
          <img src={logoImg} alt="AIStrategix Logo" className="w-9 h-9 object-contain" />
          <span>AI<span className="text-n8n-red">Strategix</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm text-gray-300">
          <a href="#services" onClick={(e) => handleNavigation(e, 'services')} className="hover:text-n8n-orange transition-colors">Services</a>
          <a href="#process" onClick={(e) => handleNavigation(e, 'process')} className="hover:text-n8n-orange transition-colors">Prozess</a>
          <a href="#model" onClick={(e) => handleNavigation(e, 'model')} className="hover:text-n8n-orange transition-colors">Preismodell</a>
          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, 'contact')}
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
            <a href="#services" onClick={(e) => handleNavigation(e, 'services')}>Services</a>
            <a href="#process" onClick={(e) => handleNavigation(e, 'process')}>Prozess</a>
            <a href="#model" onClick={(e) => handleNavigation(e, 'model')}>Preismodell</a>
            <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')} className="text-n8n-orange">Gespräch buchen</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;