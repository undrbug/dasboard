import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <header >
        <nav className='navbar__links'>
          <NavLink to="/" className='navbar__link'>Home</NavLink>
          <NavLink to="/usuarios" className='navbar__link'>Usuarios</NavLink>
          <NavLink to="/productos" className='navbar__link'>Productos</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
