import React from "react";
// Framer Motion
import { motion, AnimationProps } from "framer-motion";
// Custom Style
import "@/styles/HeroProject.scss";
// Custom Text
import SectionText from "@/utils/SectionText";
// Image
import Image from "next/image";
// Icon SVG
import { Eye } from "lucide-react";

const HeroProject = () => {
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
        "Carrot DAO é um sistema de governança descentralizada que capacita os detentores de tokens a tomar decisões sobre o ecossistema. Permite votações e propostas para orientar o desenvolvimento, promovendo a transparência e a autonomia na gestão de decisões-chave.",
      src: "/carrot-dao.webp",
      language: ["NextJs", "Tailwind", "EtherJs", "Sass"],
    },
  ];

  const mainStagger: AnimationProps = {
    variants: {
      visible: {
        opacity: 1,

        transition: {
          delay: 0.5,
          duration: 0.5,
          staggerChildren: 0.8,
          delayChildren: 1.5,
          ease: "linear",
        },
      },
      hidden: {
        opacity: 0,
      },
    },
  };

  const childStagger: AnimationProps = {
    variants: {
      visible: { opacity: 1, y: 0 },
      hidden: {
        opacity: 0,
        y: 100,
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
          delay: 1.4,
          duration: 1.5,
        },
      }}
      viewport={{ once: true }}
      className="hero-project"
    >
      <SectionText text="Projetos" />

      <motion.section
        {...mainStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Project.map((card, index) => (
          <motion.section key={index} className="card" {...childStagger}>
            <main className="card-header card-hue" />
            <motion.main
              className="card-image"
              initial={{
                backgroundImage: "inherit",
              }}
              animate={{
                backgroundImage: `linear-gradient(to bottom, transparent, #1d1d1d), url(${card.src})`,
              }}
            />
            <Image
              width="0"
              height="0"
              sizes="600"
              src={card.src}
              alt={card.name}
            />
            <main className="card-body">
              <article>
                <h1>{card.name}</h1>
                <p>{card.description}</p>
              </article>
            </main>
            <main className="card-footer">
              <a href="#">
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
