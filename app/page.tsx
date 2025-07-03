import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="bg-red-400 text-white ">
        <div className="w-[100px] h-[50px] bg-amber-500 relative">
          <Link href="/about" className="">
            <Image src="/logo-dark.webp" priority fill alt="Logo" />
          </Link>
        </div>
      </nav>
    </>
  );
}
