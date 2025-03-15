import React from 'react';
import './Zeiten.css';

function Zeiten() {
    return (
        <section id="oeffnungszeiten" className="zeiten p-8"> {/* id hinzugefügt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="zeiten-box-zeiten">
                    <div className="border-4 border-pink-500 rounded-lg">
                        <div className="border-2 border-white m-[-5px] rounded-lg">
                            <div className="p-4">
                                <img src="/img/front.jpg" alt="Öffnungszeiten" className="w-full h-32 object-cover rounded mb-2" />
                                <h3 className="text-lg font-semibold mb-1">Öffnungszeiten</h3>
                                <h4 className="text-gray-600 text-sm">Montag-Donnerstag 08:00 - 00:00</h4>
                                <h4 className="text-gray-600 text-sm">Freitag 08:00 - 03:00</h4>
                                <h4 className="text-gray-600 text-sm">Samstag 08:00 - 00:00</h4>
                                <h4 className="text-gray-600 text-sm">Sonntag 10:00 - 20:00</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zeiten-box-zeiten">
                    <div className="border-4 border-pink-500 rounded-lg">
                        <div className="border-2 border-white m-[-5px] rounded-lg">
                            <div className="p-4">
                                <img src="/img/Getränke2.jpg" alt="Lieferzeiten" className="w-full h-32 object-cover rounded mb-2" />
                                <h3 className="text-lg font-semibold mb-1">Lieferzeiten</h3>
                                <h4 className="text-gray-600 text-sm">Freitag - Samstag 21:00 - 03:00 </h4>
                                <h4 className="text-gray-600 text-sm">Sonntags 13:00 - 20:00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Zeiten;