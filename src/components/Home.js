import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="home-content">
        <h2>Tanmaya R</h2>
        <h3>And I'm a <span className="highlight">Python Fullstack Developer</span></h3>
        <p>
        I am a Python Full Stack Developer with expertise in building dynamic and scalable applications using Python,Java, Django, React.js, Node.js, MySQL, and JavaScript. 
        With a B.E. in Information Science and Engineering, I specialize in crafting efficient APIs, user-friendly interfaces, and end-to-end solutions. Additionally, I have experience in Power BI for data visualization, Git for version control, and SQL for database management. 
        Passionate about problem-solving, I continuously explore the latest technologies to develop optimized and innovative software solutions.
        </p>
        <div className="social-icons">
    <a href="https://www.instagram.com/__.tanmaya.__217/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
                 <FaInstagram className="icon" />
               </a>
     <a href="https://www.linkedin.com/in/tanmaya-r-508822208/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon" />
                </a>
     <a href="https://github.com/Tanmaya2128" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                </a>
</div>

        <div className="buttons">
          <a href="https://drive.google.com/file/d/1ZztYeeJf_luVyW3ufXjK0nKFTnRcxhVz/view?usp=drive_link">
          <button className="btn" >Download CV</button>
          </a>
        </div>
      </div>

      <motion.div 
        className="home-image"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="image2.png" alt="Profile" />
      </motion.div>
    </motion.div>
  );
};

export default Home;
