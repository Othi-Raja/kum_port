import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import { motion as Motion } from "framer-motion";
import { staggerContainer } from "../../framerMotion/variants";

const HeroMain = () => {
  return (
    <Motion.div
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-32 md:py-36 lg:py-40 px-6 relative bg-gradient-to-b from-dark via-darkBlue to-dark overflow-hidden"
    >
      {/* Professional background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '-19px -19px'
          }}
        />

        {/* Gradient circles */}
        <Motion.div
          className="absolute top-[10%] left-[5%] w-[25vw] h-[25vw] rounded-full bg-primary/5 blur-[120px]"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror"
          }}
        />
        <Motion.div
          className="absolute bottom-[5%] right-[10%] w-[35vw] h-[30vw] rounded-full bg-secondary/5 blur-[150px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
            delay: 3
          }}
        />

        {/* Subtle line element */}
        <Motion.div
          className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Code bracket decorations */}
        <Motion.div
          className="absolute top-[20%] left-[2%] text-[120px] font-light opacity-[0.03] font-mono"
          animate={{
            y: [0, 10, 0],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'{'}
        </Motion.div>
        <Motion.div
          className="absolute bottom-[10%] right-[2%] text-[120px] font-light opacity-[0.03] font-mono"
          animate={{
            y: [0, -10, 0],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          {'}'}
        </Motion.div>
      </div>

      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center gap-12 relative z-10">
        <HeroText />
        <HeroPic />
      </div>
    </Motion.div>
  );
};

export default HeroMain;
