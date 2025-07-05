import type { Metadata } from "next";
import "./globals.css";
import { Familjen_Grotesk } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";
import { Search } from 'lucide-react';
import { CircleUser } from 'lucide-react';
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
        <nav className="flex justify-between items-center px-12 py-6 border-b-3 border-black">
          <div className="w-[70px] h-[30px] relative">
            <Link href="/about" className="">
              <Image src="/logo-dark.webp" priority fill alt="Logo" />
            </Link>
          </div>
          <ul className="flex space-x-6 font-semiboldd text-xl text-black">
            {
              links.map((link) => {
                return (
                  <NavLink key={link.category} href={link.href}>
                    {link.category}
                  </NavLink>)
              })
            }
          </ul>

          <div className="flex items-center space-x-2 justify-center">
            <CircleUser className="cursor-pointer text-black" />
            <div className="border-r border-[#12121272] h-3"></div>
            <Search className="cursor-pointer text-black" />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
