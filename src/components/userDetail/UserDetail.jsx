import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';

const UserDetail = () => {
    const { id } = useParams();

    const { data, loading, error } = useFetch(`/users/${id}`);

    if (loading) return <p>Loading user...</p>;
    if (error) return; 

    return (
        <div>
            <h2>Detalle del usuario</h2>
            <div className="user-detail">
                <h3>{data?.user?.name}</h3>
                <p>{data?.user?.email}</p>
                <p>{data?.user?.phone}</p>
            </div>
        </div>
    )

}   

export default UserDetail;