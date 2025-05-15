import { motion as Motion } from "framer-motion";

const NavbarLogo = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Desktop Logo */}
      <h1 className="sm:hidden md:block">
        <Motion.div
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {/* KD Logo SVG */}
          <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Shield/Pentagon Base - Slightly larger with more padding */}
            <path
              d="M21 3L3 10V17C3 25.4 11 33.1 21 34C31 33.1 39 25.4 39 17V10L21 3Z"
              fill="url(#gradient-bg)"
              stroke="url(#gradient-stroke)"
              strokeWidth="2"
            />

            {/* K Letter - Adjusted position for more space */}
            <path
              d="M14 11V25M14 18L22 11M14 18L22 25"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* D Letter - Adjusted position and size */}
            <path
              d="M25 11H27C29.2091 11 31 13.0147 31 15.5V20.5C31 22.9853 29.2091 25 27 25H25V11Z"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Defines the gradients */}
            <defs>
              <linearGradient id="gradient-bg" x1="3" y1="3" x2="39" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0f172a" />
                <stop offset="1" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="gradient-stroke" x1="3" y1="3" x2="39" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#fb9718" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo Text - Optional */}
        </Motion.div>
      </h1>

      {/* Mobile Logo */}
      <Motion.div
        className="md:hidden sm:block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {/* Mobile KD Logo SVG - Also with more space */}
        <svg width="36" height="32" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield/Pentagon Base - Increased space */}
          <path
            d="M21 3L3 10V17C3 25.4 11 33.1 21 34C31 33.1 39 25.4 39 17V10L21 3Z"
            fill="url(#gradient-bg-mobile)"
            stroke="url(#gradient-stroke-mobile)"
            strokeWidth="2"
          />

          {/* K Letter - Adjusted position */}
          <path
            d="M14 11V25M14 18L22 11M14 18L22 25"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* D Letter - Adjusted position and size */}
          <path
            d="M25 11H27C29.2091 11 31 13.0147 31 15.5V20.5C31 22.9853 29.2091 25 27 25H25V11Z"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Defines the gradients */}
          <defs>
            <linearGradient id="gradient-bg-mobile" x1="3" y1="3" x2="39" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0f172a" />
              <stop offset="1" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="gradient-stroke-mobile" x1="3" y1="3" x2="39" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#fb9718" />
            </linearGradient>
          </defs>
        </svg>
      </Motion.div>
    </Motion.div>
  );
};

export default NavbarLogo;
