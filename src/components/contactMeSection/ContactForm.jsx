import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_5lcrd37", "template_xu59q2q", form.current, {
        publicKey: "q6E_JXGgd2732KQjW",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Motion.div
      variants={fadeIn("up", 0.4)}
      className="w-full"
    >
      {success && (
        <p className="text-secondary mb-4 font-medium">{success}</p>
      )}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-darkBlue/50 border border-primary/20 px-4 text-white placeholder:text-lightGray/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
          value={name}
          onChange={handleName}
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-darkBlue/50 border border-primary/20 px-4 text-white placeholder:text-lightGray/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
          value={email}
          onChange={handleEmail}
        />

        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-darkBlue/50 border border-primary/20 p-4 text-white placeholder:text-lightGray/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
          value={message}
          onChange={handleMessage}
        />

        <Motion.button
          type="submit"
          className="w-full rounded-lg bg-primary hover:bg-primaryDark text-white h-12 font-bold text-lg transition-all duration-300 mt-2 shadow-highlight"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </Motion.button>
      </form>
    </Motion.div>
  );
};

export default ContactForm;
