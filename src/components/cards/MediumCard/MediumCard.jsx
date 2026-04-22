export default function MediumCard({ item }) {
  // 🔥 WEATHER CARD
  if (item.content === "weather") {
    return (
      <div className="medium-card">
        <h3>Dhaka</h3>
        <h2>34°C</h2>
        <p>Hot outside</p>
      </div>
    );
  }

  // 🔥 TRENDING
  if (item.content === "trending") {
    return (
      <div className="medium-card">
        <h4>Trending</h4>
        <ul>
          <li>Stock market rising</li>
          <li>AI future trends</li>
          <li>Tech layoffs</li>
        </ul>
      </div>
    );
  }

  // 🔥 GAME
  if (item.content === "game") {
    return (
      <div className="medium-card">
        <h4>Games</h4>
        <p>🎮 🎲 🧩</p>
      </div>
    );
  }

  // 🔥 AD
  if (item.content === "ad") {
    return (
      <div className="medium-card">
        <p>Sponsored</p>
        <div style={{ height: "120px", background: "#eee" }} />
      </div>
    );
  }

  // 🔥 NORMAL NEWS
  return (
    <div className="medium-card">
      <img src={item.image} />

      <div className="info">
        <p>
          {item.source} • {item.time}
        </p>
        <h4>{item.title}</h4>

        <div>👍 {item.likes} 👎</div>
      </div>
    </div>
  );
}
