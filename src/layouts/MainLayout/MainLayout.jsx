import CardRenderer from "../../components/cards/CardsRender/CardRenderer";
import data from "../../data/dummyNews";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="main-layout">
      {/* 🔥 FULL WIDTH GRID */}
      <div className="news-grid">
        {data.map((item, i) => (
          <div
            key={i}
            className={`grid-item ${item.type === "large" ? "large" : ""}`}
          >
            <CardRenderer item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
