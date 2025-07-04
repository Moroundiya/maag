import Image from "next/image";
import Link from "next/link";
import { Search } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-12 py-6 border-b-3 border-black">
            <div className="w-[80px] h-[40px] relative">
                <Link href="/about" className="">
                    <Image src="/logo-dark.webp" priority fill alt="Logo" />
                </Link>
            </div>
            <ul className="flex space-x-6 font-semibold text-xl text-black">
                <Link href="/">HOME</Link>
                <Link href="/entertainment">ENTERTAINMENT</Link>
                <Link href="/tech">TECH</Link>
                <Link href="/politics">POLITICS</Link>
                <Link href="/health">HEALTH</Link>
                <Link href="/lifestyle">LIFESTYLE</Link>
                <Link href="/food">FOOD</Link>
            </ul>
            <Search className="cursor-pointer text-black" />
        </nav>
    )
}