import HomeCard from "@/components/HomeCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center space-y-8">
      <section className="text-center py-7">
        <h1 className="text-4xl font-bold mb-4 text-[var(--gold)]">
          리그 오브 레전드 정보 앱
        </h1>
        <p className="text-[var(--gray-1)] max-w-2xl mx-auto">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 text-center ">
        <HomeCard
          href="/champions"
          title="챔피언 정보 보기"
          backgroundImage="/champions.webp"
        />
        <HomeCard
          href="/rotation"
          title="금주 로테이션 확인"
          backgroundImage="/rotation.webp"
        />
        <HomeCard
          href="/items"
          title="아이템 정보 보기"
          backgroundImage="/items.webp"
        />
      </section>
    </div>
  );
}
