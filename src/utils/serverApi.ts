import { API_BASE_URL } from "@/constant/riotConstants";
import { Item } from "@/types/Items";

export const fetchItemList = async (): Promise<Item[]> => {
  const res = await fetch(`${API_BASE_URL}/item.json`, {
    cache: "force-cache",
  });
  const data = await res.json();
  //   console.log(data);
  return Object.values(data.data);
};
