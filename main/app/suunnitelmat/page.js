import React from 'react';
import Link from 'next/link';
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function SuunnitelmatPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Suunnitelmat" />
            
            <section className="py-16 px-8 md:px-16 lg:px-32">
                <h2 className="text-center text-3xl font-bold mb-12">Tulevat Suunnitelmat</h2>
                
                <div className="space-y-10">
                    {/* 2025 Pentue Suunnitelma */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
                        <h3 className="text-2xl font-semibold mb-6">Pentuesuunnitelma 2025</h3>
                        <div className="space-y-4">
                            <p className="text-gray-300">
                                Suunnittelemme seuraavaa pentuetta vuodelle 2025. 
                                Yhdistelmä on huolellisesti suunniteltu terveysnäkökohdat ja 
                                luonneominaisuudet huomioiden.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <p className="font-semibold">Suunniteltu emä:</p>
                                    <p className="text-gray-300">Laggan Haiku</p>
                                    <ul className="list-disc list-inside text-gray-300 pl-4">
                                        <li>Terveystulokset: Erinomaiset</li>
                                        <li>Näyttelytulokset: FI MVA</li>
                                    </ul>
                                </div>
                                {/* <div className="space-y-2">
                                    <p className="font-semibold">Suunniteltu isä:</p>
                                    <p className="text-gray-300">[Isän nimi]</p>
                                    <ul className="list-disc list-inside text-gray-300 pl-4">
                                        <li>Terveystulokset: Erinomaiset</li>
                                        <li>Näyttelytulokset: FI MVA</li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Jalostustavoitteet */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
                        <h3 className="text-2xl font-semibold mb-6">Jalostustavoitteet</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Terveys: Painotamme terveystutkimuksia ja geneettistä monimuotoisuutta</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Luonne: Tavoitteena tasapainoinen ja sosiaalinen luonne</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Rakenne: Rotumääritelmän mukainen terve rakenne</span>
                            </li>
                        </ul>
                    </div>

                    {/* Yhteydenotto */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
                        <h3 className="text-2xl font-semibold mb-6">Kiinnostuitko?</h3>
                        <div className="text-center">
                            <Link href="/yhteystiedot">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                    Ota yhteyttä
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
