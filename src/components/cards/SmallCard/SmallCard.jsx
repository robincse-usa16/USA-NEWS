import "./SmallCard.css";

export default function SmallCard({ item }) {
  return (
    <div className="small-card">
      <img src={item.image} />
      <p>{item.title}</p>
    </div>
  );
}
