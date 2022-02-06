import React from 'react'
import { PictureGrid } from './PictureGrid'
import { FcDownload } from 'react-icons/fc'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiStyledcomponents, SiTypescript, SiWebpack, SiBabel } from 'react-icons/si'
import '../newStyles/components/Banner.css'
import '../newStyles/components/Information.css'

export const Banner = () => {

  return (
    <section className="banner">
      <div className="banner__presentation">
        <div>
        <h3>Desarrollador Frontend</h3>
        <h1>Neyen E.<br/> Marinelli</h1>
        <a href="#about">Más sobre mi <span><i className="fas fa-chevron-down"></i></span></a>
        </div>
      </div>
      <PictureGrid>
        <FaReact className='react'/>
        <SiRedux className='redux'/>
        <SiStyledcomponents className='styled'/>
        <SiTypescript className='types'/>
        <SiWebpack className='webpack'/>
        <SiBabel className='babel'/>
        <a href="https://drive.google.com/file/d/1W3_nzhNOZ0DqhvUlPO0PVEUX-JTw1eb_/view?usp=sharing" download className="main__banner--cv">
          Descargar CV
          <FcDownload />
        </a>
      </PictureGrid>
    </section>
  )
};
