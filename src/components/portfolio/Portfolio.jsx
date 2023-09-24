import "./portfolio.css";

import IMG1 from "../../assets/chat-app.png";
import IMG2 from "../../assets/todo.png";
import IMG3 from "../../assets/quiz.jpeg";
import IMG4 from "../../assets/portfolio.png";

import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Real Time Chat app ",
      img: IMG1,
      description:
        " This project demonstrates proficiency in building real-time, complex features like real-time messaging and user authentication",
      technologies: "React Js |  | EXpress JS | mongoDb",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/hariompatel1/mern-chat-app",
    },
    {
      id: 2,
      title: "ToDo List",
      img: IMG2,
      description:
        " fully functional web application with essential features such as real-time updates, user authentication, and task management.",
      technologies: "React || EXpress JS | mongoDb",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/hariompatel1/Mern-Stack_Todo",
    },
    {
      id: 3,
      title: "Quiz App",
      img: IMG3,
      description: " This project demonstrates your proficiency in developing interactive and data-driven applications using React.js",
      technologies: "React ",
      link: "https://quiz-appr.netlify.app/",
      github: "https://github.com/hariompatel1/millionaire-quiz-app_react-project",
    },
    {
      id: 4,
      title: "Portfolio",
      img: IMG4,
      description: " This in this project you Knoe about me",
      technologies: "React ",
      link: "https://6510284151dc6953d3f8b4e7--frolicking-rugelach-f76ead.netlify.app/",
      github: "#",
    },
  
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
