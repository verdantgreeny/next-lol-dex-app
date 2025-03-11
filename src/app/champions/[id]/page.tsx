import { fetchChampionDetail } from "@/utils/serverApi";
import React from "react";

type Params = {
  params: {
    id: string;
  };
};

const ChampionDetail = async ({ params }: Params) => {
  //   console.log(params.id);
  const champion = await fetchChampionDetail(params.id);
  console.log(champion);

  return <div> ChampionDetail</div>;
};

export default ChampionDetail;
