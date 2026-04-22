import "./NewsGrid.css";
import data from "../../data/dummyNews";
import CardRenderer from "../cards/CardsRender/CardRenderer";

/**
 * Dynamic grid layout
 */
export default function NewsGrid() {
  return (
    <div className="news-grid">
      {data.map((item, index) => (
        <div
          key={index}
          className={`grid-item ${item.type === "L" ? "large" : ""}`}
        >
          <CardRenderer item={item} />
        </div>
      ))}
    </div>
  );
}
