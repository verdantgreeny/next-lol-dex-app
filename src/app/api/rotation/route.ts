export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;
  if (!apiKey) return Response.json({ error: "API key 없음" }, { status: 500 });

  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": apiKey,
      },
    }
  );

  const { freeChampionIds } = await res.json();
  //   console.log(res2);
  return Response.json(freeChampionIds);
}
