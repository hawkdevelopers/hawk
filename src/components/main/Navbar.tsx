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
