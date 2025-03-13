import Link from "next/link";
import React from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="px-3 py-2 font-extrabold hover:text-[var(--gold)] transition-colors"
    >
      {children}
    </Link>
  );
};

export default NavLink;
