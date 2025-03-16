import { IMAGE_BASE_URL } from "@/constants/riotConstants";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "리그 오브 레전드 챔피언 정보",
  description: "리그 오브 레전드 챔피언의 상세 정보",
};

const ChampionDetail = async ({ params }: { params: { id: string } }) => {
  //   console.log(params.id);
  const champion = await fetchChampionDetail(params.id);
  // console.log(champion);

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
          <h1 className="text-4xl font-bold text-[var(--gold)]">
            {champion.name}
          </h1>
          <h2 className="text-2xl text-white">{champion.title}</h2>
          <div className="flex gap-2">
            {champion.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[var(--gray-1)] ">{champion.lore}</p>
        </div>
      </section>

      {/* 스킬 섹션 */}
      <section className="space-y-6">
        <h3 className="text-3xl font-bold text-[var(--gold)]">스킬 정보</h3>

        <div className="bg-[var(--magic-engineering-black)] p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-4 text-white">
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
            <p className="text-[var(--gray-1)] flex-1">
              {champion.passive.description}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {champion.spells.map((spell) => (
            <div
              key={spell.id}
              className="bg-[var(--magic-engineering-black)] p-4 rounded-xl"
            >
              <div className="flex justify-baseline items-start gap-6">
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
                  <h4 className="text-lg font-semibold text-white">
                    {spell.name}
                  </h4>
                  <p className="text-[var(--gray-1)] text-sm">
                    {spell.description}
                  </p>
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
