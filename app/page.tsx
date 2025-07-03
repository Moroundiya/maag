import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="bg-red-400 text-white flex justify-between items-center px-4 py-3">
        <div className="w-[100px] h-[50px] bg-amber-500 relative">
          <Link href="/about" className="">
            <Image src="/logo-dark.webp" priority fill alt="Logo" />
          </Link>
        </div>

        <ul className="flex space-x-4 font-semibold text-lg">
          <li>HOME</li>
          <li>ENTERTAINMENT</li>
          <li>TECH</li>
          <li>POLITICS</li>
          <li>HEALTH</li>
          <li>LIFESTYLE</li>
          <li>FOOD</li>
        </ul>


        
      </nav>
    </>
  );
}
