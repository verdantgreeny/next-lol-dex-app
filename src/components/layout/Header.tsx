import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-[var(--gray-cool)] text-white p-4">
        <div className="container mx-auto flex space-x-6 justify-between items-center">
          <Link href="/">
            <Image src={"/logo.png"} alt={"logo"} width={300} height={300} />
          </Link>
          <div className="flex space-x-4 text-xl font-extrabold">
            <Link href="/champions" className="hover:text-[var(--gold)]">
              챔피언
            </Link>
            <Link href="/items" className="hover:text-[var(--gold)]">
              아이템
            </Link>
            <Link href="/rotation" className="hover:text-[var(--gold)]">
              로테이션
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
