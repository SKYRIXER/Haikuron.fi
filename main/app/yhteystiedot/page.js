import React from 'react';
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function ContactPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Yhteystiedot" />

            <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/contact-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ota Yhteyttä</h2>
                        <p className="text-lg md:text-xl">Me Kennel Haikuronilla olemme täällä auttamassa.</p>
                    </div>
                </div>
            </section>

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

            <Footer />
        </div>
    );
}
