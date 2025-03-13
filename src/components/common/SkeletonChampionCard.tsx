import React from "react";

const SkeletonChampionCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          className="bg-white p-4 rounded-lg shadow-md animate-pulse"
          key={i}
        >
          <div className="bg-[var(--gray-1)] rounded-full w-24 h-24 mx-auto"></div>
          <div className="mt-2 space-y-2">
            <div className="bg-[var(--gray-1)] h-4 w-3/4 mx-auto rounded"></div>
            <div className="bg-[var(--gray-1)] h-3 w-1/2 mx-auto rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonChampionCard;
