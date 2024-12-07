import React from 'react';
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function ContactPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Yhteystiedot" />

            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/contact-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ota Yhteyttä</h2>
                        <p className="text-lg md:text-xl">Me Kennel Haikuronilla olemme täällä auttamassa.</p>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Yhteystiedot</h2>
                    <div className="text-lg space-y-6">
                        <p>
                            <strong>Puhelin:</strong> <a href="tel:+358401234567" className="text-blue-400 hover:text-blue-500">+358 40 123 4567</a>
                        </p>
                        <p>
                            <strong>Sähköposti:</strong> <a href="mailto:info@haikuron.fi" className="text-blue-400 hover:text-blue-500">info@haikuron.fi</a>
                        </p>
                        <p>
                            <strong>Osoite:</strong> Kennel Haikuron, Haikurotie 12, 12345 Helsinki, Suomi
                        </p>
                        <p>
                            <strong>Aukioloajat:</strong> Ma-Pe 10:00 - 18:00, La-Su: Suljettu
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="bg-gray-800 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">Lähetä Viesti</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg mb-2">Nimi</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white"
                                placeholder="Kirjoita nimesi"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg mb-2">Sähköposti</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white"
                                placeholder="Kirjoita sähköpostiosoitteesi"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg mb-2">Viesti</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white"
                                placeholder="Kirjoita viestisi"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                            >
                                Lähetä
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}
