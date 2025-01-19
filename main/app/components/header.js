export default function Header() {
    return (
        <header className="bg-gray-800 py-5 shadow-lg">
            <a href="/"><h1 className="text-white font-bold text-center text-3xl mb-3">Kennel Haikuron</h1></a>
            <nav className="flex justify-center items-center text-lg">
                <ul className="flex flex-row space-x-6">
                    <li><a href="/" className="hover:underline">Etusivu</a></li>
                    <li><a href="/tietoa" className="hover:underline">Tietoa</a></li>
                    <li><a href="/yhteystiedot" className="hover:underline">Yhteystiedot</a></li>
                </ul>
            </nav>
        </header>
    );
}