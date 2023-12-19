import React from "react";
//Framer motion
import {
  AnimationProps,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import "@/styles/HeroWelcome.scss";
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
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <motion.main
      ref={ref}
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
      <motion.article
        role="article"
        style={{
          y: backgroundY,
        }}
      >
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
