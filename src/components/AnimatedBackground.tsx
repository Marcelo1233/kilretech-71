import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-primary/30 dark:bg-primary/40 blur-[100px]"
        animate={{
          x: [0, 200, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-[45rem] h-[45rem] rounded-full bg-accent/30 dark:bg-accent/40 blur-[100px]"
        animate={{
          x: [0, -150, 0],
          y: [0, 200, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[35rem] h-[35rem] rounded-full bg-purple-500/30 dark:bg-purple-500/40 blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};