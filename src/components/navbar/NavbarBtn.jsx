import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { motion } from "framer-motion";

const NavbarBtn = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-primary to-secondary shadow-highlight flex items-center gap-2 transition-all duration-300"
    >
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <motion.div
        className="sm:hidden md:block"
        initial={{ x: 0 }}
        whileHover={{ x: 3 }}
        transition={{ duration: 0.3 }}
      >
        <LuArrowDownRight />
      </motion.div>
    </motion.button>
  );
};

export default NavbarBtn;
