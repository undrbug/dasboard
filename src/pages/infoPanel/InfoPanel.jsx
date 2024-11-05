import React from 'react';
import HomeUsersDashboard from '../homeDashboard/HomeUsersDashboard';
import HomeProductsDashboard from '../homeDashboard/HomeProductsDashboard';
import './InfoPanel.css';

const InfoPanel = () => {
    return (
        <>
            <div className='info-panel-container'>
                <HomeUsersDashboard />
            </div>
            <div className='info-panel-container'>
                <HomeProductsDashboard />
            </div>
        </>
    );
}

export default InfoPanel;
