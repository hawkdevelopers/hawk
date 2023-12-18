"use client";
import React from "react";
// Framer Motion
import {
  AnimationProps,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
// Style Navbar
import "@/styles/Navbar.scss";

import Logo from "@/utils/Logo";
import Social from "@/utils/Social";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      return;
    }
    setHidden(false);
  });

  const scroolYAnimationProps: AnimationProps = {
    variants: {
      visible: {
        y: 0,
      },
      hidden: {
        y: "-100%",
      },
    },
    transition: {
      delay: 0.25,
      duration: 0.5,
      ease: "linear",
    },
  };

  return (
    <motion.header
      {...scroolYAnimationProps}
      animate={hidden ? "hidden" : "visible"}
      className="navigation"
    >
      <section>
        <section>
          <Logo />
        </section>
        <nav role="navigation">
          <Social />
        </nav>
      </section>
    </motion.header>
  );
};

export default Navbar;
