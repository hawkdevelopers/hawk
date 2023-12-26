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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="path-length"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
    },
    {
      title: "Motion Designer",
      description:
        "Designer de Motion Graphics dedicado a criar animações dinâmicas que enriquecem as interfaces, utilizando movimentos criativos para melhorar e dar vida às experiências do usuário de forma cativante.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="path-length"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
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
                duration: 3,
                repeatType: "mirror",
              },
            }}
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="path-length"
            d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
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
