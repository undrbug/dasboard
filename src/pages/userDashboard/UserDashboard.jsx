import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../services/api";
import UserCard from "../../components/userCard/UserCard";
import Navbar from "../../components/navbar/Navbar";

const UserDashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data.users);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            } finally {
                setLoading(false);
            }
        };
        loadUsers();
    }, []);

    if (loading) return <p>Loading users...</p>;

    return (
        <div>
            <Navbar />
            <h2>Dashboard de usuarios</h2>
            <div className="user-card-container">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserDashboard;