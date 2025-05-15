import { motion } from "framer-motion";

const HeroGradient = () => {
  return (
    <div className="relative">
      {/* Primary color accent light */}
      <motion.div
        className="absolute top-0 right-[400px] -z-10"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-[300px] h-[300px] rounded-full bg-primary opacity-10 blur-[100px]"></div>
      </motion.div>

      {/* Secondary color accent light */}
      <motion.div
        className="absolute top-[10%] left-[10%] -z-10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-[250px] h-[250px] rounded-full bg-secondary opacity-10 blur-[80px]"></div>
      </motion.div>

      {/* Dark accent for depth */}
      <motion.div
        className="absolute top-[40%] right-[5%] -z-10"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.3, 1],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-[200px] h-[200px] rounded-full bg-primary opacity-10 blur-[90px]"></div>
      </motion.div>
    </div>
  );
};

export default HeroGradient;
