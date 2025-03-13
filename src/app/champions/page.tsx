import ChampionCard from "@/components/ChampionCard";
import CommonGrid from "@/components/CommonGrid";
import { fetchChampionList } from "@/utils/serverApi";
import React, { Suspense } from "react";
import Loading from "./loading";

const ChampionsList = async () => {
  const champions = await fetchChampionList();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">챔피언 목록</h1>

      <Suspense fallback={<Loading />}>
        <CommonGrid>
          {champions.map((champion) => (
            <ChampionCard key={champion.id} champion={champion} />
          ))}
        </CommonGrid>
      </Suspense>
    </div>
  );
};

export default ChampionsList;
