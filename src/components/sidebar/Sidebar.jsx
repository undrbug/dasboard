import React from 'react';

const Sidebar = () => {
    return (
        <div>
            {/* hacer un sidebar moderno */}
            <div className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

        </div>
    );
}

export default Sidebar;
