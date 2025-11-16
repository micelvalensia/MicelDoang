"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-16 h-7 rounded-full p-1 bg-gray-200 shadow-lg">
        <div className="w-5 h-5 rounded-full bg-black" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-16 h-7 rounded-full p-1 transition-colors duration-300 shadow-lg ${
        isDark ? "bg-indigo-800" : "bg-blue-200"
      } shadow-lg hover:shadow-xl`}
    >
      <motion.div
        className={`w-5 h-5 rounded-full flex items-center justify-center ${
          isDark ? "bg-white" : "bg-blue-500"
        } shadow-md`}
        animate={{
          x: isDark ? 36 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </button>
  );
}