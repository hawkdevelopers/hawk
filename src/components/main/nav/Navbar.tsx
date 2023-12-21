"use client";
import React from "react";

// Motion
import { motion } from "framer-motion";
// Style Sass
import "./navbar.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.header className="navigation">
      <section>
        <div>
          <Link href="/">
            Hawk<span>.</span>
          </Link>
        </div>
        <nav>
          <ul>
            <motion.li
              whileHover={{
                scale: 0.9,
                transition: {
                  delay: 0.25,
                  duration: 0.5,
                },
              }}
            >
              <motion.a
                whileHover={{
                  color: "#F4CE14",

                  transition: {
                    delay: 0.25,
                    duration: 0.5,
                  },
                }}
                href="#"
              >
                <i className="fa-brands fa-linkedin" />
              </motion.a>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 0.9,
                transition: {
                  delay: 0.25,
                  duration: 0.5,
                },
              }}
            >
              <motion.a
                href="#"
                whileHover={{
                  color: "#F4CE14",
                  transition: {
                    delay: 0.25,
                    duration: 0.5,
                  },
                }}
              >
                <i className="fa-brands fa-github" />
              </motion.a>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 0.9,
                transition: {
                  delay: 0.25,
                  duration: 0.5,
                },
              }}
            >
              <motion.a
                href="#"
                whileHover={{
                  color: "#F4CE14",
                  transition: {
                    delay: 0.25,
                    duration: 0.5,
                  },
                }}
              >
                <i className="fa-brands fa-instagram" />
              </motion.a>
            </motion.li>
          </ul>
        </nav>
      </section>
    </motion.header>
  );
};

export default Navbar;
