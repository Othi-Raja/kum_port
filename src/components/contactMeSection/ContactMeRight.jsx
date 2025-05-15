import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeRight = () => {
  return (
    <Motion.div
      className="flex flex-col items-center justify-center gap-6 sm:gap-8 w-full md:w-2/5"
      variants={fadeIn("left", 0.3)}
    >
      <div className="w-full max-w-[250px] mx-auto overflow-hidden rounded-lg bg-darkBlue/30 p-4 border border-primary/10">
        <img
          src="/images/email-image.png"
          alt="Contact illustration"
          className="w-full h-auto object-contain filter drop-shadow-lg"
          onError={(e) => {
            // Fallback to a colored div with icon if image fails to load
            const parent = e.target.parentNode;
            if (parent) {
              // Create a div with a contact icon placeholder
              const placeholderDiv = document.createElement("div");
              placeholderDiv.className =
                "w-full aspect-square flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg";
              placeholderDiv.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              `;

              // Replace the img with the placeholder
              parent.replaceChild(placeholderDiv, e.target);
            }
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-12">
        <ContactInfo />
        <ContactSocial />
      </div>
    </Motion.div>
  );
};

export default ContactMeRight;
