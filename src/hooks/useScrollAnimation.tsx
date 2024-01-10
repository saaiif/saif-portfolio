import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useScrollToAnimation = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  function accessibilty() {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }

  return {
    control,
    sectionRef: ref,
    inView,
    accessibilty,
    boxVariant,
  };
};

export default useScrollToAnimation;
