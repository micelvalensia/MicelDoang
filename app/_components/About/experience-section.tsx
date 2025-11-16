import { motion, Variants } from "framer-motion";
import { experience } from "../data/data";
import { VarianType } from "./type";


export function Experience({
  containerVariants,
  itemVariants,
}: VarianType) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8">
        <h3 className="text-xl font-light text-black dark:text-white mb-6">
          Experience
        </h3>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-6"
              variants={itemVariants}
            >
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-1">
                {exp.period}
              </p>
              <h4 className="text-lg font-light text-black dark:text-white mb-1">
                {exp.role}
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {exp.company}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
