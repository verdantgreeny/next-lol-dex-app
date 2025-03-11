import { API_BASE_URL } from "@/constant/riotConstants";
import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Items";

export const fetchItemList = async (): Promise<Item[]> => {
  const res = await fetch(`${API_BASE_URL}/item.json`, {
    cache: "force-cache",
  });
  const data = await res.json();
  //   console.log(data);
  return Object.values(data.data);
};

export const fetchChampionList = async (): Promise<Champion[]> => {
  const res = await fetch(
    `${API_BASE_URL}/champion.json`,
    { next: { revalidate: 60 * 60 * 24 } } //24시간마다
  );
  const data = await res.json();
  //   console.log(data);
  return Object.values(data.data);
};

export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  const res = await fetch(`${API_BASE_URL}/champion/${id}.json`, {
    cache: "no-store",
  });

  const data = await res.json();
  //   console.log(data.data);
  const champion = data.data[id];
  //   console.log("챔피온",champion);
  return champion;
};
