import HeroSection from "./components/HeroSection";
import Separator from "./layouts/Seperator";
import Entertainment from "./components/Entertainment";
import Tech from "./components/Tech";
import Politics from "./components/Politics";
import Sports from "./components/Sports";
import Health from "./components/Health";
import LatestPosts from "./components/LatestPosts";

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
      <Separator />
      <Sports />
      <Separator />
      <Health />
      <Separator />
      <LatestPosts />
    </>
  );
}
