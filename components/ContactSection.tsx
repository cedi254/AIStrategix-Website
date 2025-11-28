import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    'project-type': 'Automatisierung',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submission failed');
      }

      setStatus('success');
      setFormData({ name: '', email: '', 'project-type': 'Automatisierung', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
              Bereit für die <br />
              <span className="text-n8n-red">Zukunft?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Lassen Sie uns besprechen, wie wir Ihre Prozesse automatisieren können.
              Erstes Beratungsgespräch ist kostenlos.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="text-n8n-orange" />
                <span>hello@aistrategix.ch</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="text-n8n-orange" />
                <span>+41 44 123 45 67</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="text-n8n-orange" />
                <span>Zürich, Schweiz</span>
              </div>
            </div>
          </div>

          <div className="relative bg-n8n-card rounded-3xl border border-n8n-border overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                    className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-bold mb-2"
                  >
                    Nachricht gesendet!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400"
                  >
                    Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    x: 100,
                    y: -100,
                    scale: 0.8,
                    transition: { duration: 0.5 }
                  }}
                  viewport={{ once: true }}
                  className="space-y-6 p-8"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-gray-500 uppercase">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-n8n-dark border border-n8n-border rounded p-3 text-white focus:border-n8n-orange focus:outline-none transition-colors"
                        placeholder="Max Mustermann"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-gray-500 uppercase">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-n8n-dark border border-n8n-border rounded p-3 text-white focus:border-n8n-orange focus:outline-none transition-colors"
                        placeholder="max@firma.ch"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-gray-500 uppercase">Projekttyp</label>
                    <select
                      name="project-type"
                      value={formData['project-type']}
                      onChange={handleChange}
                      className="w-full bg-n8n-dark border border-n8n-border rounded p-3 text-white focus:border-n8n-orange focus:outline-none transition-colors"
                    >
                      <option value="Automatisierung">Automatisierung</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="Hosting & Wartung">Hosting & Wartung</option>
                      <option value="Consulting">Consulting</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-gray-500 uppercase">Nachricht</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-n8n-dark border border-n8n-border rounded p-3 text-white focus:border-n8n-orange focus:outline-none transition-colors"
                      placeholder="Beschreiben Sie kurz Ihr Vorhaben..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-gradient-to-r from-n8n-orange to-n8n-red text-white font-bold rounded hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 group"
                  >
                    {status === 'submitting' ? (
                      'Wird gesendet...'
                    ) : (
                      <>
                        <span>Anfrage senden</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-500 text-center">Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>

            {/* Paper Plane Animation Overlay */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  animate={{
                    x: 500,
                    y: -500,
                    opacity: [0, 1, 0],
                    scale: 1.5,
                    rotate: 45
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 pointer-events-none text-n8n-orange z-50"
                >
                  <Send className="w-24 h-24" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;