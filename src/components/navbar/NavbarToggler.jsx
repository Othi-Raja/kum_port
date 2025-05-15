import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { motion } from "framer-motion";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="text-xl p-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white shadow-highlight"
      onClick={setToggleMenu}
      aria-label="Toggle menu"
    >
      <motion.div
        animate={{ rotate: menuOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <GiHamburgerMenu />
      </motion.div>
    </motion.button>
  );
};

export default NavbarToggler;
