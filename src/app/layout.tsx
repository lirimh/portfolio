import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingNavDemo } from "@/components/molecules/Navbar";
import Footer from "@/components/page/Footer";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNavDemo />
        {children}
        <Footer />
        <Toaster position="top-center" theme="dark" closeButton richColors />
      </body>
    </html>
  );
}
