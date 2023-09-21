import React, { useState } from 'react';
import './Works.css';
import tikets from '../../../img/wizzz.png';

const proyectosData = [
  {
    title: 'Wizz Mail',
    long_description:
      'Aplicación encargada de gestionar y manipular los tickets de los clientes mediante la inteligencia artificial. Trabajo final realizado en un equipo de 3 personas en un plazo de un mes. Para llevarlo a cabo utilizamos el framework React en la parte del Frontend y Python y Flask en la parte del servidor.',
    img: tikets,
    link_github: 'https://github.com/Antoniomorales17/WizzMail',
    link_demo: 'https://fronted-ticketing-app.vercel.app/',
  },
  // Agrega más proyectos aquí
];

const Works = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleDescription = (index) => {
    setSelectedProject(index);
    setShowDescription(!showDescription);
  };

  return (
    <section id="works">
      <h2 className="worksTittle">Mis Proyectos</h2>
      <div className="worksContainer">
        {proyectosData.map((proyecto, index) => (
          <div className={`project ${showDescription && selectedProject === index ? 'active' : ''}`} key={index}>
            <div className="projectCard">
              <h3>{proyecto.title}</h3>
              <div className="imgContainer" onClick={() => toggleDescription(index)}>
                <img src={proyecto.img} alt={proyecto.title} className="projectImg" />
                
              </div>
              <p className="project-description">{proyecto.long_description}</p>
              
              <div className="projectLinks">
                <a href={proyecto.link_github} target="_blank" rel="noopener noreferrer" className="github-link">
                  GitHub
                </a>
                <a href={proyecto.link_demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
