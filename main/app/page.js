import React from 'react';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import dogs from './data/dogs'; // Import the dogs data
import Link from 'next/link';

export default function MainPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Kennel Haikuron" />

            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${"/img/banner.jpg" })` }}
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
                    {/* Render dog cards */}
                    {dogs.map(dog => (
                        <div key={dog.id} className="bg-gray-800 p-5 rounded-lg shadow-lg">
                            <Link href={`/tietoa/${dog.shortname}`}>
                                <img 
                                    src={dog.image} 
                                    alt={dog.name} 
                                    className="rounded-lg mb-4 w-full h-72 object-cover" 
                                />
                                <p>{dog.imagetext}</p>
                                <h3 className="text-xl font-semibold mb-2">{dog.name}</h3>
                                <p>{dog.description}</p>
                            </Link>                        
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}