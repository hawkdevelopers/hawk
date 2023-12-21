import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/main/hero/Hero";

export default function Home() {
  return (
    <main
      style={{
        display: "inline-flex",
        width: "100%",
      }}
    >
      <Hero />
    </main>
  );
}
