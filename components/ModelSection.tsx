import React from 'react';
import { motion } from 'framer-motion';
import { Key, Lock, Cloud } from 'lucide-react';

const ModelSection: React.FC = () => {
  return (
    <section id="model" className="py-32 bg-n8n-dark relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparentes <span className="text-white">Modell</span></h2>
          <p className="text-xl text-gray-400">Maximale Sicherheit, keine versteckten Markup-Kosten.</p>
        </div>

        <div className="bg-gradient-to-b from-n8n-card to-black border border-n8n-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-n8n-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-n8n-dark border border-n8n-border rounded-full flex items-center justify-center text-white">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-n8n-orange">Wir hosten</h3>
              <p className="text-sm text-gray-400">Wir betreiben dedizierte n8n-Instanzen. 99.9% Uptime, n8n Cloud Hosting, tägliche Backups.</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="h-[1px] w-full bg-n8n-border"></div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-n8n-dark border border-n8n-border rounded-full flex items-center justify-center text-white">
                <Key className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-n8n-red">Sie zahlen API</h3>
              <p className="text-sm text-gray-400">Sie hinterlegen Ihre eigenen API-Keys (OpenAI, Anthropic, etc.). Volle Kostenkontrolle, keine Marge auf Token.</p>
            </div>

          </div>

          <div className="mt-12 pt-12 border-t border-n8n-border text-center">
            <p className="text-2xl font-bold text-white mb-2">Starten Sie ab <span className="text-n8n-orange">CHF 499</span> / Monat</p>
            <p className="text-sm text-gray-500">Inklusive Hosting, Wartung & 5h Entwicklungszeit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;