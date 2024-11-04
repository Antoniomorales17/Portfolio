import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJsSquare, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import './Works.css';
import tikets from '../../../img/wizzz.png';
import retro2 from '../../../img/retro2.png';
import gifs from '../../../img/gifs.png';
import shop1 from '../../../img/shop1.png';
import blog from '../../../img/blogw.png';
import filo from '../../../img/filo.png'
import bud from '../../../img/bud.png'
import back1 from '../../../img/back1.png'
import back2 from '../../../img/back2.png'
import back3 from '../../../img/back3.png'
import figma1 from '../../../img/figma1.png'
import figma2 from '../../../img/figma2.png'
import figma3 from '../../../img/figma3.png';
import food from '../../../img/food.png';

import find from '../../../img/find.png';

const iconMap = {
  React: faReact,
  'Node.js': faNodeJs,
  'JavaScript': faJsSquare,
  Python: faPython,
  Java: faJava,
  Tailwind: 'tailwind-icon', // Asegúrate de tener un icono para Tailwind o usar un SVG personalizado
  'Spring Boot': 'springboot-icon', // Igualmente, asegúrate de tener un icono para esto
  Django: 'django-icon', // Asegúrate de tener el icono correspondiente
  SQL: 'sql-icon', // Icono para SQL
  MongoDB: 'mongodb-icon', // Icono para MongoDB
  // Agrega más iconos según sea necesario
};
const proyectosData = [
  {
    title: 'Wizz Mail',
    long_description:
      'Aplicación encargada de gestionar y manipular los tickets de los clientes mediante la inteligencia artificial.¡Bienvenidos al futuro!',
    img: tikets,
    technologies: ['React', 'JavaScript', "Python", "Flask" ,"Postgresql"],
    link_github: 'https://github.com/Antoniomorales17/WizzMail',
    link_demo: 'https://fronted-ticketing-app.vercel.app/',
  },
  {
    title: 'AlmeriaFoodMap',
    long_description:
      'Es una aplicación web desarrollada para ofrecer a los usuarios una experiencia fácil y visual para encontrar y filtrar restaurantes en Almería',
    img: food,
    technologies: ["Python","Django", "MysqLite","Railway" ],
    link_github: 'https://github.com/Antoniomorales17/AlmeriaFoodMap',
    link_demo: 'https://almeriafoodmap.up.railway.app/restaurants/',
  },
  {
    title: 'Philosophy-App',
    long_description:
      'Bienvenido a la Aplicación de Filosofía, una aplicación de vanguardia diseñada para explorar el fascinante mundo de la filosofía',
    img: filo,
    technologies: ["React", "Tailwind" ],
    link_github: 'https://github.com/Antoniomorales17/Philosophy-App',
    link_demo: 'https://juanmogimenez.vercel.app/',
  },
  {
    title: 'finDeveloper',
    long_description:
      'Plataforma web diseñada para facilitar la búsqueda y el contacto directo con desarrolladores de todo el mundo',
    img: find,
    technologies: ["React", "Tailwind" ],
    link_github: 'https://github.com/Antoniomorales17/finDeveloper',
    link_demo: 'https://findeveloper.vercel.app/',
  },
  {
    title: 'NonoStore',
    long_description:
      "¡Bienvenido a nuestra Tienda de Ropa en línea! E-commerce donde encontrarás una selección de moda para todas las edades y géneros",
    img: shop1,
    technologies: ["React", "Tailwind" ],
    link_github: 'https://github.com/Antoniomorales17/NonoStore',
    link_demo: 'https://nonostore.vercel.app/',
  },
  {
    title: 'Quiz VideoGames',
    long_description:
      'Aplicación de cuestionario de videojuegos con un estilo retro, desarrollada en React. ¡Demuestra tus conocimientos sobre los videojuegos clásicos y diviértete!.',
    img: retro2,
    technologies: ["React", "Tailwind"],
    link_github: 'https://github.com/Antoniomorales17/QuizGames',
    link_demo: 'https://quizvideogames.vercel.app/',
  },
  {
    title: 'Gif & Photo Search',
    long_description:
      'Esta es una aplicación web que te permite buscar y descargar GIFs y fotos de Giphy y Pixabay.¡Disfruta de la diversión de la búsqueda y la descarga de contenido visual!',
    img: gifs,
    technologies: ["React", "Tailwind"],
    link_github: 'https://github.com/Antoniomorales17/Gif-Photo-Search-App',
    link_demo: 'https://gifphotosearch.vercel.app/',
  },
  {
    title: 'lavidadeunjunior',
    long_description:
      '¡Bienvenido a mi blog personal de programador junior! En este espacio, compartiré mis experiencias, conocimientos y aprendizajes mientras navego por el emocionante mundo de la programación.',
    img: blog,
    technologies: ["Wordpress"],
    link_demo: 'https://antoniomoragimenez.wordpress.com/',
  },
  {
    title: 'Aplicación de Asignación de Presupuesto',
    long_description:
      'Aplicación web que ayuda a los usuarios a gestionar sus finanzas al permitirles establecer y hacer un seguimiento de su presupuesto.',
    img: bud, technologies: ["React", "Tailwind" ],
    link_github: 'https://github.com/Antoniomorales17/Budget-allocation-app',
    link_demo: 'https://budget-allocation-app.vercel.app/',
  },


];

