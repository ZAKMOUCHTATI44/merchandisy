import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/layouts/NavBar";
import { Inter } from 'next/font/google'
import Footer from "@/layouts/Footer";
import { Locale } from "@/i18n.config";
import TopBar from "@/layouts/TopBar";
import LayoutProvider from "@/layouts/LayoutProvider";

const inter = Inter({ subsets: ['vietnamese'] })


export const metadata: Metadata = {
  title: "Merchandisy",
  description: "Generated by create next app",
  icons : [
    "/favicon.ico"
  ]
};


   
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body
        className={`${inter.className} antialiased`}
      >
        <LayoutProvider>
          <TopBar />
          <NavBar /> 
          {children}
          <Footer lang={params.lang}/>
        </LayoutProvider>
      </body>
    </html>
  );
}
