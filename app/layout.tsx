import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inconsolata, Inter } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Anatulya",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inter.variable} antialiased`}
    >
      <body className="mx-auto max-w-screen-xl  py-16 px-32 bg-white text-zinc-700">{children}</body>
    </html>
  );
}
