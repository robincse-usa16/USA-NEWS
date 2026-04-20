import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import BreakingTicker from "../components/layout/BreakingTicker";
import HeroSection from "../components/news/HeroSection";

import RowCategory from "../components/news/RowCategory";
import NewspaperCategory from "../components/news/NewspaperCategory";

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

      {/* 1st → Row */}
      <RowCategory title="Trending News" articles={worldNews} />

      {/* 2nd → Newspaper */}
      <NewspaperCategory title="International" articles={worldNews} />

      {/* 3rd → Row */}
      <RowCategory title="Business" articles={businessNews} />

      {/* 4th → Newspaper */}
      <NewspaperCategory title="Technology" articles={techNews} />

      <RowCategory title="Sports" articles={sportsNews} />
    </>
  );
}
