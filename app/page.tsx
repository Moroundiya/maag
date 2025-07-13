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
     
    </>
  );
}
