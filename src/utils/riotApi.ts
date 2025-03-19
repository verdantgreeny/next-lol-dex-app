import { Champion } from "@/types/Champion";
import { fetchChampionList } from "./serverApi";

/**
 * 현재 로테이션 중인 무료 챔피언 목록을 가져오는 비동기 함수입
 * @returns {Promise<Champion[]>} 현재 로테이션 중인 무료 챔피언 목록을 반환
 * @throws {Error}
 */
export const getChampionRotation = async (): Promise<Champion[]> => {
  try {
    // 병렬로 로테이션 정보와 전체 챔피언 목록을 가져오기
    const [rotationRes, champions] = await Promise.all([
      fetch("/api/rotation"),
      fetchChampionList(),
    ]);
    const freeChampionIds = await rotationRes.json();

    // console.log("로테이션 데이타:", freeChampionIds);

    // 무료 챔피언 ID 목록을 기반으로 챔피언 상세 정보를 매핑
    return freeChampionIds.map((id: number) => {
      const numId = id.toString();
      return champions.find((c) => c.key === numId);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
