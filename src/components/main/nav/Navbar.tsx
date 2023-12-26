"use client";
import React from "react";

// Motion
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
// Style Sass
import "./navbar.scss";
import Link from "next/link";

const Navbar = () => {
  const [hidden, setHidden] = React.useState<boolean>(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      return;
    }
    setHidden(false);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: {
          y: "-200%",
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        delay: 0.25,
        duration: 0.5,
      }}
      className="navigation"
    >
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
                href="https://linkedin.com/in/diego-vinicius-66053a1a3/"
                target="_blank"
                aria-label="Social Media"
                whileHover={{
                  color: "#F4CE14",

                  transition: {
                    delay: 0.25,
                    duration: 0.5,
                  },
                }}
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
                href="https://github.com/hawkdevelopers"
                target="_blank"
                aria-label="Social Media"
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
                href="https://www.instagram.com/srvinirox.eth/"
                target="_blank"
                aria-label="Social Media"
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
