import HeroSection from "./components/HeroSection";
import Separator from "./layouts/Seperator";
import Entertainment from "./components/Entertainment";
import Tech from "./components/Tech";
import Politics from "./components/Politics";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator />
      <Entertainment />
      <Separator />
      <Tech />
      <Separator />
      <Politics />
    </>
  );
}
