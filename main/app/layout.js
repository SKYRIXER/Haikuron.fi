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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.haikuron.fi",
              "logo": "https://www.haikuron.fi/logo.svg"
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
