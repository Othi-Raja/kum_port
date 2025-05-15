import { motion as Motion } from "framer-motion";
import { hoverScale } from "../../framerMotion/variants";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <Motion.div
      className="h-10 w-10 sm:h-12 sm:w-12 bg-darkBlue border border-primary/30 text-primary hover:text-white hover:bg-primary hover:border-primary rounded-full flex items-center justify-center transition-all duration-300"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center justify-center w-full h-full">
        <Icon className="text-lg sm:text-xl" />
      </a>
    </Motion.div>
  );
};

export default SingleContactSocial;
