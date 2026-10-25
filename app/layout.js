
import "./globals.css";

export const metadata = {
  title: "SmartKit AI — Outils IA et formations",
  description:
    "Découvrez des outils d'intelligence artificielle et des formations pratiques avec SmartKit AI.",
  applicationName: "SmartKit AI"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
