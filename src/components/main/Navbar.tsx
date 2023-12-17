"use client";
import React from "react";
// Framer Motion
import { motion } from "framer-motion";
// Style Navbar
import "@/styles/Navbar.scss";

import Logo from "@/utils/Logo";
import Social from "@/utils/Social";

const Navbar = () => {
  return (
    <motion.header
      role="banner"
      className="navigation"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        delay: 0.25,
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      <div>
        <div>
          <Logo />
        </div>
        <nav role="navigation">
          <Social />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
