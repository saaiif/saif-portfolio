import React from "react";
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
function Contact({ contact }: any) {
  const { scrollYProgress } = useScroll({
    target: contact,
    offset: ["start end", "end end"],
  });

  const icons = [<GithubIcon />, <LinkedinIcon />, <InstagramIcon />];

  return (
    <motion.section
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      className="contact"
      ref={contact}
      id="contact"
    >
      <h1>Let's work together 🤝</h1>

      <ContactForm />
      <div className="contact--social-links">
        <ul>
          {icons?.map((icon, index) => (
            <li>
              {icon}
              <p
                style={{
                  visibility: "hidden",
                }}
              >
                {index}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default Contact;
