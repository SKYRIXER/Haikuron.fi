export default function Header() {
    return (
        <header>
            <nav className="flex justify-center items-center text-xl text-white">
                <ul className="flex flex-row space-x-4">
                    <li><a href="/">Etusivu</a></li>
                    <li><a href="/tietoa">Tietoa</a></li>
                    <li><a href="/yhteystiedot">Yhteystiedot</a></li>
                </ul>
            </nav>
        </header>
    );
}