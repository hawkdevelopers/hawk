"use client"
import React from "react";
// Motion
import { motion } from "framer-motion";
// Style Sass
import "./hero.scss";
import HeroSkill from "../../sub/hero-skill/HeroSkill";
import HeroWelcome from "../../sub/hero-welcome/HeroWelcome";
import HeroAbout from "../../sub/hero-about/HeroAbout";
import HeroExperience from "@/components/sub/hero-experience/HeroExperience";
import HeroTechnology from "@/components/sub/hero-technology/HeroTechnology";

const Hero = () => {
  return (
    <main className="hero">
      <HeroWelcome />
      <HeroAbout />
      <HeroExperience />
      <HeroSkill />
      <HeroTechnology />
    </main>
  );
};

export default Hero;
