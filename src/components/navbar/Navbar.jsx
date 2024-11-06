import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <header >
        <nav className='navbar__links'>
          <NavLink to="/info" className='navbar__link'>Inicio</NavLink>
          <NavLink to="/usuarios" className='navbar__link'>Usuarios</NavLink>
          <NavLink to="/productos" className='navbar__link'>Productos</NavLink>
          <NavLink to="/graficos" className='navbar__link'>Gráficos</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
