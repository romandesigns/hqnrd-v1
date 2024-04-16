import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

export const MotionSelect = ({
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className={twMerge(`w-full ${className ? className : ""}`)}
          transition={{ duration: 0.15, delay: 0.1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
