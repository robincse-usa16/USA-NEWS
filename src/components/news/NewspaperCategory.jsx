import NewsCard from "./NewsCard";

export default function NewspaperCategory({ title, articles }) {
  return (
    <section className="category newspaper">
      <h2>{title}</h2>

      <div className="news-layout">
        <div className="left">
          {articles.slice(0, 3).map((a, i) => (
            <NewsCard key={i} item={a} />
          ))}
        </div>

        <div className="center big-news">
          <NewsCard item={articles[2]} large />
        </div>

        <div className="right">
          {articles.slice(3, 6).map((a, i) => (
            <NewsCard key={i} item={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
