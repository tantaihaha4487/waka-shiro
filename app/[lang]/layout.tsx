import type { Metadata } from "next";
import { Kanit, Geist_Mono } from "next/font/google";
import "../globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waka-Shiro | Japanese Treat",
  description: "Warm & Crispy Japanese Taiyaki",
};

import { getDictionary } from "@/lib/dictionary";

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'th' | 'en');

  return (
    <html lang={lang} data-theme="wakashiro">
      <body
        className={`${kanit.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-base-100 text-base-content`}
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
