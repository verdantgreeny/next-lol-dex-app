import Link from "next/link";
import React from "react";

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-3 py-2 font-extrabold hover:text-[var(--gold)] hover:bg-[var(--gray-1-5)] rounded-lg"
    >
      {children}
    </Link>
  );
};

export default MobileNavLink;
