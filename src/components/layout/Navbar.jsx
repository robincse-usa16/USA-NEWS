import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* LEFT MENU BUTTON (ONLY MOBILE) */}
        <div className="menu-btn" onClick={() => setOpen(true)}>
          ☰
        </div>

        {/* CENTER MENU */}
        <div className="nav-center">
          <a href="#">Home</a>
          <a href="#">International</a>
          <a href="#">Business</a>
          <a href="#">Technology</a>
          <a href="#">Sports</a>
        </div>
      </nav>

      {/* SIDE DRAWER */}
      <div className={`side-menu ${open ? "active" : ""}`}>
        <span className="close" onClick={() => setOpen(false)}>
          ×
        </span>

        <a>Home</a>
        <a>International</a>
        <a>Business</a>
        <a>Technology</a>
        <a>Sports</a>
      </div>
    </>
  );
}
