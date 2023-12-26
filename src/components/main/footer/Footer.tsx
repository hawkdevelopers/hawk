"use client";
import React from "react";
// Framer Motion
import { motion } from "framer-motion";
// Styles
import "./footer.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.8,
          duration: 0.5,
        },
      }}
      viewport={{
        once: true,
      }}
      className="footer"
    >
      <main>
        <span>
          Copyright © 2023 <Link href="/">hawkdeveloper.com</Link>
        </span>
        <span>
          <h2>
            By Hawk<span>.</span>
          </h2>
        </span>
      </main>
    </motion.footer>
  );
};

export default Footer;
