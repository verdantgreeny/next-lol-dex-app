import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-green-950 text-white p-4">
        <div className="container mx-auto flex space-x-6 justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-gray-300">
            LOL Dex
          </Link>
          <div className="flex space-x-4">
            <Link href="/champions" className="hover:text-gray-300">
              챔피언
            </Link>
            <Link href="/items" className="hover:text-gray-300">
              아이템
            </Link>
            <Link href="/rotation" className="hover:text-gray-300">
              로테이션
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
