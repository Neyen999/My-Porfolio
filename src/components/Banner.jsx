import React, { useEffect } from 'react'
import { FcDownload } from 'react-icons/fc'


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
    <section className="main__banner">
        <div className="main__banner--presentation container ">
          <div className="img--wrapper">
            <img id="image" src="https://i.postimg.cc/pTrprFYH/Whats-App-Image-2021-09-13-at-14-49-25-Photo-Room.png" alt="Mi carita muy común"/>
          </div>
          <div className="img--circle"></div>
          <h1 className="animate__animated animate__fadeInLeft">Mi nombre es Neyen</h1>
          <h2 className="animate__animated animate__fadeInLeft heading__lvl--two">Front End Developer</h2>
          <>
            <a href="https://drive.google.com/uc?export=download&id=1-vvFZSC5yBPxAqYx_eQUW1CD7jtsc4wC" download className="main__banner--cv">
              Descargar CV!
              <FcDownload />
            </a>
          </>
        </div>
    </section>
  );
};
