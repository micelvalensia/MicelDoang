"use client";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { HomeIcon, MessageIcon, UserIcon, WorkIcon } from "./Icons";
import { usePageTransition } from "../_context/PageTransitionContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function BottomBar() {
  const { navigate } = usePageTransition();
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigate = (href: string) => {
    if (pathname === href) return;
    navigate(href);
  };

  return (
    <div className="fixed z-[9999] bottom-0 left-0 right-0 flex items-end justify-center pb-10">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
        className="flex items-center gap-4 relative z-10 border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-md px-3 py-2 rounded-full"
      >
        {/* Theme Toggle */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ThemeToggle />
        </motion.div>

        {/* Divider */}
        <div className="h-10 w-px md:w-1 bg-gray-300 dark:bg-gray-600"></div>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 w-full justify-around">
          {[
            { href: "/", icon: <HomeIcon /> },
            { href: "/about", icon: <UserIcon />},
            { href: "/projects", icon: <WorkIcon /> },
            { href: "/contact", icon: <MessageIcon /> },
          ].map(({ href, icon }, i) => {
            const isActive = pathname === href;
            return (
              <motion.button
                key={i}
                onClick={() => handleNavigate(href)}
                className={`w-11 h-11 rounded-full transition-colors duration-200 flex items-center justify-center shadow-md relative overflow-hidden ${
                  isActive
                    ? "bg-black dark:bg-white ring-2 ring-black/20 dark:ring-white/20"
                    : "bg-gray-800 dark:bg-gray-200"
                }`}
                whileHover={{ scale: 1.25, rotate: 5 }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 dark:bg-black/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className={`relative z-10 w-5 h-5 ${
                  isActive
                    ? "text-white dark:text-gray-800"
                    : "text-white dark:text-gray-800"
                }`}>
                  {icon}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}