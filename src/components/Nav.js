import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>
        <Link to="/" style={navStyle}>
          LOGO
        </Link>
      </h3>
      <ul className="nav-links">
        <li>
          <Link to="/about" style={navStyle}>
            About Page
          </Link>
        </li>
        <li>
          <Link to="/shop" style={navStyle}>
            Shop Page
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
