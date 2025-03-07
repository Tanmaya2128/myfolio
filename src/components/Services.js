import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const servicesData = [
  {
    title: "Web Development",
    description: "Web development involves creating websites and web applications, covering both front-end and back-end development. The front-end focuses on user interfaces using technologies like HTML, CSS, JavaScript, and frameworks like React.js. The back-end manages databases, server logic, and APIs using tools like Node.js, Django, and MySQL. Full-stack development combines both aspects to build complete applications.",
    icon: "🌐",
  },
  {
    title: "App Development",
    description: "App development is the process of creating mobile applications for Android and iOS. Native apps are developed specifically for one platform using languages like Kotlin (Android) or Swift (iOS). Cross-platform development allows a single codebase for multiple platforms using frameworks like React Native or Flutter. Backend services, databases, and APIs are crucial for app functionality.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "UX (User Experience) and UI (User Interface) design focus on creating visually appealing and user-friendly applications. UI design involves the layout, typography, and colors, while UX ensures seamless interaction. Tools like Figma, Adobe XD, and Sketch help in wireframing, prototyping, and testing user flows to improve engagement and accessibility.",
    icon: "🎨",
  },
  {
    title: "Visualization",
    description: "Data visualization involves transforming complex datasets into interactive dashboards for insights and analytics. Tools like Power BI, Tableau, and Python libraries such as Matplotlib and Plotly help present data in graphs, charts, and reports. React.js with Chart.js or D3.js can also be used for web-based visualizations. Dashboards play a crucial role in real-time monitoring and decision-making in various industries.",
    icon: "📊",
  },
];

const Services = () => {
  return (
    <motion.div
      className="services-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="services-title">My <span>Services</span></h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="service-button">Hire Me</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
