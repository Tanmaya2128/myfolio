import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="about-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About <span>Me</span>
      </motion.h2>
      <div className="about-title-gap"></div>
      <motion.div 
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="profile-section"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="profile-card">
            <img src="image2.png" alt="Profile" className="profile-img" />
            <h3 className="profile-name">Tanmaya R</h3>
            <p className="profile-role">Python FullStack Developer</p>
            <p className="profile-role">Devops and Data Engineer 
              Enthusiastic</p>
          </div>
        </motion.div>
        <motion.div 
          className="details-section"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="about-navigation">
            <button className={activeTab === "education" ? "active" : ""} onClick={() => setActiveTab("education")}>
              Education Qualification
            </button>
            <button className={activeTab === "short-course" ? "active" : ""} onClick={() => setActiveTab("short-course")}>
              Short Course
            </button>
            <button className={activeTab === "experience" ? "active" : ""} onClick={() => setActiveTab("experience")}>
              Experience
            </button>
          </div>
          <div className="about-details">
            {activeTab === "education" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
               
                <p><strong>B.E in ISE</strong></p>
                <p>Institute: JSS Academy Of Technical Education</p>
                <p>Course: 2020-24</p>
                <p>Result: 7.7 CGPA</p>
                <p><strong>Central Board of Secondary Education (12th)</strong></p>
                <p>Institute: Vels Vidyashram CBSE School</p>
                <p>Course: 2019-20</p>
                <p>Result: 80%</p>
              </motion.div>
            )}
            {activeTab === "short-course" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                
                <p><strong>Python Full Stack Course</strong></p>
                <p>Institute: Pentagon Space</p>
                <p>Duration: 7 months</p>
              </motion.div>
            )}
            {activeTab === "experience" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            
                <p>Details coming soon...</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
