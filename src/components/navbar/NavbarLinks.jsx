import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../state/menuSlice";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(closeMenu());
  };

  return (
    <motion.ul
      className="flex lg:flex-row sm:flex-col lg:gap-8 sm:gap-6 font-medium lg:items-center sm:items-start lg:relative sm:w-full"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      }}
      initial="hidden"
      animate="show"
    >
      {links.map((link, index) => (
        <motion.li
          key={index}
          className="relative overflow-hidden"
          variants={{
            hidden: { y: 20, opacity: 0 },
            show: { y: 0, opacity: 1 }
          }}
          transition={{ duration: 0.5 }}
        >
          <Link
            spy={true}
            smooth={true}
            duration={800}
            offset={-100}
            to={link.section}
            onClick={handleLinkClick}
            className="cursor-pointer text-lightGray hover:text-primary transition-all duration-300 relative py-2 px-1 block lg:text-base sm:text-lg"
            activeClass="text-secondary"
          >
            <span className="relative z-10">{link.link}</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary"
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavbarLinks;
