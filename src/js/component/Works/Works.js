import React from 'react';
import './Works.css';
import tikets from '../../../img/wizzz.png';
import retro2 from '../../../img/retro2.png';
import gifs from '../../../img/gifs.png';
const proyectosData = [
  {
    title: 'Wizz Mail',
    long_description:
      'Aplicación encargada de gestionar y manipular los tickets de los clientes mediante la inteligencia artificial.¡Bienvenidos al futuro!',
    img: tikets,
    link_github: 'https://github.com/Antoniomorales17/WizzMail',
    link_demo: 'https://fronted-ticketing-app.vercel.app/',
  },
  {
    title: 'Quiz VideoGames',
    long_description:
      'Aplicación de cuestionario de videojuegos con un estilo retro, desarrollada en React. ¡Demuestra tus conocimientos sobre los videojuegos clásicos y diviértete!.',
    img: retro2,
    link_github: 'https://github.com/Antoniomorales17/QuizGames',
    link_demo: 'https://quizvideogames.vercel.app/',
  },
  {
    title: 'Gif & Photo Search',
    long_description:
      'Esta es una aplicación web que te permite buscar y descargar GIFs y fotos de Giphy y Pixabay.¡Disfruta de la diversión de la búsqueda y la descarga de contenido visual!',
    img: gifs,
    link_github: 'https://github.com/Antoniomorales17/Gif-Photo-Search-App',
    link_demo: 'https://gifphotosearch.vercel.app/',
  },
  // Agrega más proyectos aquí
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTittle">Mis Proyectos</h2>
      <div className="worksContainer">
        {proyectosData.map((proyecto, index) => (
          <div className="project" key={index}>
            <div className="projectCard">
              <h3>{proyecto.title}</h3>
              <div className="imgContainer">
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
