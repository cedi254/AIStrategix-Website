import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-n8n-border text-center text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 n8nFlow Consulting. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Impressum</a>
          <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-white transition-colors">AGB</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;