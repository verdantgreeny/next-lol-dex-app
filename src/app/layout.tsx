import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        suppressHydrationWarning={true}
        className="min-h-screen flex flex-col "
      >
        <Providers>
          <Header />
          <main className="bg-[var(--gray-3)] min-h-full flex-1 px-4 md:px-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
