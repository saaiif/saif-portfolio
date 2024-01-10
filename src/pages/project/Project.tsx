import React from "react";
import "./Project.scss";
import { motion } from "framer-motion";
import MyImage from "../../assets/images/profile.jpeg";
import useScrollToSection from "../../hooks/useScrollToSection";
import Resume from "../intro/Resume";
import { Each } from "../../Utils";
import { useWindowSize } from "../../hooks/useWindowSize";

const tabs = [
  "All",
  "HTML/CSS",
  "JavaScript",
  "React.JS",
  "Next.JS",
  "Fullstack",
];
function Project({ project }: any) {
  const { width } = useWindowSize();
  return (
    <section className="projects" ref={project} id="project">
      <h1 datatype="Skills">Projects</h1>
      <div className="projects--tabs">
        {width && width > 570 ? (
          <Each of={tabs} render={(tab, index) => <button>{tab}</button>} />
        ) : (
          <select>
            {tabs.map((tab) => (
              <option value={tab}>{tab}</option>
            ))}
          </select>
        )}
      </div>
      <div className="projects--cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </section>
  );
}

export default Project;
