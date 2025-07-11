import { ArrowRight } from "lucide-react";
import HeroSection from "./components/HeroSection";
import Separator from "./layouts/Seperator";
import HeroMedium from "./layouts/HeroMedium";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator />
      <div className="px-3 xl:px-8 2xl:px-12 font-semibold">
        <p className="flex items-center">
          <span>Trend</span>
          <ArrowRight size={20} />
        </p>

        <div className="grid grid-cols-3 mt-5 mb-20">
          <HeroMedium title="Exploring the Evolution of Jazz: From Classic to Contemporary" date="Jan 7, 2025" category="Events" author="Joanna Wellick" views={3} image="/demo-image-3.webp" />
        </div>
      </div>
    </>
  );
}
