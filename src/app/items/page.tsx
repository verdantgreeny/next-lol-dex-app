import Image from "next/image";
import { fetchItemList } from "@/utils/serverApi";
import { IMAGE_BASE_URL } from "@/constant/riotConstants";

export default async function ItemsPage() {
  const items = await fetchItemList();
  // console.log(items);
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item, i) => (
          <article
            key={i}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center items-center"
          >
            <Image
              src={`${IMAGE_BASE_URL}/item/${item.image.full}`}
              alt={item.name}
              className="object-cover"
              width={150}
              height={150}
            />
            <h2 className="text-center font-medium truncate">{item.name}</h2>
            <p className="text-gray-600 text-sm text-center">
              GOLD : {item.gold.total}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
