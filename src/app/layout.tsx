import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Shawaiz Portfolio - Showcasing my work and professional experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}
      >
        <div className="min-h-screen w-full relative">
          {/* Radial Gradient Background from Top */}
          <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
            }}
          />
          {/* Your Content/Components */}
          <div className="relative z-10">
            <SmoothScroll>{children}</SmoothScroll>
          </div>
        </div>
      </body>
    </html>
  );
}
