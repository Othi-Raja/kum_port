import { motion as Motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactText = () => {
  return (
    <Motion.div variants={fadeIn("down", 0.2)}>
      <h2 className="text-secondary text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
      <p className="text-lightGray text-sm sm:text-base leading-relaxed">
        Feel free to reach out if you'd like to collaborate or discuss a project. I'm always interested in new opportunities and challenges!
      </p>
    </Motion.div>
  );
};

export default ContactText;
