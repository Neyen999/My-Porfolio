import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
    <h3 className="heading__lvl--tree">Puedes encontrarme en...</h3>
    <ul className="social--media">
      <li>
        <a href="https://www.instagram.com/neyen_marinelli/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram-square"></i>
          <span>Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/neyen-marinelli-05261b17a/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
          <span>Linkedin</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/Neyen999" target="_blank" rel="noreferrer">
          <i className="fab fa-github-square"></i>
          <span>Github</span>
        </a>
      </li>
    </ul>
  </footer>
  );
};
