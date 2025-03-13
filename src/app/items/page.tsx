import { fetchItemList } from "@/utils/serverApi";
import ItemCard from "@/components/ItemCard";
import CommonGrid from "@/components/CommonGrid";
import { Suspense } from "react";
import Loading from "../loading";

const ItemsList = async () => {
  const items = await fetchItemList();
  // console.log("아이템", items);
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">아이템 목록</h1>
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
