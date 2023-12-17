export const StaggeredContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      staggerChildren: 0.4,
      delayChildren: 0.5,
      ease: "linear",
    },
  },
};

export const StaggeredItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
