import { motion as Motion } from "framer-motion";
import { fadeIn, textReveal, hoverScale } from "../../framerMotion/variants";
import { FaArrowRight } from "react-icons/fa";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 h-full justify-center text-center md:text-left w-full md:w-1/2 px-4 md:px-0 py-6 md:py-0">
      <Motion.div
        variants={fadeIn("down", 0.2)}
        className="relative inline-block px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 max-w-fit mx-auto md:mx-0"
      >
        <Motion.h2
          variants={textReveal(0.3)}
          className="text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wider text-lightGray"
        >
          FRONTEND WEB DEVELOPER
        </Motion.h2>
      </Motion.div>

      <div className="overflow-hidden pt-2 lg:pt-4">
        <Motion.h1
          variants={fadeIn("right", 0.4)}
          className="text-3xl sm:text-4xl md:text-[3rem] lg:text-[4.5rem] font-bold text-gradient leading-[1.1] lg:leading-[1.2] pt-1"
        >
          Kumaravel D
        </Motion.h1>
      </div>

      <Motion.p
        variants={fadeIn("up", 0.6)}
        className="text-base sm:text-lg text-gray leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:text-xl mx-auto md:mx-0"
      >
        A passionate web developer crafting beautiful and functional digital experiences with modern technologies.
      </Motion.p>

      <Motion.div
        variants={fadeIn("up", 0.8)}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 justify-center md:justify-start items-center"
      >
        <Motion.a
          href="#projects"
          className="btn-primary flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
          {...hoverScale}
        >
          View My Work
          <Motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              repeatType: "loop"
            }}
          >
            <FaArrowRight className="text-xs sm:text-sm" />
          </Motion.span>
        </Motion.a>
        <Motion.a
          href="#contact"
          className="btn-secondary text-sm sm:text-base w-full sm:w-auto text-center"
          {...hoverScale}
        >
          Contact Me
        </Motion.a>
      </Motion.div>
    </div>
  );
};

export default HeroText;
