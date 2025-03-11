import Image from "next/image";
import { fetchItemList } from "@/utils/serverApi";
import { IMAGE_BASE_URL } from "@/constant/riotConstants";

export default async function ItemsPage() {
  const items = await fetchItemList();
  // console.log(items);
  return (
    <div className="p-">
      <h1 className="text-3xl font-bold mb-6">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {items.map((item, i) => (
          <article
            key={i}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-baseline items-center w-full gap-1"
          >
            <div className="relative w-full h-32 mb-4">
              <Image
                src={`${IMAGE_BASE_URL}/item/${item.image.full}`}
                alt={item.name}
                className="object-cover"
                width={150}
                height={150}
              />
            </div>
            <h2 className="text-center font-medium truncate w-full text-red-700">
              {item.name}
            </h2>
            <p className="text-sm text-center text-green-700">
              GOLD : {item.gold.total}
            </p>
            <p className="text-sm text-justify text-fuchsia-800">
              {item.plaintext}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
