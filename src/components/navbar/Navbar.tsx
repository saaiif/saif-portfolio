import React, { useEffect, useState, RefObject, Dispatch, SetStateAction } from "react";
import "./Navbar.scss";
import DarkMode from "../darkMode/DarkMode";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link, animateScroll as scroll, Events } from "react-scroll";

const path = [
  {
    name: "Intro",
    url: "/intro",
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
  intro?: RefObject<any> | undefined;
  skills?: RefObject<any> | undefined;
  project?: RefObject<any> | undefined;
  contact?: RefObject<any> | undefined;
  scrollToSection?: (val: RefObject<any> | undefined) => void;
  setIsDarkMode?: Dispatch<SetStateAction<string | null>> | undefined;
};

const Navbar = ({ intro, skills, project, contact, scrollToSection, setIsDarkMode }: NavbarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { width } = useWindowSize();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const refs = [intro, skills, project, contact];

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const [selectedLink, setSelectedLink] = useState<string | undefined>(undefined);

  // const handleScroll = () => {
  //   const pageYOffset = window.scrollY;
  //   let newActiveSection: any = null;

  //   refs?.forEach((section: any) => {
  //     const sectionOffsetTop = section?.current?.offsetTop;
  //     const sectionHeight = section?.current?.offsetHeight;
  //     if (pageYOffset >= sectionOffsetTop && pageYOffset >= sectionOffsetTop - sectionHeight) {
  //       newActiveSection = section.current.id;
  //     }
  //   });
  //   console.log({ refs, newActiveSection });

  //   localStorage.setItem("activeSection", newActiveSection);
  //   setActiveSection(newActiveSection);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleClick);
  //   return () => {
  //     window.removeEventListener("scroll", handleClick);
  //   };
  // }, []);

  useEffect(() => {
    // Add event listener for scroll
    Events.scrollEvent.register("begin", (to, element) => {
      // Update selectedLink on scroll
      console.log(element.id);
      setSelectedLink(element.id);
    });

    return () => {
      // Remove event listener when the component is unmounted
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <>
      <div className='navbar-container'>
        <nav className={`navbar ${isExpanded ? "expanded" : "collapsed"}`}>
          <ul className={width && width < 990 && !isExpanded ? "navbar-display" : ""}>
            <li className=''>
              <Link
                className={refs?.[0]?.current?.id === selectedLink ? "active" : ""}
                // activeClass={refs?.[1]?.current?.id === selectedLink ? "active" : ""}
                to='intro'
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
              >
                Intro
              </Link>
            </li>
            <li>
              <Link
                className={refs?.[1]?.current?.id === selectedLink ? "active" : ""}
                // activeClass={refs?.[1]?.current?.id === selectedLink ? "active" : ""}
                to='skills'
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                isDynamic={true}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className={refs?.[2]?.current?.id === selectedLink ? "active" : ""}
                // activeClass={refs?.[1]?.current?.id === selectedLink ? "active" : ""}
                to='project'
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                isDynamic={true}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className={refs?.[3]?.current?.id === selectedLink ? "active" : ""}
                // activeClass={refs?.[1]?.current?.id === selectedLink ? "active" : ""}
                to='contact'
                spy={true}
                smooth={true}
                offset={-10}
                duration={100}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id='menu_button' className='hamburger-icon'>
        <input type='checkbox' id='menu_checkbox' checked={isExpanded} onChange={toggleNavbar} />
        <label htmlFor='menu_checkbox' id='menu_label'>
          <div id='menu_text_bar'></div>
        </label>
      </div>
      <div className='darkmode-icon'>
        <DarkMode setIsDarkMode={setIsDarkMode} />
      </div>
    </>
  );
};

export default Navbar;
