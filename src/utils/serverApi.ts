import { Item } from "@/types/Items";

export const fetchItemList = async (): Promise<Item[]> => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json`,
    { cache: "force-cache" }
  );
  const data = await res.json();
  //   console.log(data);
  return Object.values(data.data);
};
