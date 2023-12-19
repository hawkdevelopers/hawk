import React from "react";
// Framer Motion
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  scroll,
  useTransform,
  animate,
} from "framer-motion";
// Custom Style
import "@/styles/HeroProject.scss";
import SectionText from "@/utils/SectionText";
import Image from "next/image";
import { Eye } from "lucide-react";
const HeroProject = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "center"],
  });

  const backgroundY = useTransform(scrollYProgress, [1, 0], ["0%", "0%"]);

  const Project = [
    {
      name: "Stone Defi",
      src: "/stone-project.webp",
      description:
        "A Stone DeFi é uma plataforma Web3 que se concentra na criação de coleções de NFTs e na formação de pools de liquidez, permitindo aos usuários interagir com ativos digitais de maneira descentralizada e participar ativamente do ecossistema de tokens não fungíveis (NFTs) e DeFi.",
      language: [
        "NextJs",
        "Tailwind",
        "EtherJs",
        "Solidity",
        "Viem",
        "Sass",
        "Prisma",
      ],
    },
    {
      name: "Survivors",
      src: "/collection-survivor.webp",
      description:
        "Survivors é uma coleção de NFTs na Web3, oferecendo ativos digitais únicos e colecionáveis na blockchain. Com foco na autenticidade e raridade, a plataforma permite a compra, venda e interação com obras de arte, itens colecionáveis e ativos exclusivos, impulsionando a participação dos usuários na economia dos tokens não fungíveis.",
      language: ["NextJs", "Tailwind", "EtherJs", "Solidity", "Viem"],
    },
    {
      name: "Carrot DAO",
      description:
        "Carrot DAO é um sistema de governança descentralizada que capacita os detentores de tokens a tomar decisões sobre o ecossistema. Baseado na participação dos holders, permite votações e propostas para orientar o desenvolvimento, atualizações e a direção futura do protocolo, promovendo a transparência e a autonomia na gestão de decisões-chave.",
      src: "/carrot-dao.webp",
      language: ["NextJs", "Tailwind", "EtherJs", "Sass"],
    },
  ];

  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 1.5,
        },
      }}
      viewport={{ once: true }}
      className="hero-project"
    >
      <SectionText text="Projetos" />

      <motion.section>
        {Project.map((card, index) => (
          <motion.section key={index} className="card">
            <main className="card-header card-hue" />
            <main
              className="card-image"
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, #1d1d1d), url(${card.src})`,
         
              }}
            />
            <main className="card-body">
              <article>
                <h1>{card.name}</h1>
                <p>{card.description}</p>
              </article>
            </main>
            <main className="card-footer">
              <a href="">
                <span>
                  Visualizar <Eye size={20} />
                </span>
              </a>
            </main>
          </motion.section>
        ))}
      </motion.section>
    </motion.main>
  );
};

export default HeroProject;
