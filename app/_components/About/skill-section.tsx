import { motion } from "framer-motion";
import { skills } from "../data/data";
import { VarianType } from "./type";

export function Skill({itemVariants}: VarianType) {
  return (
    <motion.div
      className="mb-8"
      initial="hidden"
      animate="show"
      variants={itemVariants}
    >
      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8">
        <h3 className="text-xl font-light text-black dark:text-white mb-6">
          Skills & Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-mono rounded-lg hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 hover:border-neutral-900 dark:hover:border-white transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
