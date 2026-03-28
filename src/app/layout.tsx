import type { Metadata } from "next";
import { Agentation } from "agentation";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import CanvasBackground from "../components/CanvasBackground";
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
  title: "Yamparala Rahul - Design Engineer",
  description: "Design Engineer for Web3, B2B & Healthcare. 5.2 years of experience.",
  icons: {
    icon: '/favicon.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CanvasBackground
          dotRadius={0.5}
          dotSpacing={10}
          waveSpeed={0.0005}
          maxWaveHeight={18}
          interactionRadius={120}
          mouseRepelStrength={36}
          waveAngle={62}
          waveIntensity={0.008}
          waveEnabled={true}
          hoverColor="#111111"
          gradientFrom="#9CA3AF"
          gradientTo="#6B7280"
          backgroundColor="#F8F9FA"
          darkHoverColor="#ffffff"
          darkGradientFrom="#D4D4D8"
          darkGradientTo="#A1A1AA"
          darkBackgroundColor="#050505"
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
