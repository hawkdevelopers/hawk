import React from "react";
// Motion
import { motion, useAnimate } from "framer-motion";
// Gsap
import { gsap } from "gsap";
// Style Sass
import "./heroskill.scss";
const HeroSkill = () => {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    document.querySelectorAll(".card").forEach((card, i) => {
      if (card instanceof HTMLElement) {
        const path = card.querySelectorAll(".path-length");
        card.onmousemove = (e) => {
          let x = e.pageX - card.offsetLeft;
          let y = e.pageY - card.offsetTop;

          gsap.set(card, {
            "--x": x + "px",
            "--y": y + "px",
          });
        };
        card.onmouseenter = () => {
          animate(
            path,
            { pathLength: 0 },
            { duration: 2, repeat: 1, repeatType: "reverse" }
          );
        };
        card.onmouseleave = () => {
          animate(path, { pathLength: 1 }, { duration: 3 });
        };
      }
    });
  }, [animate]);

  const Skill = [
    {
      title: "UI/UX Designer",
      description:
        "UI/UX Designer especializado em criar interfaces intuitivas, esteticamente atraentes e centradas no usuário para proporcionar experiências digitais funcionais e envolventes.",
      svg: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            ref={scope}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                duration: 3,
                repeatType: "mirror",
              },
            }}
            d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
            stroke="#F4CE14"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="path-length"
          />
        </svg>
      ),
    },
    {
      title: "Motion Designer",
      description:
        "Designer de Motion Graphics dedicado a criar animações dinâmicas que enriquecem as interfaces, utilizando movimentos criativos para melhorar e dar vida às experiências do usuário de forma cativante.",
      svg: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            ref={scope}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                duration: 3,
                repeatType: "mirror",
              },
            }}
            stroke="#F4CE14"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="path-length"
            d="M22,11H12a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V12A1,1,0,0,0,22,11ZM21,21H13V13h8ZM2,13a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H12a1,1,0,0,1,0,2H3v9A1,1,0,0,1,2,13ZM17,6a1,1,0,0,1,0,2H8v9a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z"
          />
        </svg>
      ),
    },
    {
      title: "Desenvolvimento",
      description:
        "Desenvolvedor web apaixonado por criar soluções digitais inovadoras, focado na construção de interfaces funcionais, responsivas e visualmente atraentes, priorizando a usabilidade para oferecer experiências online memoráveis.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <motion.path
            ref={scope}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                duration: 2,
                repeatType: "mirror",
              },
            }}
            className="path-length"
            d="M7 8L3 12L7 16"
            stroke="#F4CE14"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            ref={scope}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                duration: 2,
                repeatType: "mirror",
              },
            }}
            className="path-length"
            d="M17 8L21 12L17 16"
            stroke="#F4CE14"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            ref={scope}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                duration: 2,
                repeatType: "mirror",
              },
            }}
            className="path-length"
            d="M14 4L9.8589 19.4548"
            stroke="#F4CE14"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.section viewport={{ once: true }} className="hero-skill">
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
        Habilidades<span>.</span>
      </motion.h2>
      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.8,
          },
        }}
        viewport={{
          once: true,
        }}
        className="grid-skill"
      >
        {Skill.map((card, index) => (
          <section key={index} className="card">
            <section>{card.svg}</section>
            <section>
              <article>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </article>
            </section>
          </section>
        ))}
      </motion.section>
    </motion.section>
  );
};

export default HeroSkill;
