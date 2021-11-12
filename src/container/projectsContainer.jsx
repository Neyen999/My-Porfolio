import React from 'react';
import { Projects } from '../components/Projects';
import { Notes } from '../components/Notes';
import { SliderData }  from '../components/sliderData';

export const ProjectsContainer = () => {
  return (
    <section className="plans" id="proyectos">
      <h2 className="heading__lvl--two">Mis Proyectos</h2>
      <div className="plans__container">
        <Projects slides={SliderData}/>
      </div>
      <h2 className="heading__lvl--two">
        Notas sobre programación
      </h2>
      <Notes 
          linkTo="https://motley-soprano-b2e.notion.site/OOB-Object-Oriented-Programming-9d2f9a503d864c6797838072d1cfc5ac"
          noteTitle="Programación Orientada a Objetos"
        />
    </section>
  )
}
