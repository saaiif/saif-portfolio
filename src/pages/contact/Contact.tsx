import React, { RefObject, useState } from "react";
import "./Contact.scss";
import { motion, useScroll } from "framer-motion";
import MyImage from "../../assets/images/profile.jpeg";
import useScrollToSection from "../../hooks/useScrollToSection";
import Resume from "../intro/Resume";
import ContactForm from "./form";

import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../../assets/icons/Social";
import { Each } from "../../Utils";

type ContactProps = {
  contact: RefObject<any> | undefined;
  isDarkMode: string | null;
  resumeDownLoad: Boolean | false;
};

function Contact({ contact, isDarkMode, resumeDownLoad }: ContactProps) {
  const { scrollYProgress } = useScroll({
    target: contact,
    offset: ["start end", "end end"],
  });
  const fill = isDarkMode === "light" ? "#3a3e0a" : "#20cfac";

  const icons = [
    <GithubIcon fill={fill} />,
    <LinkedinIcon fill={fill} />,
    <InstagramIcon fill={fill} />,
  ];

  const links = [
    import.meta.env.VITE_GITHUB_LINK,
    import.meta.env.VITE_LINKEDIN_LINK,
    import.meta.env.VITE_INSTA_LINK,
  ];

  return (
    <motion.div style={{ scale: scrollYProgress, opacity: scrollYProgress }}>
      <motion.section className="contact" ref={contact} id="contact">
        <h1>Let's work together 🤝</h1>
        <code>
          You can reach out to me directly on <span>webbysaif@gmail.com</span>{" "}
          or fill this form below.
        </code>

        <ContactForm isDarkMode={isDarkMode} resumeDownLoad={resumeDownLoad} />
        {/* {resumeDownLoad ? (
          <div className="marquee">{import.meta.env.VITE_RESUME_ALERT}</div>
        ) : null} */}
        <div className="contact--social-links">
          <ul>
            <Each
              of={icons}
              render={(icon, index) => (
                <li>
                  <a href={links[index]} target="_blank" rel="">
                    {icon}
                  </a>
                  <p
                    style={{
                      visibility: "hidden",
                    }}
                  >
                    1 + index
                  </p>
                </li>
              )}
            />
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Contact;
