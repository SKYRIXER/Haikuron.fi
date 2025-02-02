export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'rgb(49, 165, 136)' }} className="py-6 text-center">
            <p className="text-sm text-white text-bold">© {new Date().getFullYear()} Kennel Haikuron. Kaikki oikeudet pidätetään.</p>
        </footer>
    );
}
