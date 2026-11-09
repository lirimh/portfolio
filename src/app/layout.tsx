import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist" });
const mono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-mono" });
export const metadata: Metadata = {
  title: "Lirim Hyseni — Front-end Developer",
  description: "Selected work and experience of Lirim Hyseni, front-end developer building thoughtful web and mobile experiences.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
