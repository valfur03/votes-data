import type { Metadata, Viewport } from "next";
import { Overpass } from "next/font/google";

import "./globals.css";

const overpass = Overpass({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Votes Data",
};

export const viewport: Viewport = {
  themeColor: "#000091",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={overpass.className}>{children}</body>
    </html>
  );
}
