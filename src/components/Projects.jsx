import React, { useState } from 'react'
import { Knowledge } from './Knowledge'
import { IoLogoVercel } from 'react-icons/io5' 
import { SiStyledcomponents } from 'react-icons/si'
import { GrGraphQl } from 'react-icons/gr'


export const Projects = ({ slides }) => {

  const [current, setCurrent] = useState();

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>

      {slides.map((slide, index) => {
        return (
          <div key={index} className="plans--description one" onClick={() => {
            setCurrent(index)
          }}>
            <img src={slide.image} alt={slide.name} />
            <div className="card--info">
              <h2>{slide.name}</h2>
              <div className="card--tools">
              {
                slide.usedTech.map((techs, index) => (
                    <Knowledge key={index} type={techs} iconType={techs}>
                      { techs === "vercel" && <IoLogoVercel />}
                      { techs === "styledcomponents" && <SiStyledcomponents />}
                      { techs === "gql" && <GrGraphQl />}
                    </Knowledge>
                ))
              }
              </div>
              <div className="card--goto">
                <a href={slide.anchor} target="_blank" rel="noreferrer" className="card--site">Ver</a>
                <a href={slide.repository} target="_blank" rel="noreferrer" className="card--btn">Ir Al Repositorio</a>
              </div>
            </div>
          </div>
        )
      })}
      
    </>
  )
};
