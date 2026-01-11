import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITB Major Predictor - Temukan Jurusan ITB yang Tepat",
  description:
    "Temukan jurusan ITB yang paling sesuai dengan minat dan kepribadianmu berdasarkan Holland RIASEC Theory. 50 program studi, 30 pertanyaan.",
  keywords: [
    "ITB",
    "jurusan ITB",
    "major predictor",
    "RIASEC",
    "Holland Code",
    "career test",
  ],
  authors: [{ name: "ITB Major Predictor" }],
  openGraph: {
    title: "ITB Major Predictor",
    description: "Temukan jurusan ITB yang tepat untukmu!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
