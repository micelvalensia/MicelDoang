"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  hasShownSplash?: boolean;
}

export default function PageTransition({ children, hasShownSplash = false }: PageTransitionProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Jika di homepage dan splash screen baru saja ditampilkan, skip animasi page transition
    const hasNavigated = sessionStorage.getItem('hasNavigated');
    
    if (isHomePage && hasShownSplash && !hasNavigated) {
      setShouldAnimate(false);
    } else {
      setShouldAnimate(true);
    }

    // Set flag ketika ada navigasi
    if (pathname !== '/' || sessionStorage.getItem('splashShown')) {
      sessionStorage.setItem('hasNavigated', 'true');
    }
  }, [pathname, isHomePage, hasShownSplash]);

  return (
    <AnimatePresence mode="wait">
    <motion.div
        key={pathname}
        initial={shouldAnimate ? { opacity: 0, y: 100, scale: 1.1 } : false}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
        transition={{
        duration: 3.8,
        ease: [0.22, 1, 0.36, 1],
        }}
        style={{
        position: "absolute",
        width: "100%",
        }}
        className="bg-red-800"
    >
        {children}
    </motion.div>
    </AnimatePresence>
  );
}