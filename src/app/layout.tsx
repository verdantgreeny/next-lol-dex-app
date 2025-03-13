import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";

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
      <body suppressHydrationWarning={true}>
        <nav className="bg-green-950 text-white p-4">
          <div className="container mx-auto flex space-x-6 justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:text-gray-300">
              LOL Dex
            </Link>
            <div className="flex space-x-4">
              <Link href="/champions" className="hover:text-gray-300">
                챔피언
              </Link>
              <Link href="/items" className="hover:text-gray-300">
                아이템
              </Link>
              <Link href="/rotation" className="hover:text-gray-300">
                로테이션
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
