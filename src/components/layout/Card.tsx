import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
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
      <div className="relative p-6 rounded-lg shadow-md md:h-80 flex flex-col items-center justify-center opacity-90 transition-transform duration-300 hover:scale-105 hover:brightness-110 overflow-hidden">
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

export default Card;
