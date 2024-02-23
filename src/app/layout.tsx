import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from 'next/head';

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-ibm-plex-sans'
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI Powered image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
  );
}
