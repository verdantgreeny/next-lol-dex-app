import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCard = ({
  href,
  title,
  backgroundImage,
}: {
  href: string;
  title: string;
  backgroundImage: string;
}) => {
  return (
    <Link href={href}>
      <div className="relative flex flex-col items-center justify-center p-6 overflow-hidden transition-transform duration-300 rounded-lg shadow-md md:h-80 opacity-90 hover:scale-105 hover:brightness-110">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover -z-10"
        />

        <h2 className="text-[var(--gold)] text-2xl font-bold mb-2 drop-shadow-[1px_1px_0px_white]">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default HomeCard;
