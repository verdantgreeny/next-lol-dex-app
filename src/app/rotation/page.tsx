"use client";

import ChampionCard from "@/components/champions/ChampionCard";
import CommonGrid from "@/components/common/CommonGrid";
import ErrorComponent from "@/components/common/ErrorComponent";
import SkeletonChampionCard from "@/components/common/SkeletonChampionCard";
import { useRotationQuery } from "@/hooks/useRotationQuery";

const RotationList = () => {
  const { data: champions, isPending, isError, error } = useRotationQuery();

  if (isPending) {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6 text-[var(--gold)]">
          챔피언 로테이션 목록
        </h1>
        <SkeletonChampionCard />
      </div>
    );
  }

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--gold)]">
        챔피언 로테이션 목록
      </h1>

      <CommonGrid>
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </CommonGrid>
    </div>
  );
};

export default RotationList;
