"use client";
import React from "react";
// Framer Motion
import { AnimatePresence, motion } from "framer-motion";
// Style Sass
import "./heroexperience.scss";
import gsap from "gsap";

const HeroExperience = () => {
  const tabs = [
    {
      name: "Stone Finance",
      position: "Desenvolvedor Senior",
      description:
        "Desenvolvimento web3, Manutenção de servidores AWS/Local, Docker, Liderança de Equipe, Testes de Aplicação e responsive Mobile",
      date: "Fev 2021 - Presente",
    },
    {
      name: "Amaggi",
      position: "Assistente de Controle Lider",
      description:
        "Ordem de Operação, Custeio & Rateio, Telemetria Agricola, Excel VBA System, SAP e Opus Agricola",
      date: "Ago 2020 - Set 2021",
    },
    {
      name: "R Lima Brindes",
      position: "Arte Finalista & Social Media",
      description:
        "Arte Gráfica, Branding, Social Media, Cotação de Produtos, Finalização de pedido.",
      date: "Fev 2018 - Dez 2019",
    },
  ];

  const [tables, setTables] = React.useState(tabs[0]);

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
      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.25,
            duration: 0.8,
          },
        }}
        viewport={{
          once: true,
        }}
      >
        <nav className="navigation">
          <ul className="controller-navigation">
            <li className="active">
              <motion.button onTap={() => setTables(tabs[0])}>
                Stone Finance
              </motion.button>
            </li>
            <li>
              <motion.button onTap={() => setTables(tabs[1])}>
                Amaggi
              </motion.button>
            </li>
            <li>
              <motion.button onTap={() => setTables(tabs[2])}>
                R Lima Brindes
              </motion.button>
            </li>
          </ul>
        </nav>
        <AnimatePresence mode="wait">
          <motion.main
            key={tables.name}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              style={{
                display: "inline-flex",
                width: "100%",
                alignItems: "center",
                margin: 0,
                padding: 0,
              }}
            >
              <h4
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                {tables.name}
              </h4>
              <p
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  margin: "0 0 0 auto",
                }}
              >
                {tables.date}
              </p>
            </div>
            <h5
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                margin: "32px 0px",
                color: "#F4CE14",
              }}
            >
              {tables.position}
            </h5>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: 300,

                lineHeight: "25px",

                marginBottom: 0,
              }}
            >
              {tables.description}
            </p>
          </motion.main>
        </AnimatePresence>
      </motion.section>
    </motion.main>
  );
};

export default HeroExperience;
