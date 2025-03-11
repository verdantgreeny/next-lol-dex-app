import Image from "next/image";
import { fetchItemList } from "@/utils/serverApi";
import { IMAGE_BASE_URL } from "@/constant/riotConstants";

const ItemsList = async () => {
  const items = await fetchItemList();
  // console.log(items);
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {items.map((item, i) => (
          <article
            key={i}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-baseline items-center w-full gap-1"
          >
            <div className="flex justify-center items-center w-full h-32 mb-4">
              <Image
                src={`${IMAGE_BASE_URL}/item/${item.image.full}`}
                alt={item.name}
                width={100}
                height={100}
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
};

export default ItemsList;
