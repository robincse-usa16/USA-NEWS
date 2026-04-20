import NewsCard from "./NewsCard";

export default function MixedCategory({ title, articles = [] }) {
  return (
    <section className="category">
      <h2>{title}</h2>

      {/* slider */}
      <div className="slider">
        {articles.slice(0, 5).map((item, i) => (
          <div className="slide-item" key={i}>
            <NewsCard item={item} />
          </div>
        ))}
      </div>

      {/* grid */}
      <div className="grid">
        {articles.slice(5, 9).map((item, i) => (
          <NewsCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
