import { useState } from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const AboutMeImage = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="h-[500px] w-[300px] relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Abstract About Me representation */}
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden bg-gradient-to-b from-cyan-900 to-indigo-900 flex flex-col items-center justify-center p-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="text-center mb-6">
            <h3 className="text-5xl font-bold text-white mb-4">Web Dev</h3>
            <div className="flex justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-orange/50 text-white rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-orange/50 text-white rounded-full text-sm">Frontend</span>
            </div>
          </div>

          <MotionDiv
            className="flex flex-wrap justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {['💻', '🚀', '🎨', '⚛️', '📱', '🌐'].map((emoji, index) => (
              <MotionDiv
                key={index}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                {emoji}
              </MotionDiv>
            ))}
          </MotionDiv>

          <MotionDiv
            className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent my-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          <p className="text-white/80 text-center text-sm">
            Creating exceptional web experiences with modern technologies
          </p>
        </MotionDiv>
      </div>
    </div>
  );
};

export default AboutMeImage;
