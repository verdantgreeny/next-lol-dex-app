import { API_BASE_URL } from "@/constants/riotConstants";
import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Items";
import { ERRORS } from "@/constants/massages";
import { CACHE_TIME } from "@/constants/riotConstants";

export const fetchItemList = async (): Promise<Item[]> => {
  try {
    console.log("빌드 시 데이터 가져오기...");
    const res = await fetch(`${API_BASE_URL}/item.json`, {
      cache: "force-cache",
    });

    if (!res.ok) throw new Error(ERRORS.FETCH_FAIL);

    const data = await res.json();
    // console.log(data);
    return Object.values(data.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchChampionList = async (): Promise<Champion[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/champion.json`, {
      next: { revalidate: CACHE_TIME.REVALIDATE_24H },
    });

    if (!res.ok) throw new Error(ERRORS.FETCH_FAIL);

    const data = await res.json();
    //   console.log(data);
    return Object.values(data.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  try {
    console.log("API 호출 시간:", new Date().toISOString());
    const res = await fetch(`${API_BASE_URL}/champion/${id}.json`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error(ERRORS.FETCH_FAIL);

    const data = await res.json();
    //   console.log(data.data);
    const champion = data.data[id];
    return champion;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
