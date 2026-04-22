import "./LargeCard.css";
import LargeSlider from "./LargeSlider";

export default function LargeCard({ item }) {
  // 🔥 1. SLIDER
  if (item.content === "slider") {
    return <LargeSlider slides={item.slides} />;
  }

  // 🔥 2. VIDEO / VIDEO AD
  if (item.content === "video" || item.content === "videoAd") {
    return (
      <div className="large-card">
        <video src={item.video} autoPlay muted loop />

        <div className="overlay">
          <p>
            {item.source} • {item.time}
          </p>
          <h2>{item.title}</h2>

          <div className="actions">👍 {item.likes} 👎</div>
        </div>
      </div>
    );
  }

  // 🔥 3. NORMAL NEWS
  return (
    <div className="large-card">
      <img src={item.image} alt="" />

      <div className="overlay">
        <p>
          {item.source} • {item.time}
        </p>
        <h2>{item.title}</h2>

        <div className="actions">👍 {item.likes} 👎</div>
      </div>
    </div>
  );
}
