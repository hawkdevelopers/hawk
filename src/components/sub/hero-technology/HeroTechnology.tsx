import React from "react";
// Framer Motion
import { motion } from "framer-motion";
// Style Sass
import "./herotechnology.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const HeroTechnology = () => {
  const technology = [
    { name: "Typescript", svg: "/typescript.svg" },
    { name: "Javascript", svg: "/javascript.svg" },
    { name: "React", svg: "/react.svg" },
    { name: "Next", svg: "/next.svg" },
    { name: "Tailwind", svg: "/tailwind.svg" },
    { name: "Sass", svg: "/sass.svg" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.main className="hero-technology">
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
        Tecnologias<span>.</span>
      </motion.h2>
      <motion.section className="card-technology">
        {technology.map((card, index) => (
          <motion.section
            key={index}
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
          >
            <main>
              <Image
                width={40}
                height={40}
                src={card.svg}
                alt={card.name}
                style={{
                  cursor: "pointer",
                }}
              />
            </main>
          </motion.section>
        ))}
      </motion.section>
    </motion.main>
  );
};

export default HeroTechnology;
