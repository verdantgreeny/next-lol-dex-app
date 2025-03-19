import { IMAGE_BASE_URL } from "@/constants/riotConstants";
import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";
import React from "react";

const Spell = ({
  spell,
}: {
  spell: Omit<ChampionDetail["spells"][number], "id">; //  spells는 배열 타입이기 때문에, 배열의 각 요소인 스킬에 접근하려면 [number]가 있어야함
}) => {
  return (
    <div className="bg-[var(--magic-engineering-black)] p-4 rounded-xl">
      <div className="flex items-start gap-6 justify-baseline">
        <div className="relative min-w-16 min-h-16">
          <Image
            src={`${IMAGE_BASE_URL}/spell/${spell.image.full}`}
            alt={spell.name}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{spell.name}</h4>
          <p className="text-[var(--gray-1)] text-sm">
            {spell.description.replace(/<[^>]+>/g, "")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spell;
