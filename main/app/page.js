import React from 'react';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
// import heroImage from './img/hero-image.jpg'; // Replace with your actual hero image
import totoro1 from './img/totoro-ulko.jpg'; // Local image imports for dynamic data
// import lumi from './img/lumi.jpg';
// import halla from './img/halla.jpg';

export default function MainPage() {
    // Dynamic data for the dogs
    const dogs = [
        { 
            id: 1, 
            name: "Laggan Noriaki", 
            description: "Kutsumanimeltään Nori, on meidän vanhin koira ja hän on jo 8 vuotta vanha.", 
            image: totoro1 
        },
        { 
            id: 2, 
            name: "Laggan Haiku", 
            description: "Kutsumanimeltään Haiku, on meidän toisiksi vanhin koira joka on jo 6 vuotta vanha.", 
            image: totoro1 
        },
        { 
            id: 3, 
            name: "Haikuron Totoro", 
            description: "Kutsumanimeltään Totoro, on meidän nuorin koira joka on 2 vuotta vanha ja on kennelimme ensimmäisestä pentueesta.", 
            image: totoro1 
        },
    ];

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Kennel Haikuron" />

            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${totoro1})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tervetuloa Haikuron kenneliin!</h2>
                        <p className="text-lg md:text-xl">Kasvatamme ja rakastamme parhaita karvaisia ystäviämme.</p>
                    </div>
                </div>
            </section>

            {/* Dog Features Section */}
            <section className="py-16 px-4">
                <h2 className="text-center text-3xl font-bold mb-12">Tutustu koiriimme</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Render dog cards dynamically */}
                    {dogs.map(dog => (
                        <div key={dog.id} className="bg-gray-800 p-5 rounded-lg shadow-lg">
                            <img 
                                src={dog.image} 
                                alt={dog.name} 
                                className="rounded-lg mb-4 w-full h-48 object-cover" 
                            />
                            <h3 className="text-xl font-semibold mb-2">{dog.name}</h3>
                            <p>{dog.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
