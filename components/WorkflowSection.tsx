import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail, Database, CheckCircle } from 'lucide-react';

const WorkflowSection: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-black border-y border-n8n-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vom Chaos zur <span className="text-n8n-orange">Struktur</span>
          </h2>
          <p className="text-gray-400">Wie wir unstrukturierte Daten in wertvolle Insights verwandeln.</p>
        </div>

        {/* Visual Flow Diagram */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          
          {/* Step 1: Input */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-64 p-6 bg-n8n-card border border-n8n-border rounded-xl z-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg text-blue-500"><FileText /></div>
              <span className="font-mono text-sm font-bold">Input</span>
            </div>
            <p className="text-sm text-gray-400">Unstrukturierte E-Mails, PDFs oder Kundenanfragen.</p>
          </motion.div>

          {/* Arrow 1 */}
          <div className="hidden md:flex w-24 h-[2px] bg-n8n-border relative items-center justify-center">
            <motion.div 
              animate={{ x: [-10, 40], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute w-2 h-2 bg-n8n-orange rounded-full" 
            />
          </div>

          {/* Step 2: n8n Processing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-72 p-8 bg-gradient-to-br from-n8n-dark to-black border border-n8n-red rounded-2xl z-20 shadow-[0_0_30px_rgba(255,77,77,0.2)]"
          >
             <div className="flex justify-between items-center mb-6">
                <span className="text-n8n-red font-bold font-mono">n8n ENGINE</span>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </div>
             </div>
             <div className="space-y-3">
                <div className="h-2 bg-n8n-border rounded w-3/4"></div>
                <div className="h-2 bg-n8n-border rounded w-full"></div>
                <div className="h-2 bg-n8n-border rounded w-1/2"></div>
             </div>
             <div className="mt-6 flex gap-2">
                <span className="px-2 py-1 bg-n8n-border rounded text-xs font-mono text-gray-400">AI Parsing</span>
                <span className="px-2 py-1 bg-n8n-border rounded text-xs font-mono text-gray-400">Enrichment</span>
             </div>
          </motion.div>

          {/* Arrow 2 */}
          <div className="hidden md:flex w-24 h-[2px] bg-n8n-border relative items-center justify-center">
             <motion.div 
              animate={{ x: [-10, 40], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.75 }}
              className="absolute w-2 h-2 bg-n8n-orange rounded-full" 
            />
          </div>

          {/* Step 3: Output */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-64 p-6 bg-n8n-card border border-n8n-border rounded-xl z-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-500/20 rounded-lg text-green-500"><CheckCircle /></div>
              <span className="font-mono text-sm font-bold">Action</span>
            </div>
            <p className="text-sm text-gray-400">CRM Update, Slack Benachrichtigung, Automatischer Report.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;