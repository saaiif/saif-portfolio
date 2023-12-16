import React, { useState } from "react";
import "./Navbar.scss";
import DarkMode from "../darkMode/DarkMode";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <nav className={`navbar ${isExpanded ? "expanded" : "collapsed"}`}>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div onClick={toggleNavbar} className='hamburger-icon'>
          ☰
        </div>
      </nav>
      <div className="darkmode-icon">
        <DarkMode />
      </div>
    </>
  );
};

export default Navbar;
