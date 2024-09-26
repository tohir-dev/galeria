import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const luxora = localFont({
  src: "./fonts/LuxoraGrotesk.woff",
  variable: "--font-luxora",
});

export const metadata: Metadata = {
  title: "galeria - discover art on twitter",
  description: "curated art from twitter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={` ${luxora.className} antialiased`}>
        <main className=" min-h-screen">{children}</main>
      </body>
    </html>
  );
}
