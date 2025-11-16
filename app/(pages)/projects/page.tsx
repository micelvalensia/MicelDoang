'use client';
import { motion } from "framer-motion";
import CardProject from "../../_components/Card/card";
import { projects } from "@/app/_components/data/data";
import { Header } from "@/app/_components/Header";
import { containerVariants, itemVariants } from "@/app/_components/variantype";

export default function ProjectPage() {

  return (
    <div className="p-10 min-h-[100dvh]">
      <Header itemVariants={itemVariants} subTitle="Personal projects inspired by practical needs and creativity" title="Personal Projects" />

      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 mt-8 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <CardProject project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}