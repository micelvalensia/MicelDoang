import { motion, Variants } from "framer-motion";

interface HeaderProps {
  itemVariants: Variants;
  title: string;
  subTitle: string;
}

export function Header({ itemVariants, title, subTitle }: HeaderProps) {
  return (
    <div className="flex flex-col items-center text-center gap-3 mb-8">
      <motion.h3
        className="bg-black text-white px-3 py-1 rounded-lg dark:bg-white dark:text-black transition-colors duration-300"
        initial="hidden"
        animate="show"
        variants={itemVariants}
      >
        {title}
      </motion.h3>
      <motion.h2
        className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white transition-colors duration-300"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0)",
            transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
          },
        }}
      >
        {subTitle}
      </motion.h2>
    </div>
  );
}
