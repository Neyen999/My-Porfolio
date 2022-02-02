import React from 'react';
import '../newStyles/components/About.css'
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiStyledcomponents, SiTypescript, SiWebpack, SiBabel } from 'react-icons/si'

let imageUrl = "https://i.postimg.cc/pTrprFYH/Whats-App-Image-2021-09-13-at-14-49-25-Photo-Room.png";

export const About = () => {
  return (
    <section className='about' id='about'>
      <div className="information">
        <a href="https://www.instagram.com/neyen_marinelli/" className='ig'>
          <BsInstagram  className='socialicons'/>
        </a>
        <a href="https://twitter.com/Neyen6" className='tw'>
          <BsTwitter className='socialicons'/>
        </a>
        <picture>
          <img src={imageUrl} alt="Neyen Marinelli"/>
        </picture>
        <a href="https://www.linkedin.com/in/neyen-ezequiel-marinelli-05261b17a/" className='link'>
          <BsLinkedin className='socialicons'/>
        </a>
        <a href="https://github.com/Neyen999" className='gh'>
          <BsGithub className='socialicons'/>
        </a>
      </div>
      <div className="mydescription">
        <h2>Sobre mi</h2>
        <p>Mi nombre es Neyen, tengo 21 años y estoy estudiando Licenciatura en Informática y Tecnicatura en Programación en la <strong>Universidad Nacional de Quilmes</strong>, tambien estudio Desarrollo Web Frontend y Desarrollo Web Backend con Java en <strong>Platzi</strong>, obteniendo apoyo extra de plataformas <strong>Udemy</strong>. <br/><br/>
        </p>
        <div className="references">
          <img src="https://i.postimg.cc/FH24DhPJ/descarga-removebg-preview.png" alt="Universidad Nacional de Quilmes logo" />
          <img src="https://i.postimg.cc/Xvd0Pth1/Platzi-removebg-preview.png" alt="Platzi logo" />
          <img src="https://i.postimg.cc/63JqRR27/udemylogo-freelogovectors-net-400x160-removebg-preview.png" className='udemy' alt="Udemy logo" />
        </div>
        <p>
          Me gusta mucho hacer deportes, aprender cosas nuevas de todo tipo, y estar en ambientes donde pueda crecer como persona y profesional. Tengo facilidad para aprender cosas nuevas y llevarlas a la practica. Me especializo en <strong>Frontend</strong>, pero me gustaría aprender más sobre desarrollo <strong>Backend</strong> y <strong>Bases de Datos.</strong> Parte de mi stack <b>a continuación:</b>
          <br/><br/>
        </p>
        <div className="mystack">
        <SiBabel className='babel'/>
        <SiRedux className='redux'/>
        <SiStyledcomponents className='styled'/>
        <SiTypescript className='types'/>
        <SiWebpack className='webapck'/>
        <FaReact className='react'/>
        </div>
      </div>
    </section>
  );
};
