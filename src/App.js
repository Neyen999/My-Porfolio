import React, { useState, useEffect } from 'react'
import { ProjectsContainer } from './container/projectsContainer'
import { Banner } from './components/Banner'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Loader } from './components/Loader'
import './newStyles/global.css'

function Home() {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <>
      {
        isLoading ? <Loader /> :
        <>
        <Banner />
        <About />
        <ProjectsContainer />
        <Contact />
        </>
      }
    </>
  );
}

export default Home;
