import React from "react";
// Framer Motion
import { AnimatePresence, motion } from "framer-motion";
// Style Sass
import "./heroproject.scss";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import gsap from "gsap";

const HeroProject = () => {
  const [isInView, setIsInView] = React.useState<boolean>(false);
  const technology = [
    { name: "Typescript", svg: "/typescript.svg" },
    { name: "Next", svg: "/next.svg" },
    { name: "Framer", svg: "/framer.svg" },
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

  React.useEffect(() => {
    document.querySelectorAll(".view").forEach((hover, index) => {
      if (hover instanceof HTMLElement) {
        hover.onmousemove = () => {
          setIsInView(true);
        };
        hover.onmouseleave = () => {
          setIsInView(false);
        };
      }
    });
  }, []);

  return (
    <motion.main className="hero-project">
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
        Projetos<span>.</span>
      </motion.h2>
      <section className="hero-content">
        <motion.article
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
        >
          <h1>A História da Igreja Adventista</h1>
          <h2>Raízes, Crenças e Crescimento Global</h2>
          <p>
            A Igreja Adventista do Sétimo Dia tem suas raízes no Movimento
            Millerita do século XIX nos Estados Unidos, centrado na expectativa
            da segunda vinda de Jesus Cristo. Após o Grande Desapontamento em
            1844, líderes como Ellen G. White emergiram com ensinamentos sobre a
            importância do sábado, saúde e estilo de vida. Ao longo do tempo, a
            igreja expandiu-se globalmente, estabelecendo-se em mais de 200
            países, enfatizando não apenas aspectos espirituais, mas também
            educacionais e de assistência social, impactando milhões de pessoas
            ao redor do mundo.
          </p>
          <main>
            <motion.section
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                gap: "2rem",
              }}
              className="card-technology"
            >
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
                      width={30}
                      height={30}
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
            <a href="#">
              <span>Vizualizar Projeto</span>
            </a>
          </main>
        </motion.article>
        <motion.section
          initial={{
            opacity: 0,
            x: 10,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="hero-content-card"
        >
          <main></main>
        </motion.section>
      </section>
      <motion.a
        href="#"
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
        className="view"
      >
        Mais projetos
        <AnimatePresence mode="wait">
          <motion.span>
            {isInView && (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="active"
              >
                <motion.path
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                  }}
                  d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                  stroke="#F4CE14"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></motion.path>
                <motion.path
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    delay: 0.25,
                    duration: 0.5,
                  }}
                  d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                  stroke="#F4CE14"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></motion.path>
              </svg>
            )}
            {!isInView && (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="active"
              >
                <motion.path
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: 0.25,
                    duration: 0.5,
                  }}
                  d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                  stroke="#F4CE14"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></motion.path>
              </svg>
            )}
          </motion.span>
        </AnimatePresence>
      </motion.a>
    </motion.main>
  );
};

export default HeroProject;
