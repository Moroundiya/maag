import type { Metadata } from "next";
import "./globals.css";
import { Familjen_Grotesk } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";
import { Search } from 'lucide-react';


export const metadata: Metadata = {
  title: "MAAG",
  description: "A blog like no other",
};

const familjen = Familjen_Grotesk({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={familjen.className}>
      <body>
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
        {children}
      </body>
    </html>
  );
}
