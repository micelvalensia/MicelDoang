'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isTextElement =
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.tagName === 'SPAN' ||
        target.tagName === 'P';

      setIsText(isTextElement);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom cursor hanya muncul di teks */}
      {isText && (
        <>
          <motion.div
            className="fixed pointer-events-none z-[9999] mix-blend-difference"
            animate={{
              x: mousePosition.x - 6,
              y: mousePosition.y - 6,
              scale: 2,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            style={{ width: 12, height: 12 }}
          >
            <div className="w-full h-full rounded-full bg-white" />
          </motion.div>

          <motion.div
            className="fixed pointer-events-none z-[9998] mix-blend-difference"
            animate={{
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
              scale: 2,
              opacity: 0.5,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.6 }}
            style={{ width: 40, height: 40 }}
          >
            <div className="w-full h-full rounded-full border-2 border-white" />
          </motion.div>
        </>
      )}
    </>
  );
}
