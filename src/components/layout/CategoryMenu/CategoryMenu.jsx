import "./CategoryMenu.css";

export default function CategoryMenu() {
  const menu = ["Home", "News", "Sports", "Tech"];

  return (
    <div className="menu">
      {menu.map((m, i) => (
        <span key={i}>{m}</span>
      ))}
    </div>
  );
}
