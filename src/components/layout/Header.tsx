"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-[var(--gray-cool)] text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={120}
                height={40}
                className="w-32 md:w-48"
              />
            </Link>

            {/* 데스크톱 메뉴 */}
            <div className="hidden md:flex space-x-6">
              <NavLink href="/champions">챔피언</NavLink>
              <NavLink href="/items">아이템</NavLink>
              <NavLink href="/rotation">로테이션</NavLink>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[var(--gray-1-5)]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  } // x 아이콘 : 햄버거 아이콘
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 px-4">
              <MobileNavLink href="/champions" onClick={() => setIsOpen(false)}>
                챔피언
              </MobileNavLink>
              <MobileNavLink href="/items" onClick={() => setIsOpen(false)}>
                아이템
              </MobileNavLink>
              <MobileNavLink href="/rotation" onClick={() => setIsOpen(false)}>
                로테이션
              </MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
