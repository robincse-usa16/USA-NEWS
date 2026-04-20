import NewsCard from "./NewsCard";

export default function HeroSection({ articles = [] }) {
  const main = articles[0];
  const side = articles.slice(1, 4);

  return (
    <section className="hero">
      {/* LEFT LIST */}
      <div className="hero-left">
        <h3>Recent News</h3>
        <ul>
          {articles.slice(0, 6).map((a, i) => (
            <li key={i}>{a.title}</li>
          ))}
        </ul>
      </div>

      {/* CENTER MAIN */}
      <div className="hero-center">
        {main && <NewsCard item={main} large />}
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        {side.map((a, i) => (
          <NewsCard key={i} item={a} />
        ))}
      </div>
    </section>
  );
}
