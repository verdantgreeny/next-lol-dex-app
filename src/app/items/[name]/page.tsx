import ItemInfo from "@/components/items/ItemInfo";
import { ITEM_NOT_FOUND_MESSAGE } from "@/constants/massages";
import { fetchItemList } from "@/utils/serverApi";
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
        {ITEM_NOT_FOUND_MESSAGE}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-[var(--gold)] ">
        {itemName}
      </h1>

      <ItemInfo itemData={itemData} />

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
