import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion as Motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../framerMotion/variants";

// Professional updated project list with more relevant information
const projects = [
  {
    name: "Foodie",
    description: "A responsive food delivery web application with modern UI components and smooth animations.",
    tech: ["React", "Tailwind CSS"],
    year: "2025",
    align: "right",
    image: "https://ik.imagekit.io/11ie2ifrf/Foodie.png",
    link: "https://foodiee-wheat.vercel.app/",
  },
  {
    name: "Food Munch",
    description: "Food Munch is best described as a responsive landing page for a fictional food delivery service.",
    tech: ["HTML5", "CSS3", "Tailwind CSS"],
    year: "2024",
    align: "left",
    image: "https://ik.imagekit.io/11ie2ifrf/Food-Munch.png",
    link: "https://kumaravel4502.github.io/Food-Munch/",
  },
  {
    name: "CiniFlix",
    description: "Movie streaming platform using HTML and CSS with a responsive layout.",
    tech: ["HTML5", "CSS3"],
    year: "2023",
    align: "right",
    image: "https://ik.imagekit.io/11ie2ifrf/CiniFlix.png",
    link: "https://kumaravel4502.github.io/Movie-Website/",
  },
  {
    name: "Incredible India",
    description: "Tourism website showcasing India's cultural heritage with interactive gallery.",
    tech: ["HTML5", "CSS3"],
    year: "2023",
    align: "left",
    image: "https://ik.imagekit.io/11ie2ifrf/Incredible%20India.png",
    link: "https://kumaravel4502.github.io/Responsive-Webpage/",
  },
  {
    name: "Cat and Bulb",
    description: "Interactive Cat and Bulb animation using HTML, CSS, and JavaScript, featuring dynamic DOM interactions.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    year: "2024",
    align: "right",
    image: "https://ik.imagekit.io/11ie2ifrf/Cat%20and%20Bulb.png",
    link: "https://kumaravel4502.github.io/Cat-and-Bulb/",
  },
];

const ProjectsMain = () => {
  return (
    <Motion.div
      id="projects"
      className="section-padding relative"
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        <Motion.div
          className="absolute top-[30%] left-[10%] w-[40vw] h-[30vw] rounded-full bg-primary/5 blur-[120px] -z-10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Container */}
      <div className="container-width relative z-10">
        <Motion.div
          variants={fadeIn("down", 0.2)}
        >
          <ProjectsText />
        </Motion.div>

        <Motion.div
          className="mt-8 sm:mt-12 md:mt-16 flex flex-col gap-12 sm:gap-16 md:gap-24 max-w-[1000px] mx-auto px-4"
          variants={fadeIn("up", 0.4)}
        >
          {projects.map((project, index) => (
            <SingleProject
              key={index}
              name={project.name}
              description={project.description}
              tech={project.tech}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          ))}
        </Motion.div>
      </div>
    </Motion.div>
  );
};

export default ProjectsMain;
