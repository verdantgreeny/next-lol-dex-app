import { IMAGE_BASE_URL } from "@/constant/riotConstants";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

type Params = {
  params: {
    id: string;
  };
};

const ChampionDetail = async ({ params }: Params) => {
  //   console.log(params.id);
  const champion = await fetchChampionDetail(params.id);
  console.log(champion);

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-8">
      <section className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex relative w-64 h-64">
          <Image
            src={`${IMAGE_BASE_URL}/champion/${champion.image.full}`}
            alt={champion.name}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="space-y-4 flex-1">
          <h1 className="text-4xl font-bold">{champion.name}</h1>
          <h2 className="text-2xl text-gray-600">{champion.title}</h2>
          <div className="flex gap-2">
            {champion.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 border text-sm">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 ">{champion.lore}</p>
        </div>
      </section>
    </div>
  );
};

export default ChampionDetail;
