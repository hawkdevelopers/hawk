import React from "react";
// Framer motion
import { motion, useScroll, useTransform } from "framer-motion";
// Custom Style
import "@/styles/HeroAbout.scss";

// Social Media
import Social from "@/utils/Social";
import Image from "next/image";

const HeroAbout = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0], [1, 0]);

  return (
    <motion.main>
      <motion.section
        ref={ref}
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
          transition: {
            delay: 1.2,
            duration: 1.5,
          },
        }}
        viewport={{ once: true }}
        className="hero-about"
      >
        <motion.section
          style={{
            opacity,
          }}
        >
          <motion.section>
       
            <Image
              width={540}
              height={500}
              src="/about-me.webp"
              alt="About-me"
              className="about-image"
            />
            <article>
              <h1>Quem sou</h1>
              <h2>Diego Vinicius</h2>
              <h3>Fullstack Developer & UI Designer</h3>
              <p>
                Olá, sou Diego Vinicius, mas muitos me conhecem como Red. Sou o
                cérebro por trás do projeto &ldquo;Hawk Developer`s&ldquo;, uma
                plataforma dedicada ao ensino de desenvolvimento web.
                Atualmente, trabalho como freelancer, desempenhando os papéis de
                Desenvolvedor Frontend e Designer UX/UI.
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
        </motion.section>
      </motion.section>
    </motion.main>
  );
};

export default HeroAbout;
