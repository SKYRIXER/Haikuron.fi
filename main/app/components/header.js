"use client";
import { useState } from 'react';
import Head from 'next/head';
// dancing script kauno fontti pitäs olla, ei o
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
            </Head>
            <header style={{ backgroundColor: 'rgb(49, 165, 136)' }} className="py-5 shadow-lg">
                <div className="container mx-auto flex justify-between items-center px-4 md:justify-center">
                    <button onClick={toggleMenu} className="text-white md:hidden mr-auto">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <a href="/"><h1 className="text-white font-bold text-3xl" style={{ fontFamily: 'Dancing Script, serif' }}>Kennel Haikuron</h1></a>
                    <nav className="hidden md:flex space-x-6 ml-auto">
                        <a href="/" className="hover:underline">Etusivu</a>
                        <a href="/tietoa" className="hover:underline">Tietoa</a>
                        <a href="/yhteystiedot" className="hover:underline">Yhteystiedot</a>
                        <a href="/pentueet" className="hover:underline">Pentueet</a>
                    </nav>
                </div>
            </header>
            {isOpen && <div className="fixed inset-0 z-40" onClick={closeMenu}></div>}
            <div className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="w-64 bg-gray-800 h-full p-4" onClick={(e) => e.stopPropagation()}>
                    <button onClick={toggleMenu} className="text-white mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <nav className="flex flex-col space-y-4">
                        <a href="/" className="text-white hover:underline">Etusivu</a>
                        <a href="/tietoa" className="text-white hover:underline">Tietoa</a>
                        <a href="/yhteystiedot" className="text-white hover:underline">Yhteystiedot</a>
                        <a href="/pentueet" className="text-white hover:underline">Pentueet</a>
                    </nav>
                </div>
            </div>
        </>
    );
}