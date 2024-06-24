"use client";
import React from "react";
import { CgMenuGridO } from "@/app/ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import cn from "classnames";
import { NotificationBell } from "@/app/ui/features";
import { twMerge } from "tailwind-merge";

export function AuthMenu({
  children,
  dropDownMenuClassNames,
  icon,
}: {
  children?: React.ReactNode;
  dropDownMenuClassNames?: string;
  icon: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen); // Correct way to toggle the state

  return (
    <>
      <button className="hoveredUI" onClick={toggleMenu}>
        {icon === "profileMenu" && (
          <CgMenuGridO
            className={cn(`text-3xl`, {
              "text-primary-500": isOpen && toggleMenu,
            })}
          />
        )}
        {icon === "notificationMenu" && (
          <NotificationBell notificationsCount={4} />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              type: "spring", // Using spring physics for the transition
              stiffness: 500, // Spring stiffness
              damping: 25, // Spring damping
              mass: 1, // Mass of the element, affects momentum
              duration: 0.2, // Duration of the animation
            }}
            className={twMerge(
              `bg-white" absolute left-0 top-16 w-full rounded-md border bg-white ${dropDownMenuClassNames}`,
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
