import "./globals.css";

export const metadata = {
  title: "Haikuron",
  description: "Kennel Haikuron",
  icons: {
    icon: "/logo.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
