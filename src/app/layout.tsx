import { overpass } from "@/app/fonts/overpass/overpass";
import { RootProviders } from "@/app/RootProviders";
import { Footer } from "@/components/footer/Footer";
import { Topbar } from "@/components/topbar/Topbar";
import { cn } from "@/lib/utils/cn";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Votes Data – L'intégralité des data des élections en France",
  description:
    "Votes Data permet de consulter les données liées aux élections en France, en l'occurrence présidentielles, législatives ou municipales.",
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
      <body className={cn("min-h-screen flex flex-col", overpass.className)}>
        <RootProviders>
          <Topbar />
          {children}
          <Footer />
        </RootProviders>
      </body>
    </html>
  );
}
