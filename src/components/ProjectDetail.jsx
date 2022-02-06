import React from 'react';
import '../newStyles/components/ProjectDetail.css'

export const ProjectDetail = ({ projectName, children, deploySite, deploySiteUrl, repositoryUrl, description, pictureClass }) => {
  return (
    <>
      <div className='project-details'>
        <h3>{projectName}</h3>
        <h3>
          {children}
        </h3>
        <p>Puedes verlo en: <a href={deploySiteUrl}>{deploySite}</a></p>
        <p>Repositorio: <a href={repositoryUrl}>Github</a></p>
        {description}
      </div>
      <picture className={pictureClass} />
    </>
  );
};
