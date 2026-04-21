import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="card-widget weather">
        <h4>Dhaka</h4>
        <h2>34°C</h2>
        <p>Hot outside</p>
      </div>

      <div className="card-widget">
        <h4>Trending</h4>
        <ul>
          <li>Stock market rising</li>
          <li>AI future trends</li>
          <li>Tech layoffs update</li>
        </ul>
      </div>

      <div className="card-widget">
        <h4>Games</h4>
        <div className="games">
          <div>🎮</div>
          <div>🃏</div>
          <div>🎲</div>
          <div>🧩</div>
        </div>
      </div>

      <div className="card-widget sponsor">
        <p>Sponsored</p>
        <h4>Shop deals now</h4>
      </div>
    </div>
  );
}
