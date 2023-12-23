import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import MyImage from "../../assets/images/profile.jpeg";
import useScrollToSection from "../../hooks/useScrollToSection";
import Resume from "../intro/Resume";
function Contact({ contact }: any) {
  return (
    <section className='contact' ref={contact} id='contact'>
      <div className='intro--left'>
        <div className='intro--img'>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
            <img src={MyImage} alt='profile-pic' loading='lazy' />
          </motion.div>
          <motion.span
            className='img-hand-wave'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>

        <div className='intro--text'>
          <motion.h1
            className='intro--section'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{
              type: "spring",
              stiffness: 20,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            <span className='intro--span'>Hello, I'm Saif Mujawar.</span> <br />
            <br />
            I'm a <span className='intro--clip'>Frontend developer </span>
            with <span className='intro--span'>4+ years</span> of experience. I enjoy building
            <span className='intro--italic intro--clip'> sites & apps</span>. <br /> My focus is{" "}
            <span className='intro--underline'>React</span>.
          </motion.h1>
        </div>
      </div>
      <div className='intro--right'>
        <motion.h1
          className='intro--section'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 20,
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <Resume />
        </motion.h1>
      </div>
    </section>
  );
}

export default Contact;
