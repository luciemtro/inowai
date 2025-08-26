// app/layout.tsx
import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inowai",
  description: "Ventes immobilier",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
