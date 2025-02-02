import React from 'react';
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function PentueetPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Pentueet" />
            <section className="py-16 px-4">
                <h2 className="text-center text-3xl font-bold mb-12">Pentue Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Add content about the litters here */}
                    <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Pentue A</h3>
                        <p><strong>Syntymäaika:</strong> 01.01.2023</p>
                        <p><strong>Vanhemmat:</strong> Koira A & Koira B</p>
                        <p><strong>Kuvaus:</strong> Tämä pentue on erittäin energinen ja leikkisä.</p>
                    </div>
                    <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Pentue B</h3>
                        <p><strong>Syntymäaika:</strong> 15.02.2023</p>
                        <p><strong>Vanhemmat:</strong> Koira C & Koira D</p>
                        <p><strong>Kuvaus:</strong> Tämä pentue on rauhallinen ja ystävällinen.</p>
                    </div>
                    {/* Add more litter information as needed */}
                </div>
            </section>
            <Footer />
        </div>
    );
}