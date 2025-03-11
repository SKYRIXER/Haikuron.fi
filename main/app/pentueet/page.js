import React from 'react';
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import litters from "../data/litters";

export default function PentueetPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Pentueet" />
            <section className="py-16 px-8 md:px-16 lg:px-32">
                <h2 className="text-center text-3xl font-bold mb-12">Pentue Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
                    {litters.map(litter => (
                        <div key={litter.id} className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start hover:bg-gray-700 transition-colors duration-300">
                            <img 
                                src={litter.image} 
                                alt={litter.name} 
                                className="rounded-lg mb-4 md:mb-0 md:mr-8 w-full md:w-1/2 h-96 object-cover hover:opacity-90 transition-opacity duration-300" 
                            />
                            <div className="text-left space-y-3">
                                <h3 className="text-2xl font-semibold mb-4">{litter.name}</h3>
                                <p><strong>Syntymäaika:</strong> {litter.birth}</p>
                                <p><strong>Emä:</strong> {litter.mother}</p>
                                <p><strong>Isä:</strong> {litter.father}</p>
                                <p><strong>Pennut:</strong> {litter.puppies.map(puppy => puppy.name).join(', ')}</p>
                                <a
                                    href={litter.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300 border-b border-blue-400 hover:border-blue-300"
                                >
                                    Katso sukutaulu →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}