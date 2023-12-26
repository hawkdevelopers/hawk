import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/main/nav/Navbar";
import Footer from "@/components/main/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hawk // Portfólio",
  description: "Seja Bem vindo(a) dev <3",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images:
      "https://ipfs.io/ipfs/QmVcYXVwXNNjrwPcrEeRxyJDLgBsTDUPDCKGCQBKazLmUo",
    title: "Hawk // Portfólio",
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
      <head>
        <link
          rel="preload stylesheet"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
