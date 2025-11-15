import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { ToasterProvider } from "@/providers/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Absen Online",
  description: "Absen online Madrasah Salafiyah Syafi'iyah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ToasterProvider>{children}</ToasterProvider>
        </AuthProvider>

        <footer className="flex justify-center py-4 w-full">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 Ruspian Majid - All rights reserved
          </p>
        </footer>
      </body>
    </html>
  );
}
