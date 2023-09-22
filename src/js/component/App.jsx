import React from "react";
import Navbar from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer" ;
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TuExperiencia from "./TuExperiencia/TuExperiencia";



function App () {
	return (
		<div>
			<Navbar/>
			<Intro/>
			<Skills/>
			<TuExperiencia />
			<Works/>
			<Contact/>
			<Footer />
			<ToastContainer />
			
		</div>
	);
};

export default App;
