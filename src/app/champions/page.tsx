import ChampionCard from "@/components/ChampionCard";
import CommonGrid from "@/components/CommonGrid";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";

const ChampionsList = async () => {
  const champions = await fetchChampionList();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">챔피언 목록</h1>
      <CommonGrid>
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </CommonGrid>
    </div>
  );
};

export default ChampionsList;
