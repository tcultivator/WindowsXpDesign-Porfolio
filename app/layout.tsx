import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Anton } from "next/font/google";
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "optional",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400", 
});
export const metadata: Metadata = {
  title: "Luigie Panahon Portfolio",
  description: "Portfolio of Luigie Panahon, showcasing skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${anton.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}