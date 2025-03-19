import React from "react";

const SkeletonChampionCard = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          className="bg-[var(--magic-engineering-black)] p-4 rounded-lg shadow-md animate-pulse border-2 border-[var(--gray-1)]"
          key={i}
        >
          <div className="bg-[var(--gray-1)] rounded-lg w-24 h-24 mx-auto"></div>
          <div className="mt-2 space-y-2">
            <div className="bg-[var(--gray-1)] h-4 w-1/2 mx-auto rounded"></div>
            <div className="bg-[var(--gray-1)] h-3 w-1/2 mx-auto rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonChampionCard;
