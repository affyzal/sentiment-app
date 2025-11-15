import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentiment Analysis Dashboard",
  description: "A dashboard to visualize sentiment analysis of political debates using Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-slate-950 text-white min-h-screen`}>
        {/* Sidebar */}
        <Sidebar />
        <Analytics />

        {/* Main content */}
        <main className="flex-1 md:ml-64 pt-16 md:pt-0 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
