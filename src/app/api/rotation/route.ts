import { ROTATIONS_URL } from "@/constants/riotConstants";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  if (!apiKey) return Response.json({ error: "API key 없음" }, { status: 500 });

  const res = await fetch(ROTATIONS_URL, {
    headers: {
      "X-Riot-Token": apiKey,
    },
  });

  const { freeChampionIds } = await res.json();
  //   console.log(res2);
  return Response.json(freeChampionIds);
}
