import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layouts/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developers.com | Your Professional Developer Community",
  description: "Reimagine how developers present themselves online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
        <Header/>
        <main
        className="
        min-h-screen 
        flex-1 bg-white 
        text-black light:bg-white 
        light:text-black
        overflow-x-hidden overflow-y-auto
        flex flex-col">
        {children}
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
