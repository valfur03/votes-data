import { Topbar } from "@/components/topbar/Topbar";
import dayjs from "dayjs";
import "dayjs/locale/fr";
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
  viewportFit: "cover",
  themeColor: "#000091",
};

dayjs.locale("fr");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={overpass.className}>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
