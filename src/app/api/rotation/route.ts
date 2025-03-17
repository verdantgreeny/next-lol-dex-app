import { ROTATIONS_URL } from "@/constants/riotConstants";
import { ERRORS } from "@/constants/massages";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  if (!apiKey)
    return Response.json({ error: ERRORS.NO_API_KEY }, { status: 500 });

  if (!ROTATIONS_URL) {
    return Response.json({ error: ERRORS.NO_URL }, { status: 500 });
  }

  try {
    const res = await fetch(ROTATIONS_URL, {
      headers: {
        "X-Riot-Token": apiKey,
      },
    });

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
