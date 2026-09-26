"use client";
import React, { useState } from 'react';
import Image from '../components/optimized-image';
import { useSwipeable } from 'react-swipeable';
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
    '/img/gallery/8.jpg',
    '/img/gallery/9.jpg',
    '/img/gallery/10.jpg',
    '/img/gallery/11.jpg',
    '/img/gallery/12.jpg',
    '/img/gallery/13.jpg',
    '/img/gallery/14.jpg',
    '/img/gallery/15.jpg',
    '/img/gallery/16.jpg',
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleNext = () => {
        setSelectedImage((prev) => (prev + 1) % galleryImages.length);
    };

    const handlePrev = () => {
        setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: false
    });

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Galleria" />
            <section className="py-16 px-8 md:px-16 lg:px-32">
                <h2 className="text-center text-3xl font-bold mb-12">Kuvagalleria</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                            onClick={() => setSelectedImage(index)}
                        >
                            <Image
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                width={1200}
                                height={1200}
                                className="w-full h-full object-cover"
                                sizes="(min-width: 1024px) calc((100vw - 304px) / 3), (min-width: 768px) calc((100vw - 152px) / 2), calc(100vw - 64px)"
                            />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />

            {/* Lightbox */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
                    <button
                        className="absolute top-4 right-4 text-white text-2xl"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Sulje kuva"
                    >
                        ✕
                    </button>
                    <button
                        className="absolute left-4 text-white text-4xl md:text-6xl lg:text-7xl"
                        onClick={handlePrev}
                        aria-label="Edellinen kuva"
                    >
                        ‹
                    </button>
                    <div {...swipeHandlers}>
                        <Image
                            src={galleryImages[selectedImage]}
                            alt={`Gallery image ${selectedImage + 1}`}
                            width={1600}
                            height={1200}
                            className="max-h-[90vh] max-w-[90vw] object-contain"
                            sizes="90vw"
                            loading="eager"
                        />
                    </div>
                    <button
                        className="absolute right-4 text-white text-4xl md:text-6xl lg:text-7xl"
                        onClick={handleNext}
                        aria-label="Seuraava kuva"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}
