import React, { useState } from "react";
import "./Navbar.css";
import img1 from "./assets/Layer_1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Navbar-main-cont">
      <div className="nav-cont">

        <img className="image-logo" src={img1} alt="logo" />

        <ul className={menuOpen ? "nav-list active" : "nav-list"}>
          <li>Home</li>
          <li>About Us</li>
          <li>SAP Modules</li>
          <li>SAP Services</li>
          <li>SAP Fixes</li>
          <li>Contact Us</li>
        </ul>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;