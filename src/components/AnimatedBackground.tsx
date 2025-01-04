import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <motion.div
        className="absolute top-1/4 left-1/4 w-[45rem] h-[45rem] rounded-full bg-primary/20 dark:bg-primary/30 blur-[120px] animate-float-1"
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-[45rem] h-[45rem] rounded-full bg-accent/20 dark:bg-accent/30 blur-[120px] animate-float-2"
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 200, -100, 0],
          scale: [1, 1.3, 0.9, 1],
          rotate: [0, -90, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[40rem] h-[40rem] rounded-full bg-purple-500/20 dark:bg-purple-500/30 blur-[120px] animate-float-3"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.1, 0.9, 1],
          rotate: [0, 45, -45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};