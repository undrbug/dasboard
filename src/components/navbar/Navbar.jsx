import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <header >
        <nav className='navbar__links'>
          <Link to="/" className='navbar__link'>Home</Link>
          <Link to="/usuarios" className='navbar__link'>Usuarios</Link>
          <Link to="/productos" className='navbar__link'>Productos</Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
