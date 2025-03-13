import { IMAGE_BASE_URL } from "@/constants/riotConstants";
import { Item } from "@/types/Items";
import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ item }: { item: Item }) => {
  return (
    <Link href={`/items/${item.name}`}>
      <article className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-baseline items-center w-full gap-1">
        <div className="flex justify-center items-center w-full h-32 mb-4">
          <Image
            src={`${IMAGE_BASE_URL}/item/${item.image.full}`}
            alt={item.name}
            width={100}
            height={100}
          />
        </div>
        <h2 className="text-center font-medium truncate w-full text-[var(--gray-1-5)]">
          {item.name}
        </h2>
        <p className="text-sm text-center text-[var(--gray-1)] w-full">
          GOLD : {item.gold.total}
        </p>
        {/* <p className="text-sm text-justify text-fuchsia-800 w-full overflow-hidden text-ellipsis whitespace-normal">
          {item.plaintext}
        </p> */}
      </article>
    </Link>
  );
};

export default ItemCard;
