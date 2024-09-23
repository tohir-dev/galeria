import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Tabs } from "@/components/ui/tabs";
import Gallery from "@/components/Gallery";

const luxora = localFont({
  src: "./fonts/LuxoraGrotesk.woff",
  variable: "--font-luxora",
});

export const metadata: Metadata = {
  title: "art-twitter - discover art on twitter",
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
        <main className=" min-h-screen">
          {/* <Tabs defaultValue="popular">  */}
            {/* <Header /> */}
            {/* {children} */}
          {/* </Tabs> */}
          <Gallery/>
        </main>
      </body>
    </html>
  );
}
