import React from 'react';

export const Header = () => {

  const toggleButton = () => {
    const list = document.querySelector(".header__nav--list");
    list.classList.toggle("is-active");

    const inicio = document.querySelector("#inicio");
    inicio.addEventListener("click", () => {
      list.classList.remove("is-active")
    })

    const proyectos = document.querySelector("#projects");
    proyectos.addEventListener("click", () => {
      list.classList.remove("is-active")
    })

    const contacto = document.querySelector("#contact");
    contacto.addEventListener("click", () => {
      list.classList.remove("is-active")
    })
  };

  return (
    <header className="header" id="header">
      <i onClick={toggleButton} className="fas fa-bars animate__animated animate__fadeInRight" id="burger-button"></i>
        <ul className="header__nav--list">
          <li><a href="#header" id="inicio">Inicio</a></li>
          <li><a href="#proyectos" id="projects">Proyectos</a></li>
          <li><a href="#contacto" id="contact">Contacto</a></li>
        </ul>
    </header>
  );
};
