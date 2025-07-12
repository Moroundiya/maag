import { ArrowRight } from "lucide-react";
import HeroSection from "./components/HeroSection";
import Separator from "./layouts/Seperator";
import HeroMedium from "./layouts/HeroMedium";
import HeroSmall from "./layouts/HeroSmall";
import Entertainment from "./components/Entertainment";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator />
      <Entertainment />
    </>
  );
}
