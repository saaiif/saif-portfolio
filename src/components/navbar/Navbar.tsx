import { useEffect, useRef, useState } from "react";
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

type NavbarProps = {
  intro?: any;
  skills?: any;
  project?: any;
  contact?: any;
  scrollToSection?: (val: any) => void;
};

const Navbar = ({
  intro,
  skills,
  project,
  contact,
  scrollToSection,
}: NavbarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { width } = useWindowSize();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<any>([]);
  const navLi = document.querySelectorAll("nav ul li");

  const refs = [intro, skills, project, contact];

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection: any = null;

    refs?.forEach((section: any) => {
      const sectionOffsetTop = section?.current?.offsetTop;
      const sectionHeight = section?.current?.offsetHeight;
      console.log(pageYOffset, sectionOffsetTop, sectionHeight, "hey");
      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset >= sectionOffsetTop - sectionHeight / 2
      ) {
        newActiveSection = section.current.id;
      }
    });
    setActiveSection(newActiveSection);
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(newActiveSection)) {
        li.classList.add("active");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(activeSection, refs, "ddddddd");
  return (
    <>
      <div className={`navbar-container`}>
        <nav className={`navbar ${isExpanded ? "expanded" : "collapsed"}`}>
          <ul
            className={
              width && width < 990 && !isExpanded ? "navbar-display" : ""
            }
          >
            {path?.map(({ name, url }, index) => (
              <li
                key={url}
                onClick={() => scrollToSection?.(refs[index])}
                className={
                  activeSection && refs[index]?.current?.id === activeSection
                    ? "active"
                    : !activeSection && index === 0
                      ? "active"
                      : ""
                }
              >
                {name}
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
