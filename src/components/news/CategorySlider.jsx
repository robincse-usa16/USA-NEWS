import NewsCard from "./NewsCard";

export default function CategorySlider({ title, articles = [] }) {
  return (
    <section className="category">
      <h2>{title}</h2>

      <div className="slider">
        {articles.map((item, i) => (
          <div className="slide-item" key={i}>
            <NewsCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
