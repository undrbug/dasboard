import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import './UserDetail.css';
import { URL_BASE_IMG } from "../../hooks/useFetch";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

const UserDetail = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const { data: user, loading, error } = useFetch(`/users/${id}`);

    if (loading) return <p>Loading user...</p>;
    if (error) return;

    return (
        <div className="user-detail-card">
            <div className="user-detail-header">
                <img src={`${URL_BASE_IMG}${user.image}`} alt={`${user.name}'s profile`} className="user-image" />
                <h2>{user.name}</h2>
                <p className="user-email">{user.email}</p>
            </div>
            <div className="user-detail-body">
                <p><strong>Teléfono:</strong> {user.phone}</p>
                <p><strong>Dirección:</strong> {user.adress}, {user.state}, {user.country}</p>
                <p><strong>Fecha de Registro:</strong> {new Date(user.Date_Record).toLocaleDateString()}</p>
                <p><strong>Activo:</strong> {user.isActive ? "Sí" : "No"}</p>
                <p><strong>Verificado:</strong> {user.verified ? "Sí" : "No"}</p>
                <a href={user.detail} target="_blank" rel="noopener noreferrer" className="user-detail-link">Ver Detalles</a>

                <Link to={"#"} onClick={() => navigate(-1)} className="user-detail-link">Volver</Link>
            </div>
        </div>
    )

}

export default UserDetail;