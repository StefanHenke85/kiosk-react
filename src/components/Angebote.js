import React from 'react';
import './Angebote.css';

function Angebote() {
    return (
        <section className="angebote p-8">
            <h2 className="text-4xl font-semibold text-center mb-8">Unsere aktuellen Angebote</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* gap reduziert */}
                <div className="angebot-box-angebot"> {/* angebot-box-angebot direkt auf dem äußeren div */}
                    <div className="border-4 border-pink-500 rounded-lg">
                        <div className="border-2 border-white m-[-5px] rounded-lg">
                            <div className="p-4"> {/* p reduziert */}
                                <img src="/img/Snacks.jpg" alt="Snack Angebot" className="w-full h-32 object-cover rounded mb-2" /> {/* h reduziert, mb reduziert */}
                                <h3 className="text-lg font-semibold mb-1">Snacks</h3> {/* Textgrößen reduziert */}
                                <h4 className="text-gray-600 text-sm">Naschereien für Groß und Klein.</h4>
                                <h4 className="text-gray-600 text-sm">Lust auf was Süßes oder lieber Herzhaft hier bekommst du es.</h4> {/* Textgrößen reduziert */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="angebot-box-angebot">
                    <div className="border-4 border-pink-500 rounded-lg">
                        <div className="border-2 border-white m-[-5px] rounded-lg">
                            <div className="p-4">
                                <img src="/img/Getränke.jpg" alt="Getränke Angebot" className="w-full h-32 object-cover rounded mb-2" />
                                <h3 className="text-lg font-semibold mb-1">Getränke</h3>
                                <h4 className="text-gray-600 text-sm">Erfrischende Getränke für jede Gelegenheit.</h4>
                                <h4 className="text-gray-600 text-sm">Auch den beliebten Coffee to go! bekommst du bei uns.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="angebot-box-angebot">
                    <div className="border-4 border-pink-500 rounded-lg">
                        <div className="border-2 border-white m-[-5px] rounded-lg">
                            <div className="p-4">
                                <img src="/img/Tabak.jpg" alt="Süßigkeiten Angebot" className="w-full h-32 object-cover rounded mb-2" />
                                <h3 className="text-lg font-semibold mb-1">Tabakwaren</h3>
                                <h4 className="text-gray-600 text-sm">Zigaretten Tabak Vapes E-Zigaretten und vieles mehr.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="angebot-box-angebot">
                    <div className="border-4 border-pink-500 rounded-lg">
                        <div className="border-2 border-white m-[-5px] rounded-lg">
                            <div className="p-4">
                                <img src="/img/Tabak.jpg" alt="Süßigkeiten Angebot" className="w-full h-32 object-cover rounded mb-2" />
                                <h3 className="text-lg font-semibold mb-1">Drucken Scannen und Kopieren </h3>
                                <h4 className="text-gray-600 text-sm">Bei uns ist es möglich zu Drucken Scannen oder Kopieren in Farbe sowie auch Schwarz-Weiß.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Angebote;