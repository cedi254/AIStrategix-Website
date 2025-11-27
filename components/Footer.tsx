import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-n8n-border text-center text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 AIStrategix. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;