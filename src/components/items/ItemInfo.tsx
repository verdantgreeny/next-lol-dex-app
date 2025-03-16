import { IMAGE_BASE_URL } from "@/constants/riotConstants";
import Image from "next/image";
import React from "react";
import Tag from "../common/Tag";
import { Item } from "@/types/Items";

const ItemInfo = ({
  itemData,
}: {
  itemData: Pick<Item, "image" | "name" | "gold" | "tags">;
}) => {
  return (
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
        {itemData.tags.map((tag, i) => (
          <Tag key={i} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default ItemInfo;
