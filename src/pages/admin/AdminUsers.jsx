import React, {useEffect,useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const AdminUsers = () => {

    const [users, setUsers] = useState([]);

    const API_URL = "https://urbancloset-api.onrender.com/user";

    useEffect(() =>{
        const fetchUsers = async() => {
            try {
                const response = await axios.get(API_URL);

                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsers();
    },[]);

    const handleDeleteUser = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if(!confirmDelete) return;

        try{
            await axios.delete(`${API_URL}/${id}`);

            setUsers(users.filter((user) => user.id !== id));
        } catch (error){
            console.log(error);
        }
    };
  return (
    <div className='admin-users'>
        <Link to="/admin/dashboard" className='back-dashboard-btn'>
            ← Back to Dashboard
        </Link>
        <h1>Registered Users</h1>
        <div className='users-table'>
            <div className='users-header'>
                <span>Name</span>
                <span>Email</span>
                <span>Role</span>
                <span>Actions</span>
            </div>
            {users.map((user) => (
                <div className='user-row' key={user.id}>
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                    <span>{user.role || "User"}</span>

                    <button className='delete-user-btn'
                    onClick={() => handleDeleteUser(user.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    </div>
  );
};

export default AdminUsers
