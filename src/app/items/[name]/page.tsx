import { IMAGE_BASE_URL } from "@/constants/riotConstants";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ItemDetail = async ({ params }: { params: { name: string } }) => {
  const itemName = decodeURIComponent(params.name);
  const itemList = await fetchItemList();
  const [itemData] = itemList.filter(
    (item) => item.name.replace(/<[^>]+>/g, "") === itemName
  );

  if (!itemData) {
    return (
      <div className="text-3xl font-bold mb-6 text-[var(--gold)] flex items-center justify-center">
        아이템을 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-[var(--gold)] ">
        {itemName}
      </h1>

      <div className="bg-[var(--magic-engineering-black)] p-4 rounded-lg flex flex-col items-center justify-center gap-4 border-2 border-[var(--gray-1)] max-w-lg mx-auto">
        <Image
          src={`${IMAGE_BASE_URL}/item/${itemData.image.full}`}
          alt={itemData.name}
          width={124}
          height={124}
        />

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <p className="text-sm text-center text-[var(--gray-1)]">
            구매 가격: {itemData.gold.base} G
          </p>
          <p className="text-sm text-center text-[var(--gray-1)]">
            판매 가격: {itemData.gold.sell} G
          </p>
          <p className="text-sm text-center text-[var(--gray-1)]">
            총 가격: {itemData.gold.total} G
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {itemData.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 border text-sm text-[var(--gray-1)] rounded-2xl">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 w-full">
        <h2 className="text-xl font-bold mb-2 text-[var(--gold)]">설명</h2>
        <p className="text-sm text-justify text-[var(--gray-1)] mt-2">
          {itemData.plaintext}
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
