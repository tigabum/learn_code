import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [expandable, setExpandable] = useState(false);
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Learn Code
      </a>

      <div
        className={expandable ? "navigation-menu expanded" : "navigation-menu"}
      >
        <ul>
          <li>
            <a href="/Learn">Learn</a>
          </li>
          <li>
            <a href="/Teach">Teach</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="/Stats">Stats</a>
          </li>
          <li>
            <a href="/Help Us">Help Us</a>
          </li>
          <li>
            <a href="/Incubator">Incubator</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <button className="create">Create</button>
        <button className="signin">Sign In</button>
      </div>
      <button
        className="humburger"
        onClick={() => {
          setExpandable(!expandable);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
