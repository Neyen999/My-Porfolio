import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill } from 'react-icons/bs'
import '../newStyles/components/Header.css'

export const Header = () => {
  return (
    <header className="header" id="header">
      <Link to='/'>
        <BsFillHouseDoorFill />
      </Link>
    </header>
  );
};
