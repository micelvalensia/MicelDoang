import { education } from "../data/data";
import { motion, Variants } from "framer-motion";
import { VarianType } from "./type";

export function Education({ containerVariants, itemVariants }: VarianType) {
  return (
    <motion.div
      className="mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8">
        <h3 className="text-xl font-light text-black dark:text-white mb-6">
          Education
        </h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-6"
              variants={itemVariants}
            >
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-1">
                {edu.period}
              </p>
              <h4 className="text-lg font-light text-black dark:text-white mb-1">
                {edu.degree}
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {edu.school}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
