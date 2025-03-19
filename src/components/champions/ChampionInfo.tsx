import { IMAGE_BASE_URL } from "@/constants/riotConstants";
import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";
import React from "react";
import Tag from "../common/Tag";

const ChampionInfo = ({
  champion,
}: {
  champion: Pick<ChampionDetail, "name" | "title" | "image" | "tags" | "lore">;
}) => {
  return (
    <section className="flex flex-col items-start gap-8 md:flex-row">
      <div className="relative flex w-64 h-64">
        <Image
          src={`${IMAGE_BASE_URL}/champion/${champion.image.full}`}
          alt={champion.name}
          width={256}
          height={256}
          className="object-contain"
        />
      </div>

      <div className="flex-1 space-y-4">
        <h1 className="text-4xl font-bold text-[var(--gold)]">
          {champion.name}
        </h1>
        <h2 className="text-2xl text-white">{champion.title}</h2>
        <div className="flex gap-2">
          {champion.tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>
        <p className="text-[var(--gray-1)]">{champion.lore}</p>
      </div>
    </section>
  );
};

export default ChampionInfo;
