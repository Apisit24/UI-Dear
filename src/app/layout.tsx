import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
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
  title: "UI Dear - Design Showcase",
  description: "Personal UI Design Showcase for Inspiration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[var(--bg)] text-[var(--text)]`}>
        <Sidebar />
        <main
          className="min-h-screen p-8 lg:p-12 bg-gradient-to-br from-[var(--bg)] via-[var(--bg)] to-[var(--bg-secondary)]"
          style={{ marginLeft: '280px' }}
        >
          <div className="max-w-[1200px] mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
