import { fetchItemList } from "@/utils/serverApi";
import ItemCard from "@/components/items/ItemCard";
import CommonGrid from "@/components/common/CommonGrid";
import { Suspense } from "react";
import Loading from "../loading";

const ItemsList = async () => {
  const items = await fetchItemList();
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--gold)]">
        아이템 목록
      </h1>

      <Suspense fallback={<Loading />}>
        <CommonGrid>
          {items.map((item, i) => (
            <div key={item.id || i}>
              <ItemCard item={item} />
            </div>
          ))}
        </CommonGrid>
      </Suspense>
    </div>
  );
};

export default ItemsList;
