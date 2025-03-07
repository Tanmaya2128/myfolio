import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram,} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.div 
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Contact Header */}
      <motion.h2 
        className="contact-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact <span>Me</span>
      </motion.h2>

      <div className="contact-container">
        {/* Left Section: Logo & Info */}
        <motion.div 
          className="contact-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src="tr.png" alt="Logo" className="contact-logo" />
          <p>
          I am a professional web developer (Fresher) specializing in designing web pages for businesses. 
          You can rely on me to deliver high-quality, visually appealing designs that meet your expectations. 
          Your satisfaction is my priority
          </p>
          <p>
            Name: Tanmaya R
          </p>
          <p>
            mail: tanmayap2128@gmail.com 
          </p>
          
          {/* Social Icons */}
          <motion.div 
            className="contact-icons"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="https://www.instagram.com/__.tanmaya.__217/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="tel:+918825857156">
              <FaPhone className="icon" />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <FaEnvelope className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/tanmaya-r-508822208/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
          </motion.div>
        </motion.div>

        
        <motion.div 
          className="contact-right"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="contact-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="contact-row">
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Subject" />
          </div>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          
        
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Submit
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
