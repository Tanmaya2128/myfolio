import React, { useEffect, useState } from "react";
import "./Skills.css";

const skillsData = [
  { name: "Python", img: "https://w7.pngwing.com/pngs/677/842/png-transparent-python-hd-logo-thumbnail.png", level: 90 },
  { name: "Java", img: "https://www.citypng.com/public/uploads/preview/hd-java-logo-transparent-background-701751694771845zainlxmlfo.png", level: 80 },
  { name: "MySQL", img: "https://cdn.clever-cloud.com/uploads/2023/03/mysql.svg", level: 95 },
  { name: "React.js", img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", level: 85 },
  { name: "Node.js", img: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png", level: 80 },
  { name: "HTML", img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png", level: 95 },
  { name: "CSS", img: "https://w7.pngwing.com/pngs/393/49/png-transparent-css-logo-thumbnail.png", level: 90 },
  { name: "JavaScript", img: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png", level: 85 },
  { name: "Power BI", img: "https://iqratechnology.com/wp-content/uploads/2022/06/1-1.jpg", level: 80 },
  { name: "Django", img: "https://w7.pngwing.com/pngs/885/420/png-transparent-django-hd-logo-thumbnail.png", level: 75 },
];

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(
    skillsData.map((skill) => ({ ...skill, animatedLevel: 0 }))
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedSkills(skillsData);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="skills-section">
      <h2 className="skills-title">
        My <span>Skills</span>
      </h2>
      <div className="skills-container">
        <div className="skills-left">
          {animatedSkills.slice(0, 5).map((skill, index) => (
            <div className="skill" key={index}>
              <img src={skill.img} alt={skill.name} className="skill-img" />
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
        <div className="skills-right">
          {animatedSkills.slice(5).map((skill, index) => (
            <div className="skill" key={index}>
              <img src={skill.img} alt={skill.name} className="skill-img" />
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
