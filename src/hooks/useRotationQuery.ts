import { useQuery } from "@tanstack/react-query";
import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import { ROTATIONS_KEY } from "@/constants/queryKeys";

export const useRotationQuery = () => {
  return useQuery<Champion[]>({
    queryKey: [ROTATIONS_KEY],
    queryFn: getChampionRotation,
    staleTime: 60 * 60 * 1000,
  });
};
