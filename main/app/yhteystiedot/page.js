import React from 'react';
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function ContactPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Yhteystiedot" />

            <section className="relative bg-no-repeat bg-center h-screen" style={{ 
                backgroundImage: "url('/img/banners/contact-hero.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: '50% 70%'
            }}>
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
                        {/* <p>
                            <strong>Puhelin:</strong> <a href="tel:+358401234567" className="text-blue-400 hover:text-blue-500">+358 40 123 4567</a>
                        </p> */}
                        <p>
                            <strong>Sähköposti:</strong> <a href="mailto:katjalankinen75@gmail.com" className="text-blue-400 hover:text-blue-500">katjalankinen75@gmail.com</a>
                        </p>
                        <p>
                            <strong>Paikkakunta:</strong> Kennel Haikuron, Kangasala, Suomi
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
