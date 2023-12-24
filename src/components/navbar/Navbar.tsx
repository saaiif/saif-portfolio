import { useEffect, useState, RefObject, Dispatch, SetStateAction } from "react";
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

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection: any = null;

    refs?.forEach((section: any) => {
      const sectionOffsetTop = section?.current?.offsetTop;
      const sectionHeight = section?.current?.offsetHeight;
      if (pageYOffset >= sectionOffsetTop && pageYOffset >= sectionOffsetTop - sectionHeight / 2 - 60) {
        newActiveSection = section.current.id;
      }
    });
    console.log({ refs, newActiveSection });

    localStorage.setItem("activeSection", newActiveSection);
    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const getActiveSection = localStorage.getItem("activeSection") === "null" ? null : localStorage.getItem("activeSection");
    setActiveSection(getActiveSection);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar-container`}>
        <nav className={`navbar ${isExpanded ? "expanded" : "collapsed"}`}>
          <ul className={width && width < 990 && !isExpanded ? "navbar-display" : ""}>
            {path?.map(({ name, url }, index) => (
              <li
                key={url}
                onClick={() => scrollToSection?.(refs?.[index])}
                className={refs[index]?.current?.id === activeSection || (!activeSection && index === 0) ? "active" : ""}
              >
                {name}
              </li>
            ))}
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
