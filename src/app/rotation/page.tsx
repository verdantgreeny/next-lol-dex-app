"use client";

import ChampionCard from "@/components/ChampionCard";
import CommonGrid from "@/components/CommonGrid";
import { useRotationQuery } from "@/hooks/useRotationQuery";

const RotationList = () => {
  const { data: champions, isPending, isError, error } = useRotationQuery();

  if (isPending) {
    return (
      <div className="p-4 text-center text-gray-500">
        챔피언 정보를 불러오는 중...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-500">
        {error.message || "챔피언 정보를 불러올 수 없습니다"}
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">챔피언 로테이션 목록</h1>

      <CommonGrid>
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </CommonGrid>
    </div>
  );
};

export default RotationList;
