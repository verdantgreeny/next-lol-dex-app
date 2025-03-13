"use client";

import ChampionCard from "@/components/ChampionCard";
import CommonGrid from "@/components/CommonGrid";
import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "../loading";

const RotationList = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const fetchRotation = async () => {
      const data = await getChampionRotation();
      setChampions(data);
    };

    fetchRotation();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">챔피언 로테이션 목록</h1>
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

export default RotationList;
