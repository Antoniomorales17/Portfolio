import React, { useState } from 'react';
import "./Navbar.css";
// import logo from "../../../img/logo100.png"
import menu from "../../../img/menu.png"
import contact from "../../../img/contact.png"

import { Link } from 'react-scroll'

 

const Navbar = () => {
  const [showMenu, setShowMenu] = useState (false);
 
  return (
    <nav className='navbar'>
      {/* <img src={logo} alt='Logo' className='logo' /> */}
      <div className='desktopMenu'>
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={100} className='desktopMenuListItem'> Home</Link>
        <Link  activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={100} className='desktopMenuListItem'> Habilidades</Link>
        <Link  activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={100} className='desktopMenuListItem'> Proyectos</Link>
        <Link   activeClass='active' to="clients" spy={true} smooth={true} offset={-50} duration={100}className='desktopMenuListItem'>Tecnologías </Link>

        </div>
        <button className='desktopMenuBtn' onClick={() =>{
          document.getElementById("contact").scrollIntoView({behavior:"smooth"});
        }}>
          <img src={contact} alt='' className='desktopMenuImg' />  Contáctame
        </button>

        <img src={menu} alt='Logo' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{display: showMenu? "flex" : "none"}}>
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={100} className='listItem'onClick={()=> setShowMenu(!false)} > Home</Link>
        <Link  activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={100} className='listItem'onClick={()=> setShowMenu(false)}> Habilidades</Link>
        <Link  activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={100} className='listItem'onClick={()=> setShowMenu(false)}> Proyectos</Link>
        <Link   activeClass='active' to="clients" spy={true} smooth={true} offset={-50} duration={100}className='listItem'onClick={()=> setShowMenu(false)}>Tecnologias </Link>
        <Link   activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={100}className='listItem'onClick={()=> setShowMenu(false)}>Contacto </Link>

        </div>
      
    </nav>
  
  );
};

export default Navbar;