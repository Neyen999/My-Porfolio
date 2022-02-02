import React from 'react'
import '../newStyles/containers/projectContainer.css'
import { FaReact, FaSass } from 'react-icons/fa'
import { SiRedux, SiStyledcomponents, SiTypescript, SiWebpack, SiBabel, SiGraphql } from 'react-icons/si'

export const ProjectsContainer = () => {
  return (
    <section className="plans" id="proyectos">
      <div className="proyectos-destacados">
        <h2>Proyectos Destacados</h2>
        <article>
          <div className="project-details">
            <h3>Platzi Store</h3>
            <h3>
              <SiRedux className='redux'/>
              <FaReact className='react'/> 
              <SiWebpack className='webpack'/>
              <SiBabel className='babel'/>
            </h3>
            <p>Puedes verlo en: <a href="https://platzi-conf-merch-neyen.netlify.app/">Netlify</a></p>
            <p>Repositorio: <a href="https://github.com/Neyen999/platziconf-merch">Github</a></p>
            <p className='project-description'><strong>Platzi store</strong> es un proyecto realizado en la Escuela de Desarrollo Web de Platzi, es la primera introducción que tuve a <strong>Redux</strong></p>
          </div>
          <picture className='platzistore'>
            <img src="https://i.postimg.cc/gJPjFWM5/image-psd-3.png" alt="" />
          </picture>
        </article>
        <article>
          <div className="project-details">
            <h3>Aerolab Challenge</h3>
            <h3>
              <FaReact className='react'/>
              <SiTypescript className='types'/>
            </h3>
            <p>Puedes verlo en: <a href="https://aerolab-challenge-neyenmarinelli.netlify.app/">Netlify</a></p>
            <p>Repositorio: <a href="https://github.com/Neyen999/the-aerolab-challenge">Github</a></p>
            <p className='project-description'>El <strong>Aerolab Challenge</strong> es un desafío propuesto por Aerolab, donde debemos consumir su <a href='https://aerolabchallenge.docs.apiary.io/#'>API</a> para obtener datos de usuario y productos, y mediante peticiones <b>POST</b> agregar productos a la lista del usuario y también añadir puntos. <br/>Más información en: <a href='https://aerolabchallenge.docs.apiary.io/#'>Goncy/aerolab-challenge</a> </p>
          </div>
          <picture className='aerolab'>
            {/* <img src="https://i.postimg.cc/Yjc7bthd/image-psd-2.png" alt="" /> */}
          </picture>
        </article>
        <article>
          <div className="project-details">
            <h3>Petgram</h3>
            <h3>
              <SiGraphql className='styled'/>
              <FaReact className='react'/>
              <SiStyledcomponents className='styled'/>
            </h3>
            <p>Puedes verlo en: <a href="https://github.com/Neyen999/petgram">Vercel</a></p>
            <p>Repositorio: <a href="https://github.com/Neyen999/petgram">Github</a></p>
            <p className='project-description'><strong>Pegram</strong> es una aplicación realizada con <b>React</b>, <b>Styled components</b> y <b>Webpack</b>, con Backend en <strong>Vercel</strong>. También utilicé herramientas como <strong>react-icons, reach-router, react-apollo, react-helmet y propTypes</strong>, y utilizando autenticación con <b>JWT</b></p>
          </div>
          <picture className='petgram'>
            {/* <img src="https://i.postimg.cc/Yjc7bthd/image-psd-2.png" alt="" /> */}
          </picture>
        </article>
        <article>
          <div className="project-details">
            <h3>URL Shortener</h3>
            <h3>
              <FaReact className='react'/>
              <FaSass className='styled'/>
            </h3>
            <p>Puedes verlo en: <a href="https://neyen999.github.io/url-shortener/">Github Pages</a></p>
            <p>Repositorio: <a href="https://github.com/Neyen999/url-shortener">Github</a></p>
            <p className='project-description'><strong>URL Shortener</strong> es un proyecto de <a href='https://www.frontendmentor.io/'>FrontEndMentor.io</a>,  donde mediante el consumo de una API, recibimos una URL por parte del usuario, recortando la misma.</p>
          </div>
          <picture className='shortener'>
            {/* <img src="https://i.postimg.cc/Yjc7bthd/image-psd-2.png" alt="" /> */}
          </picture>
        </article>
      </div>

    </section>
  )
}
