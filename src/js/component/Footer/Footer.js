import React from 'react';
import "./Footer.css"

const Intro = () => {
  return (
    <footer className='footer'>
         &copy; 2023 Antonio Morales
         
         <a target="_blank" href="https://www.zaask.es/usuario/antoniomoragimenez" style={{ display: "inline-block", textDecoration: "none" }}>
  <img src="https://www.zaask.es/widget?user=525472&widget=pro-since" alt="Zaask" style={{ width: "60px", height: "auto", }} />
</a>

    </footer>
  );
};

export default Intro;