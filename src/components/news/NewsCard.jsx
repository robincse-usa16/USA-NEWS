import { formatDate } from "../../utils/formatDate";
import { truncate } from "../../utils/truncateText";

export default function NewsCard({ item, large }) {
  if (!item) return null;
  return (
    <div className={`news-card ${large ? "large" : ""}`}>
      <img src={item.urlToImage || "https://via.placeholder.com/600x400"} />
      <div className="content">
        <h3>{item.title}</h3>
        {!large && <p>{truncate(item.description || "", 90)}</p>}
        <div className="meta">
          <span>{item.source?.name}</span>
          <span>{formatDate(item.publishedAt)}</span>
        </div>
        <a href={item.url} target="_blank">
          Read more →
        </a>
      </div>
    </div>
  );
}
