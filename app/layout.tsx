import type { Metadata } from "next";
import "./globals.css";
import { Familjen_Grotesk } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";
import { Search } from 'lucide-react';
import { CircleUser, Menu, SquarePen } from 'lucide-react';
import NavLink from "./components/NavLink";
import { links } from "./data/links";

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
        <nav className="flex justify-between items-center px-3 py-3 xl:px-8 2xl:px-12 lg:py-6 border-b-2 shadow-xl fixed z-20 top-0 left-0 w-full border-black bg-[#f7f7e8] transition-all duration-700 ease-in-out">
          <div className="w-[70px] h-[30] sm:w-[90px] sm:h-[40px] relative">
            <Link href="/" className="">
              <Image src="/logo-dark.webp" priority fill alt="Logo" className="" />
            </Link>
          </div>
          <Menu size={26} className="lg:hidden" />
          <ul className="hidden lg:flex space-x-6 text-xl text-black">
            {
              links.map((link) => {
                return (
                  <NavLink key={link.category} href={link.href}>
                    {link.category}
                  </NavLink>)
              })
            }
          </ul>
          <Link href="/login" className="hidden lg:flex items-center space-x-2 justify-center bg-[#000] text-white px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-[#2e2c2c] transition-all duration-500 ease-in-out">
            <SquarePen className="cursor-pointer" size={20} />
            <p className="">Post Content</p>
            {/* <div className="border-r border-[#12121272] h-3"></div>
            <Search className="cursor-pointer text-black" /> */}
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
