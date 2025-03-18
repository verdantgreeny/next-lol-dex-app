import { Champion } from "@/types/Champion";
import { fetchChampionList } from "./serverApi";

export const getChampionRotation = async (): Promise<Champion[]> => {
  try {
    // console.time("병렬 처리");
    const [rotationRes, champions] = await Promise.all([
      fetch("/api/rotation"),
      fetchChampionList(),
    ]);
    const freeChampionIds = await rotationRes.json();
    // console.timeEnd("병렬 처리");
    // console.log("로테이션 데이타:", freeChampionIds);
    return freeChampionIds.map((id: number) => {
      const numId = id.toString();
      return champions.find((c) => c.key === numId);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
