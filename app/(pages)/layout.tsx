"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { usePageTransition } from "../_context/PageTransitionContext";
import { useEffect } from "react";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isLeaving, setIsLeaving } = usePageTransition();

  useEffect(() => {
  if (isLeaving) setIsLeaving(false);
}, [pathname]);


  return (
    <div style={{ position: "relative", minHeight: "100dvh" }}>
      <AnimatePresence mode="wait">
        {!isLeaving && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", width: "100%" }}
          >
            <div className="max-w-3xl mx-auto">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
