import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import DarkMode from "../darkMode/DarkMode";
import { useWindowSize } from "../../hooks/useWindowSize";

const path = [
  {
    name: "Intro",
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

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { width } = useWindowSize();

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };
  console.log(width);
  return (
    <>
      <div className={`navbar-container`}>
        <nav className={`navbar ${isExpanded ? "expanded" : "collapsed"}`}>
          <ul className={width < 990 && !isExpanded ? "navbar-display" : ""}>
            {path?.map(({ name, url }) => (
              <li key={url}>
                <NavLink
                  to={url}
                  className={({ isActive }: { isActive?: boolean }): string =>
                    isActive ? "active" : ""
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="menu_button" className="hamburger-icon">
        <input
          type="checkbox"
          id="menu_checkbox"
          checked={isExpanded}
          onChange={toggleNavbar}
        />
        <label htmlFor="menu_checkbox" id="menu_label">
          <div id="menu_text_bar"></div>
        </label>
      </div>
      <div className="darkmode-icon">
        <DarkMode />
      </div>
    </>
  );
};

export default Navbar;
