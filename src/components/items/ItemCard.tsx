import { IMAGE_BASE_URL } from "@/constants/riotConstants";
import { Item } from "@/types/Items";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const ItemCard = ({ item }: { item: Item }) => {
  const itemName = item.name.replace(/<[^>]+>/g, "");
  const urlName = encodeURIComponent(itemName);

  return (
    <Link href={`${ROUTES.ITEMS}/${urlName}`} className="group">
      <article className="bg-[var(--magic-engineering-black)] p-4 rounded-lg flex flex-col justify-baseline items-center w-full gap-1 border-2 border-[var(--gray-1)]">
        <Image
          src={`${IMAGE_BASE_URL}/item/${item.image.full}`}
          alt={item.name}
          width={100}
          height={100}
          className="transition-transform group-hover:scale-105"
        />

        <h2 className="text-center font-medium truncate w-full text-[var(--gray-1-5)]">
          {itemName}
        </h2>
        <p className="text-sm text-center text-[var(--gray-1)] w-full">
          {item.gold.total} G
        </p>
        {/* <p className="text-sm text-justify text-fuchsia-800 w-full overflow-hidden text-ellipsis whitespace-normal">
          {item.plaintext}
        </p> */}
      </article>
    </Link>
  );
};

export default ItemCard;
