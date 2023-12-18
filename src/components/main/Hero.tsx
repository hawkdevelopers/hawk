"use client";
import React from "react";
import "@/styles/Hero.scss";
import HeroWelcome from "@/components/sub/HeroWelcome";
import HeroAbout from "@/components/sub/HeroAbout";

const Hero = () => {
  return (
    <section role="main" className="hero">
      <HeroWelcome />

      <HeroAbout />
    </section>
  );
};

export default Hero;
