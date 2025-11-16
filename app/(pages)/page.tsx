'use client';
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FacebookIcon, GitHubIcon, InstagramIcon } from "../_components/Icons";
import { containerVariants, itemVariants } from "../_components/variantype";

export default function Home() {

  return (
    <div className="relative flex min-h-dvh items-center justify-center px-4 overflow-hidden">
      <motion.div
        className="relative z-20 flex flex-col md:flex-row items-center gap-6 md:gap-5 p-4 md:p-6 rounded-lg"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Avatar */}
        <motion.div
          className="relative w-36 h-36 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-black/10 dark:ring-white/80"
          variants={itemVariants}
        >
          <Image
            src="/me.jpg"
            alt="Profile"
            fill
            className="object-cover select-none pointer-events-none"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          className="flex flex-col gap-2 md:gap-3 pointer-events-none select-none text-center md:text-left text-black"
          variants={containerVariants}
        >
          {/* Nama */}
          <motion.h1
            className="text-4xl lg:text-7xl font-semibold dark:text-white"
            variants={itemVariants}
          >
            Micel Valensia
          </motion.h1>

          {/* Role */}
          <motion.span
            className="text-lg font-semibold opacity-90 dark:text-white"
            variants={itemVariants}
          >
            Fullstack Javascript
          </motion.span>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center md:justify-start gap-2 md:gap-3 mt-2"
            variants={itemVariants}
          >
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center cursor-pointer"
            >
              <InstagramIcon className="text-white w-6 h-6" />
            </motion.div>
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 cursor-pointer"
            >
              <FacebookIcon className="text-white w-6 h-6" />
            </motion.div>
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 cursor-pointer"
            >
              <GitHubIcon className="text-white w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
