import { Champion } from "@/types/Champion";
import { fetchChampionList } from "./serverApi";

export const getChampionRotation = async (): Promise<Champion[]> => {
  const [rotationRes, champions] = await Promise.all([
    fetch("/api/rotation"),
    fetchChampionList(),
  ]);
  const freeChampionIds = await rotationRes.json();
  // console.log("로테이션 데이타:", freeChampionIds);
  return freeChampionIds.map((id: number) => {
    const numericId = id.toString();
    return champions.find((c) => c.key === numericId);
  });
};
