import React from 'react';
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function AboutPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Tietoa Kennel Haikuronista" />

            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/about-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tietoa Kennel Haikuronista</h2>
                        <p className="text-lg md:text-xl">Rakkaudella kasvatettuja koiria jo vuosien ajan.</p>
                    </div>
                </div>
            </section>

            {/* Main Information Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Meistä</h2>
                    <p className="text-lg mb-6">
                        Kennel Haikuron on omistautunut tarjoamaan parhaat mahdolliset olosuhteet koirillemme ja
                        kasvattamaan terveitä, onnellisia ja tasapainoisia karvakuonoja. Olemme ylpeitä työstämme
                        ja tavoitteenamme on löytää jokaiselle koiralle rakastava koti, jossa heistä tulee arvostettu
                        osa perhettä.
                    </p>
                    <p className="text-lg mb-6">
                        Sijaitsemme luonnonkauniissa ympäristössä, jossa koirat voivat nauttia ulkoilusta, liikunnasta
                        ja leikkimisestä turvallisessa ja valvotussa ympäristössä. Meillä on myös pitkä kokemus
                        koirien koulutuksesta ja kasvatuksesta, ja haluamme jakaa tietomme ja rakkautemme
                        näihin uskomattomiin eläimiin kaikkien kanssa.
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="bg-gray-800 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">Historia</h2>
                    <p className="text-lg mb-6">
                        Kennel Haikuronin tarina alkoi pienestä unelmasta. Perustajamme aloittivat toimintansa
                        rakkaudesta eläimiin ja erityisesti koiriin. Vuosien varrella kennel on kasvanut, mutta
                        arvomme ovat säilyneet samoina: vastuullisuus, rakkaus ja omistautuminen.
                    </p>
                    <p className="text-lg mb-6">
                        Olemme kasvattaneet useita palkittuja koiria ja luoneet kestäviä ystävyyssuhteita asiakkaidemme
                        kanssa. Jokainen koira on meille erityinen, ja heidän hyvinvointinsa on aina etusijalla.
                    </p>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Arvomme</h2>
                    <ul className="space-y-4 text-lg">
                        <li>
                            <strong>Rakkaus ja huolenpito:</strong> Jokainen koira saa yksilöllistä huomiota ja rakkautta.
                        </li>
                        <li>
                            <strong>Vastuullisuus:</strong> Teemme kaikkemme varmistaaksemme koirien terveyden ja hyvinvoinnin.
                        </li>
                        <li>
                            <strong>Yhteisöllisyys:</strong> Rakennamme vahvoja suhteita asiakkaidemme ja muiden koiranomistajien kanssa.
                        </li>
                        <li>
                            <strong>Koulutus:</strong> Tarjoamme tukea ja neuvoja koiranomistajille parhaan mahdollisen
                            suhteen luomiseksi lemmikkinsä kanssa.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-800 py-16 px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Kiinnostuitko?</h2>
                    <p className="text-lg mb-8">
                        Jos haluat tietää lisää toiminnastamme tai olet kiinnostunut koiristamme, ota yhteyttä!
                        Olemme täällä auttamassa.
                    </p>
                    <a
                        href="/yhteystiedot"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    >
                        Ota Yhteyttä
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
