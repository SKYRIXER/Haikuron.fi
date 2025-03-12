"use client";
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Header from "../components/header.js";
import Footer from "../components/footer.js";

const galleryImages = [
    './img/gallery/1.jpg',
    './img/gallery/2.jpg',
    './img/gallery/3.jpg',
    './img/gallery/4.jpg',
    './img/gallery/5.jpg',
    './img/gallery/6.jpg',
    './img/gallery/7.jpg',
    './img/gallery/8.jpg',
    './img/gallery/9.jpg',
    './img/gallery/10.jpg',
    './img/gallery/11.jpg',
    './img/gallery/12.jpg',
    './img/gallery/13.jpg',
    './img/gallery/14.jpg',
    './img/gallery/15.jpg',
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
                            className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage(index)}
                        >
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

            {/* Lightbox */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
                    <button 
                        className="absolute top-4 right-4 text-white text-2xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        ✕
                    </button>
                    <button 
                        className="absolute left-4 text-white text-4xl md:text-6xl lg:text-7xl"
                        onClick={handlePrev}
                    >
                        ‹
                    </button>
                    <div {...swipeHandlers}>
                        <img
                            src={galleryImages[selectedImage]}
                            alt={`Gallery image ${selectedImage + 1}`}
                            className="max-h-[90vh] max-w-[90vw] object-contain"
                        />
                    </div>
                    <button 
                        className="absolute right-4 text-white text-4xl md:text-6xl lg:text-7xl"
                        onClick={handleNext}
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}
