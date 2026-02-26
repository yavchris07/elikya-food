import type { Metadata } from "next";
import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const trebuchet = localFont({
//   src: '../fonts/trebuchet.woff2', // Chemin vers votre fichier de police
//   variable: '--font-trebuchet',
// })

export const metadata: Metadata = {
  title: "Elikya Foods - Transforming Africa's Food Future",
  description:
    "Building resilient supply chains for healthier communities and sustainable growth in the DRC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
