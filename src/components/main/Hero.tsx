"use client";
import React from "react";
import "@/styles/Hero.scss";
import HeroWelcome from "../sub/HeroWelcome";
import HeroAbout from "../sub/HeroAbout";

const Hero = () => {
  return (
    <section role="main" className="hero">
      <HeroWelcome />
      <HeroAbout />
    </section>
  );
};

export default Hero;
