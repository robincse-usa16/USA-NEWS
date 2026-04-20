import { useLocation } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

export default function NewsDetails() {
  const { state } = useLocation();
  const item = state;

  if (!item) return <h2>No data found</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{item.title}</h1>
      <p>
        {formatDate(item.publishedAt)} • {item.source?.name}
      </p>
      <img src={item.urlToImage} />
      <p>{item.description}</p>
      <a href={item.url} target="_blank">
        Read full article
      </a>
    </div>
  );
}
