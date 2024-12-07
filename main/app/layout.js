import "./globals.css";

export const metadata = {
  title: "Haikuron",
  description: "Kennel Haikuron",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body>
        {children}
      </body>
    </html>
  );
}
