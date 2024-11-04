import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import './Root.css';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />

      <footer>Proximamente el footer</footer>
    </div>
  );
}

export default Root;
