import useFetch from '../../hooks/useFetch';
import './HomeDashboard.css';

import React from 'react';

const HomeUserDashboard = () => {

    const { data: users, loading, error } = useFetch(`/users`);



    if (loading) return <p>Loading users...</p>;

    if (error) return;

    return (
        <>
            <div className="title">
                <h2>Informacion de usuarios</h2>
            </div>
            <div className="dashboard-container">
                <div className="dashboard-panel">
                    <p>Total de Usuarios registrados: <span>{users.count}</span></p>
                    <p>Total Páginas: <span>{users.totalPages}</span></p>
                    <p>Administradores: <span>{users.admins}</span></p>
                    <p>Activos: <span>{users.active}</span></p>
                    <p>Verificados: <span>{users.verified}</span></p>
                </div>
            </div>
        </>
    );
}

export default HomeUserDashboard;
