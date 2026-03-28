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
          dotRadius={1.2}
          dotSpacing={30}
          waveSpeed={0.003}
          maxWaveHeight={20}
          interactionRadius={150}
          mouseRepelStrength={15}
          waveAngle={45}
          waveIntensity={0.02}
          waveEnabled={true}
          hoverColor="#ffffff"
          gradientFrom="#ff0080"
          gradientTo="#7928ca"
          backgroundColor="#050505"
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
