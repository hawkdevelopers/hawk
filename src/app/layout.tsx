import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "@/components/main/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hawk // Developer Portfolio",
  description: "Seja Bem Vindo Desenvolvedor(a). <3",
  openGraph: {
    images:
      "https://ipfs.io/ipfs/QmVcYXVwXNNjrwPcrEeRxyJDLgBsTDUPDCKGCQBKazLmUo",
    title: "Hawk // Developer Portfolio",
    description: "Seja Bem Vindo Desenvolvedor(a). <3",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body cz-shortcut-listen="true" className={inter.className}>
        <SpeedInsights />
        <Analytics />
        <Navbar />
        <section className="size">{children}</section>
      </body>
    </html>
  );
}
