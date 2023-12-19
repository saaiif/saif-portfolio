import React from "react";
import "./Intro.scss";
import { motion } from "framer-motion";
import MyImage from "../../assets/images/profile.jpeg";
import Resume from "./Resume";

function Intro() {
  return (
    <div className="intro">
      <div className="intro--left">
        <div className="intro--img">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <img src={MyImage} alt="profile-pic" loading="lazy" />
          </motion.div>
          <motion.span
            className="img-hand-wave"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
        <div className="intro--text">
          <motion.h1
            className="intro--section"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="intro--span">Hello, I'm Saif Mujawar.</span> <br />
            <br />
            I'm a <span className="intro--clip">Frontend developer </span>
            with <span className="intro--span">4+ years</span> of experience. I
            enjoy building
            <span className="intro--italic intro--clip">
              {" "}
              sites & apps
            </span>. <br /> My focus is{" "}
            <span className="intro--underline">React (Next.js)</span>.
          </motion.h1>
        </div>
      </div>
      <div className="intro--right">
        <motion.h1
          className="intro--section"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Resume />
        </motion.h1>
      </div>
    </div>
  );
}

export default Intro;
