import { motion } from "framer-motion";

export const AnimatedText = ({ text }: { text: string }) => {
  // Split the text into letters for individual animation
  const letters = Array.from(text);

  return (
    <div className="flex justify-center">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.05, type: "spring", stiffness: 500 }}
          className="inline-block" // Use inline-block to keep letters aligned
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};
