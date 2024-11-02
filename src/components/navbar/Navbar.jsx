import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <h3>BH Dashboard</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/productos">Productos</Link>
      </nav>
    </header>
  );
}

export default Navbar;
