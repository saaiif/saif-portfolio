import { useRef } from "react";

const useScrollToSection = () => {
  const intro = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef: any) => {
    elementRef &&
      window?.scrollTo({
        top: elementRef?.current?.offsetTop,
        behavior: "smooth",
      });
  };

  return {
    intro,
    skills,
    project,
    contact,
    scrollToSection,
  };
};

export default useScrollToSection;
