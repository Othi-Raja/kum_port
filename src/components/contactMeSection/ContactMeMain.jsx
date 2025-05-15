import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { motion as Motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../framerMotion/variants";

const ContactMeMain = () => {
  return (
    <Motion.div
      id="contact"
      className="section-padding relative"
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="container-width relative z-10">
        <Motion.h2
          variants={fadeIn("down", 0.2)}
          className="heading-2 gradient-text mb-6 sm:mb-10 text-center"
        >
          Contact Me
        </Motion.h2>

        <Motion.div
          variants={fadeIn("up", 0.4)}
          className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-16 bg-darkBlue/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-primary/10 shadow-lg"
        >
          <ContactMeLeft />
          <ContactMeRight />
        </Motion.div>
      </div>

      {/* Background element */}
      <Motion.div
        className="absolute bottom-[5%] right-[10%] w-[40vw] h-[30vw] rounded-full bg-primary/5 blur-[120px] -z-10"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </Motion.div>
  );
};

export default ContactMeMain;
