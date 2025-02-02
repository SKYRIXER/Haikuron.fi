import Head from 'next/head';
// dancing script kauno fontti pitäs olla, ei o
export default function Header() {
    return (
        <>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"/>
        </Head>
        <header style={{ backgroundColor: 'rgb(49, 165, 136)' }} className="py-5 shadow-lg">
            <a href="/"><h1 className="text-white font-bold text-center text-3xl mb-3" style={{ fontFamily: 'Dancing Script, serif' }}>Kennel Haikuron</h1></a>
            <nav className="flex justify-center items-center text-lg">
                <ul className="flex flex-row space-x-6">
                    <li><a href="/" className="hover:underline">Etusivu</a></li>
                    <li><a href="/tietoa" className="hover:underline">Tietoa</a></li>
                    <li><a href="/yhteystiedot" className="hover:underline">Yhteystiedot</a></li>
                    <li><a href="/pentueet" className="hover:underline">Pentueet</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}