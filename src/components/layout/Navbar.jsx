const items = [
  "Home",
  "International",
  "Business",
  "Politics",
  "Technology",
  "Sports",
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="menu">☰</div>
      <div className="nav-links">
        {items.map((i) => (
          <a key={i} href="#">
            {i}
          </a>
        ))}
      </div>
      <div className="nav-date">{new Date().toDateString()}</div>
    </nav>
  );
}
