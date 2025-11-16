'use client';
import { Education } from "@/app/_components/About/education-section";
import { Experience } from "@/app/_components/About/experience-section";
import { Profile } from "@/app/_components/About/profile-section";
import { Skill } from "@/app/_components/About/skill-section";
import { Header } from "@/app/_components/Header";
import { containerVariants, itemVariants } from "@/app/_components/variantype";

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Header title="About Me" subTitle="Get To Know Me" itemVariants={itemVariants} />

        {/* Profile Section */}
        <Profile itemVariants={itemVariants} />

        {/* Skills Section */}
        <Skill itemVariants={itemVariants} />

        {/* Education Section */}
        <Education containerVariants={containerVariants} itemVariants={itemVariants} />

        {/* Experience Section */}
        <Experience containerVariants={containerVariants} itemVariants={itemVariants} />
      </div>
    </div>
  );
}