// Datos de los proyectos de Backend
const proyectosBackend = [
  {
    title: 'JobCompany',
    long_description: 'Aplicación Java diseñada para administrar la información de los empleados de una organización mediante el uso de Java Persistence API (JPA)',
    img: back1,
    technologies: ["Java", "SQL"],
    link_github: 'https://github.com/Antoniomorales17/MoralesGimenez_pruebatec1',

  },
  {
    title: 'tuCita',
    long_description: 'Se trata de una aplicación que permite a los usuarios pedir y gestionar sus citas con la administración. Puedes seleccionar la modalidad, registrar la hora en el calendario y editar el estado entre "En espera" y "Atendido"',
    img: back2,
    technologies: ["Java", "SpringBoot" , "SQL"],
    link_github: 'https://github.com/Antoniomorales17/MoralesAntonio_pruebatec2',

  },

  {
    title: 'Agencia & Sistema de reservas',
    long_description: 'Simulación de aplicación de reservas de habitiaciones de hotel y vuelos.(Git, Java, Spring Boot, Testing, JPA + Hibernate, Spring Security y JWT) para desarrollar una API REST.',
    img: back3,
    technologies: ["Java", "SpringBoot" , "SQL"],
    link_github: 'https://github.com/Antoniomorales17/MoralesAntonio_pruebatec4',

  },
  // Agrega más proyectos de UX aquí
];

// Datos de los proyectos de UX
const proyectosUXData = [
  {
    title: 'Gourmet Express',
    long_description: 'Prototipo de una aplicación de comida de lujo a domicilio. Figma para el modelaje y la arquitectura para crear la experiencia de usuario (UX)',
    img: figma2,
    link_figma: 'https://www.figma.com/design/JLlovkZQgY1iDY0dVrXIu8/Prototipo-de-alta-fidelidad-Gourmet-Express-%F0%9F%8D%A3?node-id=0%3A1&t=BMNtZiGh20yApBiA-1',

  },
  {
    title: 'WebMentor',
    long_description: 'Prototipo de una aplicación de formación y ayuda a personas de mayor edad en ámbitos digitales. Figma para el modelaje y la arquitectura para crear la experiencia de usuario',
    img: figma1,
    link_figma: 'https://www.figma.com/design/4BylQgWeCxRfaj84zN1uD1/WebMentor-hi-fi?node-id=1%3A69&t=9WdiOmM2maussUCa-1',

  },
  // Agrega más proyectos de UX aquí
];

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = (category) => {
    switch (category) {
      case 'Frontend':
        return proyectosData;
      case 'Backend':
        return proyectosBackend;
      case 'UX':
        return proyectosUXData;
      default:
        return [...proyectosData, ...proyectosBackend, ...proyectosUXData];
    }
  };

  return (
    <section id="works">
      <h2 className='tittleProyects'>Proyectos</h2>
      <div className="buttonContainer">
        <button 
          className={`filterButton ${selectedCategory === 'All' ? 'active' : ''}`} 
          onClick={() => handleCategoryChange('All')}
        >
          Todos
        </button>
        <button 
          className={`filterButton ${selectedCategory === 'Frontend' ? 'active' : ''}`} 
          onClick={() => handleCategoryChange('Frontend')}
        >
          Frontend
        </button>
        <button 
          className={`filterButton ${selectedCategory === 'Backend' ? 'active' : ''}`} 
          onClick={() => handleCategoryChange('Backend')}
        >
          Backend
        </button>
        <button 
          className={`filterButton ${selectedCategory === 'UX' ? 'active' : ''}`} 
          onClick={() => handleCategoryChange('UX')}
        >
          UX
        </button>
      </div>

      <div className="worksContainer">
        {filteredProjects(selectedCategory).map((proyecto, index) => (
          <div className="project" key={index}>
            <div className="projectCard">
              <h3>{proyecto.title}</h3>
              <div className="imgContainer">
                <img src={proyecto.img} alt={proyecto.title} className="projectImg" />
              </div>
              <p className="project-description">{proyecto.long_description}</p>
              <div className="techStack">
          {proyecto.technologies && proyecto.technologies.join(', ')}
        </div>
              <div className="projectLinks">
                {proyecto.link_github && (
                  <a href={proyecto.link_github} target="_blank" rel="noopener noreferrer" className="github-link">
                    GitHub
                  </a>
                )}
                {proyecto.link_demo && (
                  <a href={proyecto.link_demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                    Demo
                  </a>
                )}
                {proyecto.link_figma && (
                  <a href={proyecto.link_figma} target="_blank" rel="noopener noreferrer" className="figma-link">
                    Figma
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
