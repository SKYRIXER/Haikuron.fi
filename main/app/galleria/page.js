import React from 'react';
import Header from "../components/header.js";
import Footer from "../components/footer.js";

const galleryImages = [
    '/img/gallery/1.jpg',
    '/img/gallery/2.jpg',
    '/img/gallery/3.jpg',
    '/img/gallery/4.jpg',
    '/img/gallery/5.jpg',
    '/img/gallery/6.jpg',
    '/img/gallery/7.jpg',
];

export default function GalleryPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Galleria" />
            <section className="py-16 px-8 md:px-16 lg:px-32">
                <h2 className="text-center text-3xl font-bold mb-12">Kuvagalleria</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity">
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
