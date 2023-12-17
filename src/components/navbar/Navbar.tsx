import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import DarkMode from "../darkMode/DarkMode";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const path = [
    {
      name: "About",
      url: "/",
    },
    {
      name: "Skills",
      url: "/skills",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <>
      <nav className={`navbar ${isExpanded ? "expanded" : "collapsed"}`}>
        <ul>
          {path?.map(({ name, url }) => (
            <li key={url}>
              <NavLink to={url} className={({ isActive }: { isActive?: boolean }): string => (isActive ? "active" : "")}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div id='menu_button' className='hamburger-icon'>
        <input type='checkbox' id='menu_checkbox' checked={isExpanded} onChange={toggleNavbar} />
        <label htmlFor='menu_checkbox' id='menu_label'>
          <div id='menu_text_bar'></div>
        </label>
      </div>
      <div className='darkmode-icon'>
        <DarkMode />
      </div>
    </>
  );
};

export default Navbar;
