import type { Metadata } from "next";
import { Abel } from "next/font/google";
import "./globals.css";
import TopNav from "./ul/navbar/topnav";
import Footer from "./ul/footer/footer";

const abel = Abel({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "McDonald`s Portfolio",
  description: "This page is designed to showcases McDonald Musimwa`s skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={abel.className}>
        <TopNav />
        {children}</body>
      <Footer />
    </html>
  );
}
