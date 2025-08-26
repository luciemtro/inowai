import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "INOWAI — Property Partners",
  description:
    "Plateforme immobilière boostée à l’IA : trouvez, louez ou achetez des biens au Luxembourg avec INOWAI. Recherche assistée, tendances et conseils d’experts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body>
        <Nav />
        <div className="min-h-screen ml-[320px] bg-background text-foreground antialiased">
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
