"use client";
import React from "react";
// Framer Motion
import { motion } from "framer-motion";
// Style Sass
import "./heroexperience.scss";
import gsap from "gsap";

const HeroExperience = () => {
  React.useEffect(() => {
    const navElement = document.querySelector("nav.navigation");

    document.fonts.ready.then(() => {
      gsap.to(navElement, {
        "--active-element-show-shadow": 1,
        duration: 0.5,
      });
    });

    navElement?.querySelectorAll("ul li button").forEach((button, index) => {
      button.addEventListener("click", () => {
        const active = navElement.querySelector("ul li.active");

        active?.classList.remove("active");
        button.parentElement?.classList.add("active");
      });
    });
  }, []);

  return (
    <motion.main className="hero-experience">
      <motion.h2
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.25,
            duration: 0.5,
          },
        }}
        viewport={{
          once: true,
        }}
      >
        Carreira<span>.</span>
      </motion.h2>
      <section>
        <nav className="navigation">
          <ul className="controller-navigation">
            <li className="active">
              <button>Stone Finance</button>
            </li>
            <li>
              <button>Amaggi</button>
            </li>
            <li>
              <button>R Lima Brindes</button>
            </li>
          </ul>
        </nav>
      </section>
    </motion.main>
  );
};

export default HeroExperience;
