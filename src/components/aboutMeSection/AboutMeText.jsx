// import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Kumaravel, a Web Developer. I specialize in React and
        front-end development, building real-world projects and
        master modern web technologies.Outside of coding, I
        enjoy continuous learning and sharing knowledge to inspire others to
        achieve their goals.
      </p>
       <a
        download="Kumaravel_Frontend_Developer_Resume1.pdf"
        href="Kumaravel_Frontend_Developer_Resume1.pdf"
        className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan"
      >
        Download CV
      </a>

    </div>
  );
};

export default AboutMeText;
