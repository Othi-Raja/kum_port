import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactSocial = () => {
  return (
    <Motion.div 
      className="flex gap-4 mt-2 justify-center md:justify-start w-full"
      variants={fadeIn("up", 0.6)}
    >
      <SingleContactSocial link="https://www.linkedin.com/in/kumaravel4502/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Kumaravel4502/Kumaravel4502" Icon={FaGithub} />
      <SingleContactSocial link="#" Icon={FaInstagram} />
    </Motion.div>
  );
};

export default ContactSocial;
