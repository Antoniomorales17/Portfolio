import React from 'react';
import './TuExperiencia.css';

import { Link } from 'react-scroll';

const experienciaLaboral = [
  {
    puesto: 'E-commerce Manager',
    empresa: 'Amvos Digital',
    periodo: '2021',
    descripcion:
      'Realización de un análisis en profundidad de los mercados B2C y B2B, identificando oportunidades de crecimiento y áreas de mejora.',
  },
  {
    puesto: 'Técnico Superio en Investigación de mercados',
    empresa: 'Ayuntamiento de Almeria',
    periodo: '2018',
    descripcion:
      'Participación en un proyecto integral de estudio del mercado de turoperadores en la ciudad, análisis de la competencia y tendencias del mercado turístico local',
  },
];

const estudios = [
  {
    titulo: 'Java / Spring Boot',
    institucion: 'Hack A Boss',
    periodo: '2024',
    descripcion:
      'Título de Programador backend especializado en Java y SpringBoot',
  },
  {
    titulo: 'Full Stack Developer',
    institucion: '4Geeks Academy',
    periodo: '2023',
    descripcion:
      'Título de Programador Full Stack en desarrollo de software',
  },
  {
    titulo: 'Máster en E-commerce',
    institucion: 'Universidad de la Rioja (UNIR)',
    periodo: '2019',
    descripcion:
      'Master en Comercio electrónico y analisis de entornos digitales.',
  },
  {
    titulo: 'Grado en Marketing e Investigación de mercados',
    institucion: 'Universidad de Almería (UAL)',
    periodo: '2015',
    descripcion:
      'Grado en Marketing, desarrollo y estudio de los elementos del mercado',
  },
];


const TuExperiencia = () => {
  return (
    <section id="tu-experiencia">
      <h2 className="section-title">Experiencia</h2>

      <div className="experiencia-laboral">
        <h3 className="section-subtitle">Experiencia Laboral</h3>
        {experienciaLaboral.map((item, index) => (
          <div className="experiencia-item" key={index}>
            <h4>{item.puesto}</h4>
            <p>{item.empresa}</p>
            <p>{item.periodo}</p>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="historial-estudios">
        <h3 className="section-subtitle">Historial de Estudios</h3>
        {estudios.map((item, index) => (
          <div className="estudio-item" key={index}>
            <h4>{item.titulo}</h4>
            <p>{item.institucion}</p>
            <p>{item.periodo}</p>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TuExperiencia;
