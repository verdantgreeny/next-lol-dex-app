"use client";

import Image from "next/image";
import Link from "next/link";
import { Champion } from "@/types/Champion";
import { IMAGE_BASE_URL } from "@/constants/riotConstants";

const ChampionCard = ({ champion }: { champion: Champion }) => {
  return (
    <Link href={`/champions/${champion.id}`} className="group">
      <article className="bg-[var(--magic-engineering-black)] p-4 rounded-lg flex flex-col items-center">
        <Image
          src={`${IMAGE_BASE_URL}/champion/${champion.image.full}`}
          alt={champion.name}
          width={96}
          height={96}
          className="transition-transform group-hover:scale-105"
        />
        <div className="mt-2 text-center">
          <h2 className="font-bold text-[var(--gray-1-5)]">{champion.name}</h2>
          <p className="text-[var(--gray-1)] text-sm truncate">
            {champion.title}
          </p>
        </div>
      </article>
    </Link>
  );
};
export default ChampionCard;
