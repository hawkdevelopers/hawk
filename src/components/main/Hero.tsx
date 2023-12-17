"use client";
import React from "react";
import "@/styles/Hero.scss";
import HeroWelcome from "../sub/HeroWelcome";

const Hero = () => {
  return (
    <section role="main" className="hero">
      <HeroWelcome />
    </section>
  );
};

export default Hero;
