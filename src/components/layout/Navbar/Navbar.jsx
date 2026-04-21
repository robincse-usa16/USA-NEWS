import "./Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <div className="logo">MyNews</div>
      </div>

      <div className="nav-center">
        <input placeholder="Search the web" />
      </div>

      <div className="nav-right">
        <span>🌤 36°C</span>
        <button className="icon-btn">⚙</button>
        <button className="signin">Sign in</button>
      </div>
    </div>
  );
}
