import SingleSkill from "./SingleSkill";
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
  // {
  //   skill: "Chakra UI",
  //   icon: SiChakraui,
  //   color: "#319795"
  // }, 
];

const AllSkills = () => {
  return (
    <motion.div
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
      className="max-w-[1000px] mx-auto"
    >
      <div className="flex flex-wrap justify-center items-center gap-12 px-4">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <SingleSkill
                text={item.skill}
                imgSvg={<item.icon style={{ color: item.color }} />}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AllSkills;


