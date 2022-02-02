import React, { useEffect } from 'react'
import { FcDownload } from 'react-icons/fc'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiStyledcomponents, SiTypescript, SiWebpack, SiBabel } from 'react-icons/si'
import '../newStyles/components/Banner.css'


const image = new Image();
let imageUrl = "https://i.postimg.cc/pTrprFYH/Whats-App-Image-2021-09-13-at-14-49-25-Photo-Room.png";


export const Banner = () => {

  useEffect(() => {
    image.onload = function() {
      document.getElementById("image");
    }

    image.src = imageUrl;

  }, [])

  return (
    <section className="banner">
      <div className="presentation">
        <div className="presentation__info">
        <h3>Desarrollador Frontend</h3>
        <h1>Neyen E.<br/> Marinelli</h1>
        <a href="#about">Más sobre mi <span><i className="fas fa-chevron-down"></i></span></a>
        </div>
      </div>
      <div className="information">
        <FaReact className='react'/>
        <SiRedux className='redux'/>
        <SiStyledcomponents className='styled'/>
        <picture>
          <img src={imageUrl} alt="Neyen Marinelli"/>
        </picture>
        <SiTypescript className='types'/>
        <SiWebpack className='webpack'/>
        <SiBabel className='babel'/>
        <a href="https://drive.google.com/file/d/1W3_nzhNOZ0DqhvUlPO0PVEUX-JTw1eb_/view?usp=sharing" download className="main__banner--cv">
          Descargar CV
          <FcDownload />
        </a>
      </div>
    </section>
  )
};
