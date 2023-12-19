import React from "react";
// Framer Motion
import { motion } from "framer-motion";

// Interface
interface SectionTextProps {
  text: string;
}

const SectionText: React.FC<SectionTextProps> = (props) => {
  return (
    <motion.h3>
      {props.text}
      <span
        style={{
          color: "#0aff9d",
        }}
      >
        .
      </span>
    </motion.h3>
  );
};

export default SectionText;
