import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import MyImage from "../../assets/images/profile.jpeg";
import useScrollToSection from "../../hooks/useScrollToSection";
import Resume from "../intro/Resume";
function Contact({ contact }: any) {
  return <section className="contact" ref={contact} id="contact"></section>;
}

export default Contact;
