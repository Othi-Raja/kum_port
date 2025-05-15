import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeLeft = () => {
  return (
    <Motion.div
      className="flex flex-col gap-6 sm:gap-8 w-full md:w-3/5"
      variants={fadeIn("right", 0.3)}
    >
      <ContactText />
      <ContactForm />
    </Motion.div>
  );
};

export default ContactMeLeft;
