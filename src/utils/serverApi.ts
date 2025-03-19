import { API_BASE_URL } from "@/constants/riotConstants";
import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Items";
import { ERRORS } from "@/constants/massages";
import { CACHE_TIME } from "@/constants/riotConstants";

/**
 * 아이템 목록을 가져오는 비동기 함수
 * @returns {Promise<Item[]>} 아이템 목록을 담은 배열을 반환
 * @throws {Error}
 */
export const fetchItemList = async (): Promise<Item[]> => {
  try {
    // console.log("빌드 시 데이터 가져오기...");
    const res = await fetch(`${API_BASE_URL}/item.json`, {
      cache: "force-cache",
    });

    if (!res.ok) throw new Error(ERRORS.FETCH_FAIL);

    const data = await res.json();

    return Object.values(data.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * 챔피언 목록을 가져오는 비동기 함수
 * @returns {Promise<Champion[]>} 챔피언 목록을 담은 배열을 반환
 * @throws {Error}
 */
export const fetchChampionList = async (): Promise<Champion[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/champion.json`, {
      next: { revalidate: CACHE_TIME.REVALIDATE_24H },
    });

    if (!res.ok) throw new Error(ERRORS.FETCH_FAIL);

    const data = await res.json();

    return Object.values(data.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * 챔피언의 상세 정보를 가져오는 비동기 함수
 * @param {string} id - 챔피언의 ID
 * @returns {Promise<ChampionDetail>} 챔피언의 상세 정보를 반환
 * @throws {Error}
 */
export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  try {
    // console.log("API 호출 시간:", new Date().toISOString());
    const res = await fetch(`${API_BASE_URL}/champion/${id}.json`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error(ERRORS.FETCH_FAIL);

    const data = await res.json();

    const champion = data.data[id];
    return champion;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
