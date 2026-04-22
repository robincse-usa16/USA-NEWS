import { useState, useEffect } from "react";
import "./LargeCard.css";

export default function LargeSlider({ slides }) {
  const [index, setIndex] = useState(0);

  // 🔁 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="large-card">
      {slides.map((item, i) => (
        <div key={i} className={`slide ${i === index ? "active" : ""}`}>
          <img src={item.image} />

          <div className="overlay">
            <p>
              {item.source} • {item.time}
            </p>
            <h2>{item.title}</h2>

            <div className="actions">👍 {item.likes} 👎</div>
          </div>
        </div>
      ))}

      {/* dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
