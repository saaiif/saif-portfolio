import React, { RefObject, useEffect } from "react";
import { motion } from "framer-motion";
import Resume from "./Resume";
import MyImage from "../../assets/images/linkedin.png";
import MyNameImg from "../../assets/images/nametxt.png";
import "./Intro.scss";
import useScrollToAnimation from "../../hooks/useScrollAnimation";

type IntroProps = {
  intro: RefObject<any> | undefined;
  setResumeDownload: (val: boolean) => void;
};

function Intro({ intro, setResumeDownload }: IntroProps) {
  const { accessibilty, boxVariant, inView, control, sectionRef } =
    useScrollToAnimation();

  useEffect(() => {
    accessibilty();
  }, [control, inView]);

  return (
    <motion.section className='intro' ref={intro} id='intro'>
      <motion.div
        ref={sectionRef}
        variants={boxVariant}
        initial='hidden'
        animate={control}
        className='intro--container'
      >
        <div className='intro--left'>
          <div className='intro--img'>
            <img src={MyImage} alt='profile-pic' loading='lazy' />
            <span className='img-hand-wave'>👋</span>
          </div>

          <div className='intro--text'>
            <h1 className='intro--section'>
              <span className='intro--span'>
                Hello, I'm <br />
                <span className='name'>
                  <img src={MyNameImg} alt='name' loading='lazy' />
                </span>
                .
              </span>{" "}
              <br />A <span className='intro--clip'>Frontend developer </span>
              with <span className='intro--span'>4+ years</span> of experience.
              I enjoy building
              <span className='intro--italic intro--clip'>
                {" "}
                sites & apps
              </span>. <br /> <br /> My focus is
              <span className='intro--underline'> React (Next.JS)</span>.
            </h1>
          </div>
        </div>
        <div className='intro--right'>
          <h1 className='intro--section'>
            <Resume setResumeDownload={setResumeDownload} />
          </h1>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Intro;
