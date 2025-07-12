import { ArrowRight } from "lucide-react";
import HeroSection from "./components/HeroSection";
import Separator from "./layouts/Seperator";
import Entertainment from "./components/Entertainment";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator />
      <Entertainment />
      <Separator />
      <div className="px-3 xl:px-8 2xl:px-12 font-semibold mb-10">
        <Link href="/tech" className="flex items-center">
          <span>Tech</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}
