import { ROTATIONS_URL } from "@/constants/riotConstants";
import { ERRORS } from "@/constants/massages";

/**
 * 로테이션 중인 무료 챔피언 ID 목록을 가져오는 API 핸들러 함수
 * @returns {Promise<Response>} 무료 챔피언 ID 목록을 JSON 형식으로 반환
 * @throws {Response}
 */
export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  if (!apiKey)
    return Response.json({ error: ERRORS.NO_API_KEY }, { status: 500 });

  if (!ROTATIONS_URL) {
    return Response.json({ error: ERRORS.NO_URL }, { status: 500 });
  }

  try {
    // Riot API에 요청을 보내 로테이션 중인 무료 챔피언 ID 목록을 가져옴
    const res = await fetch(ROTATIONS_URL, {
      headers: {
        "X-Riot-Token": apiKey,
      },
    });

    // 응답 데이터에서 무료 챔피언 ID 목록만 가져옴
    const { freeChampionIds } = await res.json();
    //   console.log(res2);
    return Response.json(freeChampionIds);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: ERRORS.ROTATION_FETCH_FAIL },
      { status: 500 }
    );
  }
}
