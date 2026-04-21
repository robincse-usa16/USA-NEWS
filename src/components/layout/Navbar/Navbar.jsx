import "./Navbar.css";
import Container from "../../common/Container/Container";

export default function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <div className="nav-grid">
          {/* LEFT */}
          <div className="nav-left">
            <div className="logo">USA NEWS</div>
          </div>

          {/* CENTER */}
          <div className="nav-center">
            <input placeholder="Search the web" />
          </div>

          {/* RIGHT */}
          <div className="nav-right">
            <span>🌤 35°C</span>
            <button className="icon-btn">⚙</button>
            <button className="signin">Sign in</button>
          </div>
        </div>
      </Container>

      {/* CATEGORY BAR */}
      <div className="category-bar">
        <Container>
          <div className="category-container">
            <span className="active">Discover</span>
            <span>Sports</span>
            <span>Play</span>
            <span>Money</span>
            <span>Weather</span>
            <span>Watch</span>
          </div>
        </Container>
      </div>
    </div>
  );
}
