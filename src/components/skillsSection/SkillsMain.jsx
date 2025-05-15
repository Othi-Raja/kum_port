import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <motion.div
      id="skills"
      className="section-padding relative overflow-hidden"
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="relative z-10 container-width">
        <motion.div variants={fadeIn("down", 0.2)}>
          <SkillsText />
        </motion.div>

        <motion.div
          className="my-20 sm:hidden lg:block"
          variants={fadeIn("up", 0.4)}
        >
          <AllSkills />
        </motion.div>

        <motion.div
          className="my-16 sm:block lg:hidden"
          variants={fadeIn("up", 0.4)}
        >
          <AllSkillsSM />
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-[-10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[120px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror"
        }}
      />
      <motion.div
        className="absolute bottom-[5%] right-[15%] w-[25vw] h-[25vw] rounded-full bg-secondary/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[30%] w-[15vw] h-[15vw] rounded-full bg-primaryLight/5 blur-[80px] -z-10"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
          delay: 5
        }}
      />
    </motion.div>
  );
};

export default SkillsMain;
