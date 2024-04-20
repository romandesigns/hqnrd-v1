import { motion } from "framer-motion";

export const AnimatedText = ({ text }: { text: string }) => {
  // Split text into an array of letters
  const letters = text.split("");

  return (
    <div style={{ display: "inline-block" }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}
          style={{ display: "inline-block" }} // Ensure each letter is inline
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};
