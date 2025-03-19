import { IMAGE_BASE_URL } from "@/constants/riotConstants";
import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";
import React from "react";

const PassiveSkill = ({
  passive,
}: {
  passive: Pick<ChampionDetail["passive"], "name" | "description" | "image">;
}) => {
  return (
    <div className="bg-[var(--magic-engineering-black)] p-6 rounded-xl">
      <h4 className="mb-4 text-xl font-semibold text-white">{passive.name}</h4>
      <div className="flex items-start gap-6">
        <div className="relative min-w-16 min-h-16">
          <Image
            src={`${IMAGE_BASE_URL}/passive/${passive.image.full}`}
            alt={passive.name}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <p className="text-[var(--gray-1)] flex-1">
          {passive.description.replace(/<[^>]+>/g, "")}
        </p>
      </div>
    </div>
  );
};

export default PassiveSkill;
