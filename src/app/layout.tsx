import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/header";
import { faker } from "@faker-js/faker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google test Frontend",
  description: "Test frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="w-full flex flex-col gap-3">
        {children}
        <footer className="h-8 bg-gray-100  w-full flex flex-row justify-between">
          <p>@ Google 2021</p>
          <p>version: 0.1.0</p>
        </footer>
      </body>
    </html>
  );
}
