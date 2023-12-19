"use client";
import React from "react";
import "@/styles/Hero.scss";
import HeroWelcome from "@/components/sub/HeroWelcome";
import HeroAbout from "@/components/sub/HeroAbout";
import HeroProject from "../sub/HeroProject";
import { onLCP, onFID, onCLS } from "web-vitals";
const Hero = () => {
  React.useEffect(() => {
    onCLS(console.log);
    onFID(console.log);
    onLCP(console.log);
  }, []);

  return (
    <section role="main" className="hero">
      <HeroWelcome />
      <HeroAbout />
      <HeroProject />
    </section>
    
  );
};

export default Hero;
