import { motion } from "framer-motion";
import Image from "next/image";
import { VarianType } from "./type";

export function Profile({itemVariants}: VarianType) {
  return (
    <motion.div
      className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8 mb-8"
      initial="hidden"
      animate="show"
      variants={itemVariants}
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0">
          <div className="w-full h-full border-2 rounded-full">
            <Image
              src="/me.jpg"
              alt="Profile"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-full"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-light text-black dark:text-white mb-2">
            Micel Valensia
          </h3>
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-4">
            Fullstack Developer
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I’m a developer who builds things just for fun. I love turning
            random ideas into something cool and bringing them to life. For me,
            Tech is all about creativity and curiosity.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
