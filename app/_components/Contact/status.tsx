import { motion } from "framer-motion";
import { VarianType } from "../About/type";

export function Status({itemVariants}: VarianType) {
  return (
    <motion.div
      className="mt-12 bg-black dark:bg-white text-white dark:text-black p-6"
      initial="hidden"
      animate="show"
      variants={itemVariants}
    >
      <p className="text-xs font-mono uppercase tracking-wider mb-2 opacity-70">
        Current Status
      </p>
      <p className="text-lg font-light">Available for Learn - Lets Link Up!</p>
    </motion.div>
  );
}
