import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <h4>Dashboard</h4>
                <nav>
                    <NavLink to="/" className='link'>Home</NavLink>
                    <NavLink to="usuarios" className='link'>Ususarios</NavLink>
                    <NavLink to="productos" className='link'>Productos</NavLink>
                </nav>
            </div>

        </div>
    );
}

export default Sidebar;
