import { IMAGE_BASE_URL } from "@/constant/riotConstants";
import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChampionsList = async () => {
  const champions = await fetchChampionList();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">챔피언 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {champions.map((champion) => (
          <Link key={champion.id} href={`/champions/${champion.id}`}>
            <article className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <Image
                src={`${IMAGE_BASE_URL}/champion/${champion.image.full}`}
                alt={champion.name}
                width={96}
                height={96}
              />
              <h2 className="text-center font-medium mt-2 text-red-800">
                {champion.name}
              </h2>
              <p className="text-gray-800 text-sm text-center">
                {champion.title}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChampionsList;
