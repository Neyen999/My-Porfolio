import React, { useState, useEffect } from 'react';
import './styles/main/style.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { KnowledgeContainer } from './container/knowledgeContainer';
import { ProjectsContainer } from './container/projectsContainer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

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
        <KnowledgeContainer />
        <ProjectsContainer />
        <Contact />
        <Footer />
        </>
      }
    </>
  );
}

export default Home;
