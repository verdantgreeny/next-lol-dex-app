import ChampionInfo from "@/components/champions/ChampionInfo";
import PassiveSkill from "@/components/champions/PassiveSkill";
import Spell from "@/components/champions/Spell";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "리그 오브 레전드 챔피언 정보",
  description: "리그 오브 레전드 챔피언의 상세 정보",
};

const ChampionDetail = async ({ params }: { params: { id: string } }) => {
  const champion = await fetchChampionDetail(params.id);
  // console.log(champion);

  return (
    <div className="max-w-5xl p-4 mx-auto space-y-8">
      <ChampionInfo champion={champion} />

      <section className="space-y-6">
        <h3 className="text-3xl font-bold text-[var(--gold)]">스킬 정보</h3>

        <PassiveSkill passive={champion.passive} />

        <div className="grid gap-4 md:grid-cols-2">
          {champion.spells.map((spell) => (
            <Spell key={spell.id} spell={spell} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChampionDetail;
