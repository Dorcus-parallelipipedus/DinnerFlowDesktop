import React from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        Dinner<span>Flow</span>
      </Link>
      <ul>
        <li>
          <Link to="/list">Lista</Link>
        </li>
        <li>
          <Link to="/dinner">Dania</Link>
        </li>
        <li>
          <Link to="/demand">Zapotrzebowanie</Link>
        </li>
        <li>
          <Link to="order">Zamówienia</Link>
        </li>
      </ul>
    </nav>
  );
};
