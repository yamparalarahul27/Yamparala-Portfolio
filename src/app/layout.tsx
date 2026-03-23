import type { Metadata } from "next";
import { Agentation } from "agentation";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yamparala Rahul - UX Designer",
  description: "UX Designer for Finance Web3 & B2B Experience. 5 years of design work experience.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-[57px]">
          {children}
        </div>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
