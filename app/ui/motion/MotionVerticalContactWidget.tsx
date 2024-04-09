"use client";

import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export function MotionVerticalContactWidget({
  children,
  className,
  showWidget,
}: {
  children: React.ReactNode;
  className?: string;
  showWidget: boolean;
}) {
  return (
    <AnimatePresence>
      {showWidget && (
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
