"use client";
import { useNavToggle } from "@/store/mobile-navigation";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export function MotionMobileNav({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const { isOpen } = useNavToggle();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className={cn(`${className}`)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
