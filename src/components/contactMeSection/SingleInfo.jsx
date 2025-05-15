import { motion as Motion } from "framer-motion";
import { hoverScale } from "../../framerMotion/variants";

const SingleInfo = ({ text, Image }) => {
  return (
    <Motion.div
      className="flex gap-3 items-center justify-start bg-darkBlue/30 p-3 sm:p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 border border-primary/10"
      {...hoverScale}
    >
      <div className="p-2 rounded-full bg-primary/10">
        <Image className="text-xl sm:text-2xl text-primary" />
      </div>
      <p className="text-white text-sm sm:text-base">{text}</p>
    </Motion.div>
  );
};

export default SingleInfo;
