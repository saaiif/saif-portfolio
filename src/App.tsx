import React, { useState } from "react";
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
  const { intro, skills, project, contact } = useScrollToSection();
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [resumeDownLoad, setResumeDownload] = useState<Boolean>(false);
  return (
    <div className="app">
      <Navbar
        setIsDarkMode={setIsDarkMode}
        setResumeDownload={setResumeDownload}
      />
      <Particle isDarkMode={isDarkMode} />
      <main>
        <Intro intro={intro} setResumeDownload={setResumeDownload} />
        <Skills skills={skills} isDarkMode={isDarkMode} />
        <Project project={project} />
        <Contact
          contact={contact}
          isDarkMode={isDarkMode}
          resumeDownLoad={resumeDownLoad}
        />
      </main>
    </div>
  );
}

//soumyajit.vercel.app/
//https://github.com/soumyajit4419/Portfolio/blob/master/src/index.css

export default App;
