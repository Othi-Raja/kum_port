import { motion } from "framer-motion";

const SkillsText = () => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        My Skills
      </motion.h2>
      <motion.p
        className="text-lg text-center text-lightGray max-w-2xl leading-relaxed px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I specialize in these technologies, applying industry best practices to deliver high-quality, responsive, and user-friendly web applications.
      </motion.p>
    </motion.div>
  );
};

export default SkillsText;
