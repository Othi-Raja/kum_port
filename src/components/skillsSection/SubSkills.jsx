import { motion } from "framer-motion";
import { FaGitAlt, FaGithub, FaFigma, FaNpm } from "react-icons/fa";
import { SiVercel, SiNetlify, SiFirebase, } from "react-icons/si";

const tools = [
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  // { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
  // { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "npm", icon: FaNpm, color: "#CB3837" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
];

const SubSkills = () => {
  return (
    <div className="py-16 relative overflow-hidden bg-gradient-to-b from-dark/30 to-darkBlue/30 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-4"
      >
        <h3 className="text-3xl font-medium text-center mb-12 text-lightGray">
          Tools & <span className="text-secondary">Technologies</span>
        </h3>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 max-w-[1000px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col items-center mx-2 my-3"
            >
              <motion.div
                className="bg-darkBlue w-14 h-14 flex items-center justify-center rounded-lg shadow-highlight border-b-2 border-primary/30"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <tool.icon className="text-2xl" style={{ color: tool.color }} />
              </motion.div>
              <p className="text-sm text-lightGray mt-2">{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SubSkills;
