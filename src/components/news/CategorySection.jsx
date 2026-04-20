import NewsCard from "./NewsCard";

export default function CategorySection({ title, articles = [] }) {
  return (
    <section className="category">
      <h2>{title.toUpperCase()}</h2>
      <div className="grid">
        {articles.slice(0, 6).map((a, i) => (
          <NewsCard key={i} item={a} />
        ))}
      </div>
    </section>
  );
}
