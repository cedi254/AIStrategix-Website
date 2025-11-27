import React from 'react';
import { motion } from 'framer-motion';

const DatenschutzPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-n8n-orange to-n8n-red">
                        Datenschutzerklärung
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                            <h3 className="text-xl font-bold text-white mb-2">Allgemeine Hinweise</h3>
                            <p>
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Hosting</h2>
                            <p>
                                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                            </p>
                            <h3 className="text-xl font-bold text-white mt-4 mb-2">Externes Hosting</h3>
                            <p>
                                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                            <h3 className="text-xl font-bold text-white mb-2">Datenschutz</h3>
                            <p>
                                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (Schweizerisches Datenschutzgesetz, DSG) sowie dieser Datenschutzerklärung.
                            </p>
                            <h3 className="text-xl font-bold text-white mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                            <p>
                                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                                Cedric Fischer<br />
                                Wehntalerstrasse 79<br />
                                8057 Zürich<br />
                                Schweiz<br /><br />
                                E-Mail: cedric@admyre.ch
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
                            <h3 className="text-xl font-bold text-white mb-2">Kontaktformular</h3>
                            <p>
                                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DatenschutzPage;
