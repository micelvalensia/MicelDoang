import { Variants } from "framer-motion";

export  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

export  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
