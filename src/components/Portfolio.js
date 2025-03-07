import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const projects = [
  { id: 1, title: "Web Design", img: "https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg", link: "#" },
  { id: 2, title: "App development", img: "https://bairesdev.mo.cloudinary.net/blog/2023/10/Steps-of-Mobile-App-Development.jpg", link: "#" },
  { id: 3, title: "UX Design", img: "https://uxmag.com/wp-content/uploads/files/Uxmag-articles/2020-Articles/Equipment/Equipment3.jpeg", link: "#" },
  { id: 4, title: "E-Commerse Website", img: "https://webtricker.com/img/blog/understanding-ecommerce-website-design/image1.png", link: "#" },
  { id: 5, title: "Visualization", img: "https://t4.ftcdn.net/jpg/02/70/23/67/360_F_270236770_C2sB7zP7AJx0ivHr5KUl2a46yMkqTTAW.jpg", link: "#" },
  // { id: 6, title: "Project 6", img: "your-image6.jpg", link: "#" },
  // { id: 7, title: "Project 7", img: "your-image7.jpg", link: "#" },
  // { id: 8, title: "Project 8", img: "your-image8.jpg", link: "#" },
  // { id: 9, title: "Project 9", img: "your-image9.jpg", link: "#" },
];

const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <h2 className="portfolio-title">
        My <span>Portfolio</span>
      </h2>
      <motion.div 
        className="portfolio-grid"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            className="portfolio-item"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.img} alt={project.title} />
            <motion.div
              className="portfolio-overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
