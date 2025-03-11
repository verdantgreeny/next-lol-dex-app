import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-white">
        <h1 className="text-4xl font-bold mb-4">리그 오브 레전드 정보 앱</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 text-center">
        <Link href={"/champions"}>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">챔피언 정보 보기</h2>
          </div>
        </Link>
        <Link href={"/rotation"}>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">금주 로테이션 확인</h2>
          </div>
        </Link>
        <Link href={"/items"}>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">아이템 정보 보기</h2>
          </div>
        </Link>
      </section>
    </div>
  );
}
