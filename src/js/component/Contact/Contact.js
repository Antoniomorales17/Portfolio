import React, {useRef} from 'react';
import "./Contact.css"
import html from "../../../img/html.png"
import css from "../../../img/css.png"
import java from "../../../img/java.png"
import react from "../../../img/react.png"
import python from "../../../img/python.png"
import sql from "../../../img/sql.png"
import github from "../../../img/github.png"
import bootstrap from "../../../img/bootstrap.png"
import tailwind from "../../../img/tailwind.png"
import postman from "../../../img/postman.png"
import flask from "../../../img/flask.png"
import linkedin from "../../../img/linkedin.png"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Añade los estilos CSS


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_25tuoo3', 'template_20a4b6c', form.current, 'JvLRSyuJg6PybVvii')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              toast.success("Mensaje enviado",{ autoClose: 3000 });
          }, (error) => {
              console.log(error.text);
              toast.error("Error al enviar el mensaje",{ autoClose: 3000 });
          });
      };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTittle'>Tecnologías</h1>
            <p className='clientDesc'>Estas son  las principales herramientas con las que trabajo en el mundo de la programación</p>
            <div className='clientImgs'>
                <img src={html} alt='HTML' className='clientImg'/> 
                <img src={css} alt='CSS' className='clientImg'/> 
                <img src={java} alt='JavasCript' className='clientImg'/> 
                <img src={react} alt='React' className='clientImg'/> 
                <img src={python} alt='Python' className='clientImg'/> 
                <img src={sql} alt='SQL' className='clientImg'/> 

                <img src={github} alt='Github' className='clientImg'/> 
                <img src={bootstrap} alt='Bootstrap' className='clientImg'/> 
                <img src={tailwind} alt='Tailwind' className='clientImg'/> 
                <img src={postman} alt='Postman' className='clientImg'/> 
                <img src={flask} alt='Flask' className='clientImg'/> 

            </div>


        </div>

        <div id='contact'>
            <h1 className='contactPageTittle'>¿Tienes una idea?</h1>
            <span className='contacDesc'>¡Cuéntamela!</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Tu nombre' name='your_name' />
                <input type='email' className='email' placeholder='Tu email' name='your_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Tu mensaje'></textarea>
                <button type='submit'value="Send" className='submitBtn'>Enviar</button>
                <div className='links'>
                <a href='https://www.linkedin.com/in/antonio-morales-gim%C3%A9nez' target='_blank' rel='noopener noreferrer'>
                    <img src={linkedin} alt='' className='link' />
                    </a>
                    <a href='https://github.com/Antoniomorales17' target='_blank' rel='noopener noreferrer'>
                    <img src={github} alt='HTML' className='link'/> 
                    </a>
                    
                </div>
            </form>


        </div>
    </section>
  );
};

export default Contact;