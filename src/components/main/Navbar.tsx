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
