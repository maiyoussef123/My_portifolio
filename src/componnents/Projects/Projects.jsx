import React, { useEffect, useState } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [projectsData, setProjectsData] = useState([]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Load projects automatically
  useEffect(() => {
    const projectNames = [
      "project1",
      "project2",
      "project3",
      "project4",
      "project5"
    ]; // هنا ممكن تضيفي أي اسم صورة جديدة بدون تعديل الكود

    const data = projectNames.map((name) => ({
      title: name.replace(/-/g, " "), // يحول dash لـ space
      description: "Project: " + name,
      img: `/projects/${name}.png`,
      link: `/projects/${name}/index.html`,
    }));

    setProjectsData(data);
  }, []);

  return (
    <div className="projects-section bg-dark py-5">
      <div className="container">
        <h1 className="text-white mb-5 text-center">My Projects</h1>
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
                onError={(e) =>
                  console.log("Image failed to load:", project.img)
                }
              />
              <h3 className="mt-3">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="project-btn">View Project</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
