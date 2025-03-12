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
            width={256}
            height={256}
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

      {/* 스킬 섹션 */}
      <section className="space-y-6">
        <h3 className="text-3xl font-bold">스킬 정보</h3>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="text-xl font-semibold mb-4">
            {champion.passive.name}
          </h4>
          <div className="flex items-start gap-6">
            <div className="min-w-16 min-h-16 relative">
              <Image
                src={`${IMAGE_BASE_URL}/passive/${champion.passive.image.full}`}
                alt={champion.passive.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 flex-1">
              {champion.passive.description}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {champion.spells.map((spell) => (
            <div
              key={spell.id}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center items-start gap-6">
                <div className="min-w-16 min-h-16 relative">
                  <Image
                    src={`${IMAGE_BASE_URL}/spell/${spell.image.full}`}
                    alt={spell.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{spell.name}</h4>
                  <p className="text-gray-600 text-sm">{spell.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChampionDetail;
