import useFetch from "../../hooks/useFetch";
import UserCard from "../../components/userCard/UserCard";

const UserDashboard = () => {

    const { data: users, loading, error } = useFetch(`/users`);

    if (loading) return <p>Loading users...</p>;

    if (error) return;

    return (
        <div>
            <h2>Dashboard de usuarios</h2>
            <div className="user-card-container">
                {users?
                
                users?.users?.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))
            :
            <h3>No tenemos usuarios para mostrar</h3>
            }
            </div>
        </div>
    );
};

export default UserDashboard;