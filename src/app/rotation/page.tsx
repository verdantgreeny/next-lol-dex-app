"use client";

import { IMAGE_BASE_URL } from "@/constants/riotConstants";
import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import Image from "next/image";
import Link from "next/link";
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
              <p className="text-gray-800 text-sm text-center truncate w-full">
                {champion.title}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RotationList;
