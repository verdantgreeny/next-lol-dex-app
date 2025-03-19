import ChampionCard from "@/components/champions/ChampionCard";
import CommonGrid from "@/components/common/CommonGrid";
import { fetchChampionList } from "@/utils/serverApi";
import React, { Suspense } from "react";
import Loading from "./loading";

const ChampionsList = async () => {
  const champions = await fetchChampionList();
  // if (Math.random() > 0.7) throw new Error("안녕하세요. 에러입니다.");
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--gold)]">
        챔피언 목록
      </h1>
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
