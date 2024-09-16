import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const luxora = localFont({
  src: "./fonts/LuxoraGrotesk.woff",
  variable: "--font-luxora",
});

export const metadata: Metadata = {
  title: "galeria",
  description: "curated african art from twitter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={` ${luxora.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
