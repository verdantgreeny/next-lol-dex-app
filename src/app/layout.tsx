import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeToggle from "@/components/layout/ThemeToggle";

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning className="flex flex-col min-h-screen ">
        <Providers>
          <Header />
          <main className="flex-1 min-h-full px-4 py-2 md:px-20">
            {children}
          </main>
          <Footer />
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
