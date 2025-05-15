import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiChakraui } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    color: "#E34F26"
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6"
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    color: "#F7DF1E"
  },
  {
    skill: "React",
    icon: FaReact,
    color: "#61DAFB"
  },
  {
    skill: "Redux",
    icon: SiRedux,
    color: "#764ABC"
  },
  {
    skill: "Tailwind",
    icon: RiTailwindCssFill,
    color: "#06B6D4"
  },
  {
    skill: "Material UI",
    icon: SiMui,
    color: "#007FFF"
  },
  {
    skill: "Chakra UI",
    icon: SiChakraui,
    color: "#319795"
  }
];

const AllSkillsSM = () => {
  return (
    <motion.div
      className="max-w-[800px] mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <div className="flex flex-wrap justify-center items-center gap-8">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-col items-center mx-3 my-4"
          >
            <motion.div
              className="bg-darkBlue h-16 w-16 flex items-center justify-center rounded-lg shadow-highlight border-l-4 border-secondary hover:shadow-glow transition-all duration-300"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <item.icon className="text-3xl" style={{ color: item.color }} />
            </motion.div>
            <p className="text-center mt-2 text-lightGray font-medium">{item.skill}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AllSkillsSM;
