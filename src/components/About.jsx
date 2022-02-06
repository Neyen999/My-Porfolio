import React from 'react';
import { PictureGrid } from './PictureGrid';
import '../newStyles/components/Information.css'
import '../newStyles/components/About.css'
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiStyledcomponents, SiTypescript, SiWebpack, SiBabel } from 'react-icons/si'

export const About = () => {
  return (
    <section className='about' id='about'>
      <PictureGrid>
        <a href="https://www.instagram.com/neyen_marinelli/" className='ig'>
          <BsInstagram  className='socialicons'/>
        </a>
        <a href="https://twitter.com/Neyen6" className='tw'>
          <BsTwitter className='socialicons'/>
        </a>
        <a href="https://www.linkedin.com/in/neyen-ezequiel-marinelli-05261b17a/" className='link'>
          <BsLinkedin className='socialicons'/>
        </a>
        <a href="https://github.com/Neyen999" className='gh'>
          <BsGithub className='socialicons'/>
        </a>
      </PictureGrid>
      <div className="mydescription">
        <div className="container">
        <h2>Sobre mi</h2>
        <p>Mi nombre es Neyen, tengo 21 años y estoy estudiando Licenciatura en Informática y Tecnicatura en Programación en la <strong>Universidad Nacional de Quilmes</strong>, tambien estudio Desarrollo Web Frontend y Desarrollo Web Backend con Java en <strong>Platzi</strong>, obteniendo apoyo extra de plataformas <strong>Udemy</strong>. <br/><br/>
        </p>
        <div className="education">
          <img src="https://i.postimg.cc/FH24DhPJ/descarga-removebg-preview.png" className='universidad' alt="Universidad Nacional de Quilmes logo" />
          <img src="https://i.postimg.cc/Xvd0Pth1/Platzi-removebg-preview.png" className='platzi' alt="Platzi logo" />
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
      </div>
    </section>
  );
};
