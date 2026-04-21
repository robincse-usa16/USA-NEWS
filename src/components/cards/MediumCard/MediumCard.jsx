import { useState } from "react";
import "./MediumCard.css";

export default function MediumCard({ item }) {
  const [likes, setLikes] = useState(100);
  const [liked, setLiked] = useState(false);

  return (
    <div className="medium-card">
      <img src={item.image} />

      <div className="content">
        <p className="meta">
          {item.source} • {item.time}
        </p>

        <h3>{item.title}</h3>

        <div className="actions">
          <button
            className={`like ${liked ? "active" : ""}`}
            onClick={() => {
              setLiked(!liked);
              setLikes(liked ? likes - 1 : likes + 1);
            }}
          >
            👍 {likes}
          </button>

          <button className="dislike">👎</button>
        </div>
      </div>
    </div>
  );
}
