import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col">
        <Header />
        <div className="flex-1 align-middle w-full max-w-screen-2xl mx-auto">
          <main className="flex-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
