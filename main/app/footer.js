export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col items-center">
            <p>©{currentYear} Kennel Haikuron</p>
        </footer>
    );
}
