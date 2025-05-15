import { motion as Motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useState, useEffect } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiRedux, SiFramer, SiNextdotjs } from "react-icons/si";

const HeroPic = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateTranslate = (axis, distance) => {
    const center = axis === 'x' ? window.innerWidth / 2 : window.innerHeight / 2;
    const position = axis === 'x' ? mousePosition.x : mousePosition.y;
    const delta = (position - center) / 50;
    return delta * distance;
  };

  // Tech icons with their respective colors
  const techIcons = [
    { Icon: FaReact, color: "#61DAFB", delay: 0, size: 0.8 },
    { Icon: SiJavascript, color: "#F7DF1E", delay: 0.2, size: 0.75 },
    { Icon: SiNextdotjs, color: "#ffffff", delay: 0.4, size: 0.85 },
    { Icon: SiTailwindcss, color: "#06B6D4", delay: 0.6, size: 0.8 },
    { Icon: SiRedux, color: "#764ABC", delay: 0.8, size: 0.7 },
    { Icon: FaGithub, color: "#f0f6fc", delay: 1.0, size: 0.75 },
    { Icon: SiFramer, color: "#BB4B96", delay: 1.2, size: 0.7 }
  ];

  // Cube face icons and colors
  const cubeFaces = [
    { Icon: FaReact, color: "#61DAFB", bgColor: "rgba(30, 41, 59, 0.9)" },
    { Icon: SiJavascript, color: "#F7DF1E", bgColor: "rgba(30, 41, 59, 0.9)" },
    { Icon: FaHtml5, color: "#E34F26", bgColor: "rgba(30, 41, 59, 0.9)" },
    { Icon: FaCss3Alt, color: "#1572B6", bgColor: "rgba(30, 41, 59, 0.9)" },
    { Icon: SiTailwindcss, color: "#06B6D4", bgColor: "rgba(30, 41, 59, 0.9)" },
    { Icon: SiFramer, color: "#BB4B96", bgColor: "rgba(30, 41, 59, 0.9)" },
  ];

  return (
    <Motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center w-full md:w-1/2 py-8 sm:py-10 md:py-0"
    >
      <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
        {/* Modern 3D workspace container with perspective effect */}
        <Motion.div
          className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px]"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            x: calculateTranslate('x', -2),
            y: calculateTranslate('y', -2)
          }}
        >
          {/* Background circle with gradient */}
          <Motion.div
            className="absolute w-full h-full rounded-full bg-gradient-to-br from-primary/10 via-darkBlue/20 to-secondary/10 backdrop-blur-sm"
            style={{
              transform: "translateZ(-50px)",
              boxShadow: "inset 0 0 30px rgba(59, 130, 246, 0.1)"
            }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* 3D Rotating Cube */}
          <Motion.div
            className="absolute left-[15%] top-[25%]"
            style={{
              width: "90px",
              height: "90px",
              perspective: "800px",
              transformStyle: "preserve-3d",
              zIndex: 40,
              transform: "rotateX(5deg) rotateZ(-5deg) translateZ(20px)",
            }}
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Motion.div
              className="w-full h-full relative transform-style-3d"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(-45px)",
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Cube Faces */}
              {cubeFaces.map((face, index) => {
                const { Icon, color, bgColor } = face;
                let style = {};

                // Position each face of the cube
                switch (index) {
                  case 0: // front
                    style = { transform: "rotateY(0deg) translateZ(45px)" };
                    break;
                  case 1: // right
                    style = { transform: "rotateY(90deg) translateZ(45px)" };
                    break;
                  case 2: // back
                    style = { transform: "rotateY(180deg) translateZ(45px)" };
                    break;
                  case 3: // left
                    style = { transform: "rotateY(-90deg) translateZ(45px)" };
                    break;
                  case 4: // top
                    style = { transform: "rotateX(90deg) translateZ(45px)" };
                    break;
                  case 5: // bottom
                    style = { transform: "rotateX(-90deg) translateZ(45px)" };
                    break;
                  default:
                    break;
                }

                return (
                  <div
                    key={`face-${index}`}
                    className="absolute w-full h-full flex items-center justify-center"
                    style={{
                      ...style,
                      backgroundColor: bgColor,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: `0 0 20px ${color}40 inset`,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <Icon size={45} color={color} />
                  </div>
                );
              })}
            </Motion.div>
          </Motion.div>

          {/* Laptop base - 3D effect */}
          <Motion.div
            className="absolute left-1/2 top-1/2 w-[180px] h-[120px] sm:w-[220px] sm:h-[140px] md:w-[240px] md:h-[160px] lg:w-[260px] lg:h-[180px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-md"
            style={{
              transform: "translate(-50%, -50%) rotateX(75deg) rotateZ(-10deg) translateZ(10px)",
              boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
              transformOrigin: "center bottom"
            }}
            animate={{
              rotateX: [75, 76, 75],
              rotateZ: [-10, -9, -10]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Laptop screen with code effect */}
          <Motion.div
            className="absolute left-1/2 top-1/2 w-[180px] h-[120px] sm:w-[220px] sm:h-[140px] md:w-[240px] md:h-[160px] lg:w-[260px] lg:h-[175px] bg-gradient-to-br from-gray-900 to-gray-950 rounded-md overflow-hidden"
            style={{
              transform: "translate(-50%, -70%) rotateX(10deg) rotateZ(-10deg) translateZ(35px)",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.4)",
              border: "2px solid rgba(30, 41, 59, 0.8)"
            }}
            animate={{
              rotateX: [10, 12, 10],
              rotateZ: [-10, -9, -10]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Code editor screen with syntax highlighting */}
            <div className="w-full h-full p-3 flex flex-col gap-1">
              <div className="flex gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>

              {/* Animated code lines */}
              <Motion.div
                className="h-1.5 w-[50%] bg-blue-500/20 rounded-full"
                animate={{ width: ['50%', '70%', '50%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <Motion.div
                className="h-1.5 w-[70%] bg-blue-500/30 rounded-full"
                animate={{ width: ['70%', '40%', '70%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <Motion.div
                className="h-1.5 w-[45%] bg-purple-500/20 rounded-full"
                animate={{ width: ['45%', '60%', '45%'] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <Motion.div
                className="h-1.5 w-[55%] bg-orange-500/25 rounded-full"
                animate={{ width: ['55%', '30%', '55%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
              <Motion.div
                className="h-1.5 w-[65%] bg-green-500/20 rounded-full"
                animate={{ width: ['65%', '80%', '65%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              <Motion.div
                className="h-1.5 w-[40%] bg-primary/30 rounded-full"
                animate={{ width: ['40%', '60%', '40%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              />

              {/* Cursor blinking effect */}
              <Motion.div
                className="h-3 w-1 bg-primary mt-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </Motion.div>

          {/* Coffee cup - 3D effect */}
          <Motion.div
            className="absolute left-[75%] top-[60%] w-8 h-10 sm:w-10 sm:h-12 md:w-12 md:h-14 lg:w-14 lg:h-16"
            style={{
              transform: "rotateX(10deg) rotateZ(-10deg) translateZ(20px)",
              zIndex: 30
            }}
            animate={{
              y: [0, -3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Cup body */}
            <div className="w-full h-[75%] rounded-md bg-gradient-to-br from-gray-400 to-gray-500 absolute bottom-0"></div>
            {/* Coffee surface */}
            <div className="w-[80%] h-[12%] rounded-full bg-gradient-to-br from-secondary to-secondary/80 absolute top-[25%] left-[10%]"></div>
            {/* Steam */}
            <Motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white/30 rounded-full"
              animate={{ opacity: [0, 0.3, 0], y: [0, -5, -8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <Motion.div
              className="absolute -top-3 left-[40%] transform -translate-x-1/2 w-1 h-2 bg-white/20 rounded-full"
              animate={{ opacity: [0, 0.2, 0], y: [0, -4, -7] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
          </Motion.div>
        </Motion.div>

        {/* Floating tech stack icons */}
        {techIcons.map((tech, i) => {
          // Calculate different orbits for each icon
          const baseRadius = window.innerWidth < 640 ? 120 :
            window.innerWidth < 768 ? 140 :
              window.innerWidth < 1024 ? 160 : 180;

          // Distribute icons in a more interesting way
          const radius = baseRadius * (0.85 + (tech.size * 0.3));
          const angle = (i * (330 / techIcons.length) + 15) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          // Size based on responsive design and icon's designated size
          const iconSize = window.innerWidth < 640 ? 18 * tech.size :
            window.innerWidth < 768 ? 22 * tech.size :
              26 * tech.size;

          // Hide some icons on very small screens
          if (window.innerWidth < 400 && i > 3) return null;

          return (
            <Motion.div
              key={i}
              className="absolute flex items-center justify-center rounded-full bg-darkBlue/90 shadow-lg backdrop-blur-md"
              style={{
                padding: iconSize * 0.35 + 'px',
                boxShadow: `0 0 15px ${tech.color}40`
              }}
              initial={{
                x,
                y,
                scale: 0,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1,
                x: x + calculateTranslate('x', -1) * (i % 2 === 0 ? 1 : -1),
                y: y + calculateTranslate('y', -1) * (i % 2 === 0 ? 1 : -1)
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                delay: tech.delay,
                opacity: { duration: 0.5, delay: tech.delay }
              }}
            >
              <tech.Icon size={iconSize} color={tech.color} />
            </Motion.div>
          );
        })}

        {/* Subtle floating particles */}
        {[...Array(window.innerWidth < 640 ? 5 : 10)].map((_, i) => (
          <Motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              background: i % 2 === 0 ? '#3b82f620' : '#fb971820',
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: `${Math.random() * 100 - 20}%`,
              top: `${Math.random() * 100 - 20}%`,
              boxShadow: i % 2 === 0 ? '0 0 5px #3b82f660' : '0 0 5px #fb971860',
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.1, 0.7, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </Motion.div>
  );
};

export default HeroPic;
