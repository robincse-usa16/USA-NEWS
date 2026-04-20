import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import BreakingTicker from "../components/layout/BreakingTicker";
import HeroSection from "../components/news/HeroSection";
import CategorySection from "../components/news/CategorySection";

import {
  worldNews,
  businessNews,
  techNews,
  sportsNews,
} from "../data/dummyNews";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <BreakingTicker items={worldNews} />
      <HeroSection articles={worldNews} />

      <CategorySection title="International" articles={worldNews} />
      <CategorySection title="Business" articles={businessNews} />
      <CategorySection title="Technology" articles={techNews} />
      <CategorySection title="Sports" articles={sportsNews} />
    </>
  );
}
