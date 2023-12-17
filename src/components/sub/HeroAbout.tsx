import React from "react";
// Framer motion
import { motion } from "framer-motion";
// Custom Style
import "@/styles/HeroAbout.scss";

import Image from "next/image";
import Social from "@/utils/Social";

const HeroAbout = () => {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        delay: 1.5,
        duration: 0.8,
      }}
      viewport={{ once: true }}
      role="main"
      className="hero-about"
    >
      <section>
        <motion.section
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 1.5,
              duration: 1,
            },
          }}
        >
          <div className="about-image" />
          <article>
            <h1>Quem sou</h1>
            <h2>Diego Vinicius</h2>
            <h3>Fullstack Developer & UI Designer</h3>
            <p>
              Olá, sou Diego Vinicius, mas muitos me conhecem como Red. Sou o
              cérebro por trás do projeto &ldquo;Hawk Developer`s&ldquo;, uma
              plataforma dedicada ao ensino de desenvolvimento web. Atualmente,
              trabalho como freelancer, desempenhando os papéis de Desenvolvedor
              Frontend e Designer UX/UI.
            </p>
            <section>
              <span>
                Meus Links
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                </svg>
              </span>
              <span>
                <Social />
              </span>
            </section>
          </article>
        </motion.section>
      </section>
    </motion.main>
  );
};

export default HeroAbout;
