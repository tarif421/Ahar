import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Home/layouts/Navbar";
import Footer from "./components/Home/layouts/Footer";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Ahar",
    template: "%s | Ahar",
  },
  description: "We Provide Your Test",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="py-2 md:w-11/12 md:mx-auto">
          <Navbar />
        </header>
        <main className="flex-grow py-6 px-6">
          <CartProvider>{children}</CartProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
