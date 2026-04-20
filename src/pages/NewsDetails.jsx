import { useLocation } from "react-router-dom";
import NewsCard from "../components/news/NewsCard";

export default function NewsDetails() {
  const { state } = useLocation();
  const item = state;

  if (!item) return <h2>No News Found</h2>;

  return (
    <div className="details-page">
      <div className="details-left">
        <h1>{item.title}</h1>
        <img src={item.urlToImage} />
        <p>{item.description}</p>
        <p>
          This is full news content. You can replace it later with API data.
        </p>
      </div>

      <div className="details-right">
        <h3>Latest News</h3>

        {[1, 2, 3, 4].map((i) => (
          <NewsCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
