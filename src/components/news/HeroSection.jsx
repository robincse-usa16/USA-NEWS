import NewsCard from "./NewsCard";

export default function HeroSection({ articles = [] }) {
  const main = articles[0];
  const side = articles.slice(1, 4);

  return (
    <section className="hero">
      <div className="left">
        <h4>Recent News</h4>
        <ul>
          {articles.slice(0, 6).map((a, i) => (
            <li key={i}>{a.title}</li>
          ))}
        </ul>
      </div>

      <div className="center">
        <NewsCard item={main} large />
      </div>

      <div className="right">
        {side.map((a, i) => (
          <NewsCard key={i} item={a} />
        ))}
      </div>
    </section>
  );
}
