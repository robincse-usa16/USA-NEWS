import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import BreakingTicker from "../components/layout/BreakingTicker";
import HeroSection from "../components/news/HeroSection";
import CategorySection from "../components/news/CategorySection";

import useFetchNews from "../hooks/useFetchNews";
import { getTopHeadlines, searchNews } from "../services/newsApi";

export default function Home() {
  const { data: heroNews } = useFetchNews(searchNews, "world");
  const { data: breaking } = useFetchNews(searchNews, "breaking");
  const { data: tech } = useFetchNews(getTopHeadlines, "technology");
  const { data: business } = useFetchNews(getTopHeadlines, "business");
  const { data: sports } = useFetchNews(getTopHeadlines, "sports");

  return (
    <>
      <TopBar />
      <Navbar />
      <BreakingTicker items={breaking} />
      <HeroSection articles={heroNews} />

      <CategorySection title="International" articles={heroNews} />
      <CategorySection title="Business" articles={business} />
      <CategorySection title="Technology" articles={tech} />
      <CategorySection title="Sports" articles={sports} />
    </>
  );
}
