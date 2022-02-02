import React, { useState, useEffect } from 'react'
import './newStyles/global.css'
import { ProjectsContainer } from './container/projectsContainer'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Loader } from './components/Loader'

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
        <Header />
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
