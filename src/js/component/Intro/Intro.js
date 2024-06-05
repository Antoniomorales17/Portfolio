import React from 'react';
import me from "../../../img/mee.png";
import btnImg from "../../../img/hireme.png"
import linkedin from "../../../img/linkedin.png"
import github from "../../../img/github.png"
import { Link } from 'react-scroll'
import "./Intro.css"

const Intro = () => {
  return (
    <section id='intro'>
    <div className='introContent'>
      <span className='Hello'>Bienvenidos,</span>
      <span className='introText'>
        Soy <span className='introName'>Antonio</span><br/>
        Programador Junior capaz de hacer <br/>cosas increíbles
      </span>
      <p className='introPara'>
        Con experiencia en marketing y comercio electrónico,<br/>
        siempre he sentido una profunda fascinación por la tecnología y el<br/>
        mundo digital. En mi nueva etapa como programador junior, estoy<br/>
        decidido a demostrar mi pasión y habilidades, creando soluciones<br/>
        impactantes e innovadoras. Estoy listo para enfrentar cualquier<br/>
        desafío y seguir sorprendiendo al mundo con mis logros.
      </p>
      <a href="https://drive.google.com/file/d/1zjN0jDb6eaRiJNdZfpI5aB4b1a6n-JDa/view" download="Mi_Curriculum.pdf">
  <button className='btn'><img src={btnImg} alt='btn' /> Ver mi currículum</button>
</a>
      

      </div>

     <img src={me} alt='Profile' className="bg" />


    </section>
  );
};

export default Intro;