import { useNavigate } from "react-router-dom";

export default function NewsCard({ item, large }) {
  const navigate = useNavigate();

  return (
    <div
      className={`news-card ${large ? "large" : ""}`}
      onClick={() => navigate("/news", { state: item })}
    >
      <img src={item.urlToImage} />
      <div className="content">
        <h3>{item.title}</h3>
      </div>
    </div>
  );
}
