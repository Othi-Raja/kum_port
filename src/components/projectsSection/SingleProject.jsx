import { BsArrowUpRight } from "react-icons/bs";
import { motion as Motion } from "framer-motion";
import { fadeIn, hoverScale, slideIn } from "../../framerMotion/variants";

const SingleProject = ({ name, description, tech, year, align, image, link }) => {
  return (
    <Motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col items-center gap-6 sm:gap-8 md:gap-12 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } justify-between`}
    >
      <Motion.div
        className={`md:w-2/5 sm:w-full ${align === "left" ? "md:text-right" : "md:text-left"} sm:text-center`}
        variants={slideIn(align === "left" ? "right" : "left", 0.3)}
      >
        <h2 className="text-xl sm:text-2xl md:text-2xl text-secondary font-bold mb-1 sm:mb-2">{name}</h2>
        <p className="text-lightGray font-light mb-1 text-xs sm:text-sm">{year}</p>

        <p className="text-gray text-sm sm:text-base mt-2 sm:mt-3 mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
          {description}
        </p>

        <div className={`flex flex-wrap gap-2 mb-3 sm:mb-5 ${align === "left" ? "md:justify-end" : "md:justify-start"} sm:justify-center`}>
          {tech && tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-2 sm:px-3 py-1 rounded-full bg-darkBlue text-primary border border-primary/20"
            >
              {item}
            </span>
          ))}
        </div>

        <Motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-primary hover:text-primaryLight transition-colors duration-300 group text-sm sm:text-base`}
          {...hoverScale}
        >
          <span className="font-medium">View Project</span>
          <Motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <BsArrowUpRight className="text-sm" />
          </Motion.span>
        </Motion.a>
      </Motion.div>

      <Motion.div
        className="w-full sm:w-[90%] md:w-3/5 overflow-hidden rounded-lg relative group"
        variants={slideIn(align === "left" ? "left" : "right", 0.3)}
      >
        {/* Professional image container with overlay and subtle effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-lg"></div>

        {/* Decorative corner frame elements - hidden on small screens */}
        <div className="absolute top-0 left-0 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
        <div className="absolute top-0 right-0 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
        <div className="absolute bottom-0 left-0 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
        <div className="absolute bottom-0 right-0 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 border-b-2 border-r-2 border-primary/30 rounded-br-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>

        <Motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 aspect-video sm:aspect-auto"
            initial={{ filter: "grayscale(20%) brightness(0.9)" }}
            whileInView={{ filter: "grayscale(0%) brightness(1)" }}
            whileHover={{ filter: "grayscale(0%) brightness(1.05)" }}
            transition={{
              duration: 0.7,
              filter: { duration: 0.4 }
            }}
          />
        </Motion.div>
      </Motion.div>
    </Motion.div>
  );
};

export default SingleProject;
