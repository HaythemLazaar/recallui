import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RecallUI",
  description: "UI library to build AI apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <main className="min-h-screen flex flex-col relative bg-neutral-50/50">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="flex items-center border-b border-neutral-200 border-dashed sticky top-0 z-10">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between p-4 px-10 border-x border-neutral-200 bg-white">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-mono">RecallUI</h1>
        </div>
      </div>
    </header>
  );
}
