import React from 'react';
import { Knowledge } from '../components/Knowledge';

export const KnowledgeContainer = () => {
  return (
    <section className="main__conocimientos">
        <div className="container">
        <h2 className="heading__lvl--two">Mis Conocimientos</h2>
        <div className="conocimientos">
        <Knowledge type="html" iconType="html5">
          <ul>
            <li>Maquetación Semantica</li>
            <li>Accesibilidad</li>
            <li>Manipulación del DOM</li>
          </ul>
        </Knowledge>
        <Knowledge type="css" iconType="css3-alt">
          <ul>
            <li>Responsive Design Mobile First</li>
            <li>Preprocesadores</li>
            <li>Sass</li>
            <li>Less</li>
            <li>Frameworks css como Bootstrap y Tailwind</li>
          </ul>
        </Knowledge>
        <Knowledge type="js" iconType="js">
          <ul>
            <li>Manejo de Paquetes con NPM</li>
            <li>Single Page Application con Vanilla JS</li>
            <li>Manejo de Webpack</li>
            <li>Babel</li>
            <li>ReactJS</li>
            <li>SPA con React Router</li>
            <li>React Redux y Context</li>
            <li>Styled Components</li>
            <li>Autenticación con JWT</li>
          </ul>
        </Knowledge>
        <Knowledge type="git" iconType="github-square">
          <ul>
            <li>Trabajo con git en la terminal</li>
            <li>Curso de Git y Github Completo en Platzi Aprobado</li>
            <li>Uso de Github y Github Pages</li>
            <li>Deploy de las aplicaciones</li>
            <li>Conocimiento de las buenas practicas en Git y Github</li>
          </ul>
        </Knowledge>
        </div>
        <svg className="orange--wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </section>
  )
}
