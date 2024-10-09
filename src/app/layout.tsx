import type { Metadata } from "next";
import "./globals.css";

import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
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
    <html lang="en" className="">
      <body className={` ${inter.className} antialiased w-screen `}>
        <main className=" min-h-screen">{children}</main>
      </body>
    </html>
  );
}
