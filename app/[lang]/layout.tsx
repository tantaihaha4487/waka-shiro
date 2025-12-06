import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waka-Shiro | Premium Taiyaki",
  description: "Warm & Crispy Japanese Taiyaki",
};

import { getDictionary } from "@/lib/dictionary";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'th' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'th');

  return (
    <html lang={lang} data-theme="wakashiro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-base-100 text-base-content`}
      >
        <AuthProvider>
          <CartProvider>
            <Navbar lang={lang} dict={dict} />
            <main className="flex-grow">
              {children}
            </main>
            <Footer lang={lang} dict={dict} />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
