import React, {
  useState,
  RefObject,
  Dispatch,
  SetStateAction,
  useRef,
  useCallback,
} from "react";
import "./Navbar.scss";
import DarkMode from "../darkMode/DarkMode";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  Link,
  animateScroll as scroll,
  Events,
  ScrollElement,
} from "react-scroll";
import ScrollAudio from "../../assets/sound/arrow-whoosh.wav";

type NavbarProps = {
  intro?: RefObject<any> | undefined;
  skills?: RefObject<any> | undefined;
  project?: RefObject<any> | undefined;
  contact?: RefObject<any> | undefined;
  scrollToSection?: (val: RefObject<any> | undefined) => void;
  setIsDarkMode?: Dispatch<SetStateAction<string | null>> | undefined;
  setResumeDownload: (val: Boolean) => void;
};

const Navbar = ({ setIsDarkMode, setResumeDownload }: NavbarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { width } = useWindowSize();
  let audio = new Audio(ScrollAudio);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleScrollCapture = (val?: any) => {
    const checkActiveClass = document.querySelectorAll("ul li a");
    const targetValue = val.target;

    // Remove "active" class from all elements
    Array.from(checkActiveClass).forEach((ele) => {
      ele.classList.remove("active");
    });

    // If the targetValue is not provided or doesn't have the "active" class, add "active" to the Intro element
    if (!targetValue || !targetValue.classList.contains("active")) {
      const introElement = document.querySelector("ul li a.intro");

      if (introElement) {
        introElement.classList.add("active");
      }
    }

    // Add "active" class to the desired element
    if (!targetValue?.className) {
      Array.from(checkActiveClass).forEach((ele) => {
        if (
          ele?.innerHTML?.toLowerCase() ===
          targetValue?.innerHTML?.toLowerCase()
        ) {
          ele.classList.add("active");
        }
      });
    }
    audio.play();
    width && width < 990 && toggleNavbar();
    setResumeDownload(false);
  };

  const handleSetActive = () => {
    audio.play();
  };

  return (
    <>
      <div className="navbar-container">
        <nav className={`navbar ${isExpanded ? "expanded" : "collapsed"}`}>
          <ul
            className={
              width && width < 990 && !isExpanded ? "navbar-display" : ""
            }
          >
            <li className="">
              <Link
                to="intro"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
                onClick={handleScrollCapture}
                onSetActive={handleSetActive}
              >
                Intro
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                isDynamic={true}
                onClick={handleScrollCapture}
                onSetActive={handleSetActive}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                isDynamic={true}
                onClick={handleScrollCapture}
                onSetActive={handleSetActive}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                onClick={handleScrollCapture}
                onSetActive={handleSetActive}
              >
                Contact
              </Link>
            </li>
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
        <DarkMode setIsDarkMode={setIsDarkMode} />
      </div>
    </>
  );
};

export default Navbar;
