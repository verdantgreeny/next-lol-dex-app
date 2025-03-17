import SkeletonChampionCard from "@/components/common/SkeletonChampionCard";

export default function Loading() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--gold)]">챔피언 목록</h1>
      <SkeletonChampionCard />
    </div>
  );
}
