import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "./components/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yantun Khaijan",
  description: "We Provide Your Test",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="py-2 md:w-11/12 md:mx-auto">
          <Logo />
        </header>
        <main className="flex-grow py-6 px-6">{children}</main>
        <footer className="py-4 px-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            © 2023 Yantun Khaijan. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
