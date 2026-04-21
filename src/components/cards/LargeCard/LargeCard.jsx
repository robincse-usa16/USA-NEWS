import "./LargeCard.css";

export default function LargeCard({ item }) {
  return (
    <div className="large-card">
      <img src={item.image} />
      <div className="overlay">
        <h2>{item.title}</h2>
      </div>
    </div>
  );
}
