import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 dark:bg-primary/30 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-[32rem] h-[32rem] rounded-full bg-accent/20 dark:bg-accent/30 blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-purple-500/20 dark:bg-purple-500/30 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};