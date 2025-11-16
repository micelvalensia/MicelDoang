"use client";

import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

type TransitionContextType = {
  isLeaving: boolean;
  navigate: (href: string) => void;
  setIsLeaving: Dispatch<SetStateAction<boolean>>;
};

const PageTransitionContext = createContext<TransitionContextType>({
  isLeaving: false,
  navigate: () => {},
  setIsLeaving: () => {},
});

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  const navigate = (href: string) => {
    if (isLeaving) return; 
    setIsLeaving(true); 
    setTimeout(() => {
      router.push(href);
    }, 500);
  };

  return (
    <PageTransitionContext.Provider value={{ isLeaving, navigate, setIsLeaving }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  return useContext(PageTransitionContext);
}
