import React from 'react';
import { motion } from 'framer-motion';

const AGBPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-n8n-orange to-n8n-red">
                        Allgemeine Geschäftsbedingungen (AGB)
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Geltungsbereich</h2>
                            <p>
                                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen AIStrategix (nachfolgend "Anbieter") und dem Kunden (nachfolgend "Kunde"), die über die Website oder durch individuelle Angebote geschlossen werden.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Leistungen</h2>
                            <p>
                                Der Anbieter erbringt Beratungs- und Entwicklungsdienstleistungen im Bereich KI-Automatisierung und n8n-Workflows. Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Vertragslaufzeit und Kündigung</h2>
                            <p>
                                Soweit nicht anders vereinbart, werden Verträge auf unbestimmte Zeit geschlossen.
                            </p>
                            <div className="bg-n8n-card border border-n8n-border p-6 rounded-lg mt-4">
                                <h3 className="text-lg font-bold text-n8n-orange mb-2">Kündigungsfrist</h3>
                                <p>
                                    Es gilt eine Kündigungsfrist von <strong>einem Monat</strong> zum Monatsende. Die Kündigung bedarf der Textform (z.B. E-Mail).
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Vergütung und Zahlungsbedingungen</h2>
                            <p>
                                Die Vergütung richtet sich nach dem individuellen Angebot. Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Haftung</h2>
                            <p>
                                Der Anbieter haftet für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Schlussbestimmungen</h2>
                            <p>
                                Es gilt das Recht der Schweiz. Gerichtsstand ist Zürich, soweit gesetzlich zulässig.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AGBPage;
