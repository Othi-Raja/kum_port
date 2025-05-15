import { motion as Motion } from "framer-motion";
import { hoverScale } from "../../framerMotion/variants";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <Motion.div
      className="flex flex-col items-center gap-3 sm:gap-4 mx-2 sm:mx-3 md:mx-4 my-2 sm:my-3 group"
      {...hoverScale}
    >
      <Motion.div
        className="bg-gradient-to-br from-darkBlue to-dark h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center rounded-xl shadow-lg border border-white/5 group-hover:border-primary/20 backdrop-blur-sm transition-all duration-300 relative overflow-hidden"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Subtle background glow effect */}
        <Motion.div
          className="absolute inset-0 bg-primary/5 blur-md"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Skill icon with subtle hover animation */}
        <Motion.div
          className="text-2xl sm:text-3xl md:text-4xl relative z-10"
          whileHover={{
            rotate: [0, -5, 5, -5, 0],
            scale: 1.1,
            transition: {
              rotate: { duration: 0.5, ease: "easeInOut" },
              scale: { duration: 0.2 }
            }
          }}
        >
          {imgSvg}
        </Motion.div>
      </Motion.div>

      {/* Skill text with underline effect */}
      <div className="relative overflow-hidden">
        <Motion.p
          className="text-center text-white text-sm sm:text-base font-medium"
          initial={{ y: 0 }}
          whileHover={{ y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </Motion.p>
        <Motion.p
          className="text-center text-primary absolute top-[100%] left-0 right-0 text-sm sm:text-base font-medium"
          initial={{ y: 0 }}
          whileHover={{ y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </Motion.p>
        <Motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/50"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </Motion.div>
  );
};

export default SingleSkill;
