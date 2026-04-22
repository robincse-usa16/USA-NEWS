import "./Navbar.css";
import Container from "../../common/Container/Container";

export default function Navbar() {
  return (
    <header className="navbar">
      <Container>
        <div className="nav-wrapper">
          {/* LEFT */}
          <div className="nav-left">
            <h2 className="logo">USA NEWS</h2>
          </div>

          {/* CENTER */}
          <div className="nav-center">
            <div className="search-box">
              <span>🔍</span>
              <input placeholder="Search the web" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="nav-right">
            <div className="weather">🌤 35°C</div>
            <button className="signin">Sign in</button>
          </div>
        </div>
      </Container>

      {/* CATEGORY */}
      <div className="nav-bottom">
        <Container>
          <div className="categories">
            <span className="active">Discover</span>
            <span>Sports</span>
            <span>Play</span>
            <span>Money</span>
            <span>Weather</span>
            <span>Watch</span>
          </div>
        </Container>
      </div>
    </header>
  );
}
