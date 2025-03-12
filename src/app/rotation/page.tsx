"use client";

import ChampionCard from "@/components/ChampionCard";
import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import React, { useEffect, useState } from "react";

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
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default RotationList;
