import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Automatisierung',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      // Call the Netlify Function
      const ENDPOINT = '/.netlify/functions/submit-contact';

      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          projectType: 'Automatisierung',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
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

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-n8n-card p-8 rounded-3xl border border-n8n-border"
            onSubmit={handleSubmit}
          >
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="text-n8n-orange text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Nachricht gesendet!</h3>
                <p className="text-gray-400">Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-6 text-n8n-orange hover:text-white transition-colors"
                >
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-gray-500 uppercase">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-n8n-dark border border-n8n-border rounded p-3 text-white focus:border-n8n-orange focus:outline-none transition-colors"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-gray-500 uppercase">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-n8n-dark border border-n8n-border rounded p-3 text-white focus:border-n8n-orange focus:outline-none transition-colors"
                      placeholder="max@firma.ch"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-500 uppercase">Projekttyp</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-n8n-dark border border-n8n-border rounded p-3 text-white focus:border-n8n-orange focus:outline-none transition-colors"
                  >
                    <option>Automatisierung</option>
                    <option>AI Integration</option>
                    <option>Hosting & Wartung</option>
                    <option>Consulting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-500 uppercase">Nachricht</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-n8n-dark border border-n8n-border rounded p-3 text-white focus:border-n8n-orange focus:outline-none transition-colors"
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben..."
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="text-red-500 text-sm">
                    Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt eine Email.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-n8n-orange to-n8n-red text-white font-bold rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'loading' ? 'Wird gesendet...' : 'Anfrage senden'}
                </button>
              </>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;