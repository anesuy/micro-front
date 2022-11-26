import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <ul>
        <li>Instagram</li>
        <li>
          <Link to="/github-page">GitHub</Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/suyaneoden/">LinkedIn</Link>
        </li>
        <li>Career</li>
        <li>Skills</li>
      </ul>
    </header>
  );
}

export default Header;
