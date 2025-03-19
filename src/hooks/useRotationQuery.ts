import { useQuery } from "@tanstack/react-query";
import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import { QUERY_STALE_TIME, ROTATIONS_KEY } from "@/constants/queryKeys";

/**
 * 로테이션 중인 무료 챔피언 목록을 가져오는 React Query 훅
 * @returns {UseQueryResult<Champion[]>}
 */
export const useRotationQuery = () => {
  return useQuery<Champion[]>({
    queryKey: [ROTATIONS_KEY],
    queryFn: getChampionRotation,
    staleTime: QUERY_STALE_TIME,
  });
};
