import HeroSection from "./components/HeroSection";
import Separator from "./layouts/Seperator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator />
      <div className="px-3 xl:px-8 2xl:px-12 font-semibold">
        <p>Trend </p>
      </div>
    </>
  );
}
