import React, { useEffect, useState } from "react";
import "./Project.scss";
import { motion } from "framer-motion";
import MyImage from "../../assets/images/profile.jpeg";
import useScrollToSection from "../../hooks/useScrollToSection";
import Resume from "../intro/Resume";
import { Each } from "../../Utils";
import { useWindowSize } from "../../hooks/useWindowSize";
import ProjectData from "./Projects.json";
import useScrollToAnimation from "../../hooks/useScrollAnimation";

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
  const [clickedIndex, setClickedIndex] = useState<number>(0);
  const { accessibilty, boxVariant, inView, control, sectionRef } =
    useScrollToAnimation();

  useEffect(() => {
    accessibilty();
  }, [control, inView]);

  return (
    <section className="projects" ref={project} id="project">
      <h1 datatype="Skills">Projects</h1>
      <div className="projects--tabs">
        {width && width > 570 ? (
          <Each
            of={tabs}
            render={(tab, index) => (
              <button
                onClick={() => setClickedIndex(index)}
                className={clickedIndex === index ? "active" : ""}
              >
                {tab}
              </button>
            )}
          />
        ) : (
          <select
            onChange={(e) => setClickedIndex(tabs.indexOf(e.target.value))}
          >
            {tabs.map((tab) => (
              <option value={tab} key={tab}>
                {tab}
              </option>
            ))}
          </select>
        )}
      </div>
      <motion.div
        ref={sectionRef}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="projects--cards-container"
      >
        {ProjectData?.map(
          ({ id, name, image, url, techstack, description, key }, index) => {
            if (
              (clickedIndex + 1 === key || clickedIndex === 0) &&
              index !== 5
            ) {
              return (
                <div
                  className={`flip ${
                    (index + 1) % 2 === 0 && "flip-vertical"
                  } `}
                  key={id}
                >
                  <div
                    className="front"
                    style={{
                      backgroundImage: `linear-gradient(#0001, #000), url(${image})`,
                    }}
                  >
                    <h1 className="text-shadow">{name}</h1>
                  </div>
                  <div className="back">
                    <h2>{techstack}</h2>
                    <p>{description}</p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="demo-btn"
                    >
                      Live Demo
                      <div id="clip">
                        <div id="leftTop" className="corner"></div>
                        <div id="rightBottom" className="corner"></div>
                        <div id="rightTop" className="corner"></div>
                        <div id="leftBottom" className="corner"></div>
                      </div>
                      <span id="rightArrow" className="arrow"></span>
                      <span id="leftArrow" className="arrow"></span>
                    </a>
                  </div>
                </div>
              );
            } else if (index === 0) {
              return (
                <>
                  <div className="waviy">
                    <span style={{ "--i": 1 } as React.CSSProperties}>c</span>
                    <span style={{ "--i": 2 } as React.CSSProperties}>o</span>
                    <span style={{ "--i": 3 } as React.CSSProperties}>m</span>
                    <span style={{ "--i": 4 } as React.CSSProperties}>i</span>
                    <span style={{ "--i": 5 } as React.CSSProperties}>n</span>
                    <span style={{ "--i": 6 } as React.CSSProperties}>g</span>
                    <span style={{ "--i": 7 } as React.CSSProperties}>s</span>
                    <span style={{ "--i": 8 } as React.CSSProperties}>o</span>
                    <span style={{ "--i": 9 } as React.CSSProperties}>o</span>
                    <span style={{ "--i": 1 } as React.CSSProperties}>n</span>
                  </div>
                </>
              );
            }
          },
        )}
      </motion.div>
    </section>
  );
}

export default Project;

{
  /* <div className="front">
<img src={image} alt="project-image" loading="lazy" />
<h1 className="text-shadow">{name}</h1>
</div> */
}
