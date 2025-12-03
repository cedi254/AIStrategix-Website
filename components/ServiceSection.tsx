import React from 'react';
import { motion } from 'framer-motion';
import { Server, Workflow, Shield, Bot, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Workflow Automation",
    description: "Wir transformieren manuelle Prozesse in vollautomatische n8n Workflows. Von CRM-Updates bis zur Rechnungserstellung."
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Managed Hosting",
    description: "Hochperformantes n8n Cloud Hosting. Wir kümmern uns um Updates, Sicherheit und Uptime."
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Agenten",
    description: "Integration von LLMs (Gemini, GPT-4) in Ihre Geschäftsprozesse für intelligenten Kundensupport und Datenanalyse."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security First",
    description: "Sie behalten Ihre API-Keys. Wir bauen die Architektur, die Credentials liegen sicher im n8n Credential Manager."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Datenintegration",
    description: "Verbindung beliebiger APIs. SQL, NoSQL, REST, GraphQL - wir bringen Ihre Datensilos zusammen."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Audit",
    description: "Analyse und Optimierung bestehender Automatisierungen für maximale Geschwindigkeit und Kosteneffizienz."
  }
];

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-n8n-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Unsere <span className="text-n8n-orange">Expertise</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Maßgeschneiderte Lösungen für Unternehmen, die skalieren wollen.
            Kein Baukasten, sondern präzises Engineering aus Zürich.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-n8n-card border border-n8n-border hover:border-n8n-red/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-n8n-dark border border-n8n-border flex items-center justify-center text-n8n-orange mb-6 group-hover:bg-n8n-red group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;