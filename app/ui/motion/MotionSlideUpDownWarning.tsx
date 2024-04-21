import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

export const MotionSlideUpDownWarning = ({
  children,
  className,
  toggle,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  toggle: boolean;
}) => {
  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          exit={{ opacity: 0, y: 0 }}
          className={twMerge(`w-full ${className ? className : ""}`)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
