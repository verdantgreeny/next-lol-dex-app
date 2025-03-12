import ChampionCard from "@/components/ChampionCard";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";

const ChampionsList = async () => {
  const champions = await fetchChampionList();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">챔피언 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default ChampionsList;
