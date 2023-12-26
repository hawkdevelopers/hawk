"use client";
import React from "react";
// Motion
import { motion, useAnimate } from "framer-motion";
// Gsap
import { gsap } from "gsap";
// Style Sass
import "./herowelcome.scss";
import ButtonWelcome from "../../button-welcome/ButtonWelcome";
import Image from "next/image";

const HeroWelcome = () => {
  return (
    <motion.main
      className="hero-welcome"
      style={{
        position: "relative",
      }}
    >
      <article>
        <motion.h1>
          Ei, me chamo Diego<span>.</span>
        </motion.h1>
        <div id="typing">
          <motion.h2>
            Desenvolvedor Full Stack<span>.</span>
          </motion.h2>
        </div>
        <motion.p>
          Passei os últimos 5 anos construindo e dimensionando software para
          algumas empresas muito legais. Eu também ensino pessoas a pintar
          online (caso você tenha uma tela vazia por aí 🎨). Vamos nos conectar!
        </motion.p>
      </article>
      <ButtonWelcome />
    </motion.main>
  );
};

export default HeroWelcome;
