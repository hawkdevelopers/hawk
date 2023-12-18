import React from "react";
// Framer Motion
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.8,
        },
      }}
      role="heading"
      className="logo"
    >
      <a href="#" role="link">
        Hawk <span>.</span>
      </a>
    </motion.h1>
  );
};

export default Logo;
