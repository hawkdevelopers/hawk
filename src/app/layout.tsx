import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/main/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hawk // Portfolio",
  description: "Seja Bem vindo(a) dev <3",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images:
      "https://ipfs.io/ipfs/QmVcYXVwXNNjrwPcrEeRxyJDLgBsTDUPDCKGCQBKazLmUo",
    title: "Hawk // Portfolio",
    description: "Seja Bem vindo(a) dev <3",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
