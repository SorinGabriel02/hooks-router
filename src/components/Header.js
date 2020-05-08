import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const logoStyles = { textDecoration: "none", color: "black" };

  return (
    <header>
      <p>
        <Link to="/" style={logoStyles}>
          Photo Fix
        </Link>
      </p>
      <nav>
        <ul>
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/users">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
