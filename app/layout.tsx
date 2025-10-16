import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll"; // ✅ Fixed typo
// import Navbar from "@/components/LayoutComponents/Navbar";
// import Footer from "@/components/LayoutComponents/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onlinespheres – Freelancing Platform",
  description: "Connect clients with top freelancers in design, development, writing, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScroll />
        {/* <Navbar /> */}
        <main className="">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
