'use client';
import { Header } from "@/app/_components/Header";
import { ContactCard } from "@/app/_components/Contact/card";
import { Status } from "@/app/_components/Contact/status";
import { containerVariants, itemVariants } from "@/app/_components/variantype";

export default function ContactPage() {

  return (
    <div className="min-h-[100dvh] bg-neutral-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Header itemVariants={itemVariants} title="Contact Me" subTitle="Get In Touch" />

        {/* Contact Cards */}
        <ContactCard containerVariants={containerVariants} itemVariants={itemVariants} />

        {/* Status */}
        <Status itemVariants={itemVariants} />
      </div>
    </div>
  );
}