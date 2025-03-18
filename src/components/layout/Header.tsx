"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import { ROUTES } from "@/constants/routes";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href={ROUTES.HOME}>
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={200}
                className="w-32 md:w-48"
              />
            </Link>

            {/* 데스크톱 메뉴 */}
            <div className="hidden md:flex space-x-6">
              <NavLink href={ROUTES.CHAMPIONS}>챔피언</NavLink>
              <NavLink href={ROUTES.ITEMS}>아이템</NavLink>
              <NavLink href={ROUTES.ROTATION}>로테이션</NavLink>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[var(--gray-1-5)]"
            >
              <svg
                className="h-6 w-6"
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
              <MobileNavLink
                href={ROUTES.CHAMPIONS}
                onClick={() => setIsOpen(false)}
              >
                챔피언
              </MobileNavLink>
              <MobileNavLink
                href={ROUTES.ITEMS}
                onClick={() => setIsOpen(false)}
              >
                아이템
              </MobileNavLink>
              <MobileNavLink
                href={ROUTES.ROTATION}
                onClick={() => setIsOpen(false)}
              >
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
