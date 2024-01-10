import React, { RefObject, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
  AntDIcon,
  BootStrapIcon,
  ContextAPIcon,
  CssIcon,
  FirebaseIcon,
  GitIcon,
  GraphQLIcon,
  HtmlIcon,
  JSIcon,
  MUIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  TSIcon,
  TailwindIcon,
} from "../../assets/icons/skills";
import "./Skills.scss";
import useScrollToAnimation from "../../hooks/useScrollAnimation";

type SkillsProps = {
  skills: RefObject<any> | undefined;
  isDarkMode: string | null;
};

const learningInProgress = ["Node.JS", "GraphQL", "Others new tech"];

function Skills({ skills, isDarkMode }: SkillsProps) {
  const { accessibilty, boxVariant, inView, control, sectionRef } =
    useScrollToAnimation();

  useEffect(() => {
    accessibilty();
  }, [control, inView]);

  console.log({ sectionRef });

  return (
    <section ref={skills} className="skills-page" id="skills">
      <h1 datatype="Skills">Skills</h1>
      {/* languages */}
      <motion.div
        ref={sectionRef}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="skills-page--skills"
      >
        <div className="skills-page--languages">
          <h2 datatype="Skills">Languages/Libraries</h2>
          <ul>
            <li>
              <HtmlIcon />
              <span>HTML5</span>
            </li>
            <li>
              <CssIcon />
              <span>CSS3</span>
            </li>
            <li>
              <JSIcon />
              <span>JavaScript</span>
            </li>
            <li>
              <ReactIcon className="SpinIcon" />
              <span>React</span>
            </li>
            <li>
              <NextIcon />
              <span>Next.JS</span>
            </li>
            <li>
              <TSIcon />
              <span>TypeScript</span>
            </li>
            <li>
              <FirebaseIcon />
              <span>Firebase</span>
            </li>
            <li>
              <ReduxIcon />
              <span>Redux (thunk | saga)</span>
            </li>
            <li>
              <ContextAPIcon className="ZoomIcon" />
              <span>Context API</span>
            </li>
          </ul>
        </div>

        <div className="skills-page--languages">
          <h2 datatype="Skills">CSS Frameworks</h2>
          <ul>
            <li>
              <MUIcon />
              <span>Material UI</span>
            </li>
            <li>
              <AntDIcon />
              <span>Ant Design</span>
            </li>
            <li>
              <BootStrapIcon />
              <span>Bootstrap</span>
            </li>
            <li>
              <TailwindIcon />
              <span>Tailwind CSS</span>
            </li>
          </ul>
        </div>

        {/* devtools */}
        <div className="skills-page--languages">
          <h2 datatype="Skills">Devtools</h2>
          <ul>
            <li>
              <GitIcon />
              <span>Git</span>
            </li>
          </ul>
          <h2 datatype="Skills">Learn in progress</h2>
          <ul>
            <li>
              <NodeIcon />
              <span>Node.JS</span>
            </li>
            <li>
              <GraphQLIcon />
              <span>GraphQL</span>
            </li>
            <br />
            <li>
              <span>Other new tech...</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
