import React from 'react';
import "./Skills.css";
import AppDesign from "../../../img/app-design.png";
import websiteDesign from "../../../img/website-design.png";
import UiDesign from "../../../img/ui-design.png";

import { Link } from 'react-scroll'



const Skills = () => {

  return (
    <section id='skills'>
      <span className='skillTittle'>¿Qué es lo que hago?</span>
      <span className='skillDesc'>Soy un apasionado de la tecnología y me encuentro inmerso en el emocionante mundo del diseño web y la programación. Mi enfoque se centra en las tecnologías clave como HTML, CSS y JavaScript, que utilizo para dar vida a proyectos web creativos y funcionales. Además, me encanta trabajar con el framework React, que me permite construir aplicaciones web dinámicas y altamente interactivas</span>
      <div className='skillBars'>
      <div className='skillBar'>
        <img src={UiDesign} alt='UiDesign' className='skillBarImg' />
        <div className='skillBarText'>
          <h2>Diseño Web y Maquetación</h2>
          <p>Creo experiencias visuales atractivas y funcionales que cautivan a los usuarios. Construyo aplicaciones interactivas y dinámicas que brindan experiencias para recordar</p>
          </div>
          </div>

          <div className='skillBar'>
        <img src={websiteDesign} alt='websiteDesign' className='skillBarImg' />
        <div className='skillBarText'>
          <h2>Desarrollo Front-End con React</h2>
          <p> Me sumerjo en el mundo del Front-End utilizando React. Me permite dar vida a las ideas y crear productos web innovadores.</p>
          </div>
          </div>

          <div className='skillBar'>
        <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
        <div className='skillBarText'>
          <h2>Experiencia en Python y SQL</h2>
          <p> Además de mi pasión por el diseño y el desarrollo Front-End, también tengo experiencia en el mundo del back-end.Trabajo en la manipulación de datos y en la creación de sistemas eficientes que impulsan la funcionalidad de las aplicaciones.</p>
          </div>
        </div>
      </div>
      
    </section>


  );
};

export default Skills;