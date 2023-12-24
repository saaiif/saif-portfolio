import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import { Particle } from "./components/Particle.jsx";
import Intro from "./pages/intro/Intro";
import Skills from "./pages/skills/skills";
import useScrollToSection from "./hooks/useScrollToSection";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import useTheme from "./hooks/useTheme";

function App() {
  const { intro, skills, project, contact, scrollToSection } = useScrollToSection();
  const { isDarkMode, setIsDarkMode } = useTheme();
  return (
    <div className='app'>
      <Navbar
        intro={intro}
        skills={skills}
        project={project}
        contact={contact}
        scrollToSection={scrollToSection}
        setIsDarkMode={setIsDarkMode}
      />
      <Particle isDarkMode={isDarkMode} />
      <main>
        <Intro intro={intro} />
        <Skills skills={skills} isDarkMode={isDarkMode} />
        <Project project={project} />
        <Contact contact={contact} />
      </main>
    </div>
  );
}

//soumyajit.vercel.app/
//https://github.com/soumyajit4419/Portfolio/blob/master/src/index.css

export default App;
