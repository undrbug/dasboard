import './UserCard.css';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => (

<div className="user-card">
    <div className="user-card-header">
      <h3>{user.name}</h3>
    </div>
    <div className="user-card-body">
      <p>Email: <span>{user.email}</span></p>
      <Link to={user.detail} target='_blank'>Detalles</Link>
    </div>
  </div>
);
export default UserCard;