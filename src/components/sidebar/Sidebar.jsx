import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <nav>
                    <Link to="#" className='link'>Home</Link>
                    <Link to="#" className='link'>Ususarios</Link>
                    <Link to="#" className='link'>Productos</Link>
                </nav>
            </div>

        </div>
    );
}

export default Sidebar;
