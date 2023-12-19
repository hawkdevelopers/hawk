import React from "react";
//Framer motion
import { AnimationProps, motion } from "framer-motion";
//Custom Style
import "@/styles/HeroWelcome.scss";
// Custom Button
import CustomButton from "@/utils/CustomButton";

const HeroArticle = () => {
  const mainPathVariant: AnimationProps = {
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
    variants: {
      visible: {
        pathLength: 1,
      },
      hidden: {
        pathLength: 0,
      },
    },
  };

  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 1.5,
        },
      }}
      viewport={{ once: true }}
      role="main"
      className="hero-article"
    >
      <motion.article role="article">
        <motion.h1 role="heading">
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

        <CustomButton />
      </motion.article>
    </motion.main>
  );
};

export default HeroArticle;
