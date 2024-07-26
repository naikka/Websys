import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS
import axios from 'axios';

export default function User() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/home"); 
    };

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3002/users')
          .then(response => {
            setUserList(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    };

    const deleteUser = (userid) => {
        axios.delete(`http://localhost:3002/deleteUser/${userid}`)
          .then(response => {
            console.log(response);
            setUserList(userList.filter(item => item.userid !== userid));
          })
          .catch(error => {
            console.error(error);
          });
    };

    const handleAddUser = () => {
        navigate('/createUser'); // Assuming this is the route for creating a new user
    };

    return (
        <div style={{ height: '100vh' }}>
            {/* HEADER */}
            <div style={{ 
                height: '10vh', 
                backgroundColor: '#efebe9', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '0 20px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}>
                <button 
                    onClick={handleGoBack} 
                    style={{ 
                        backgroundColor: 'transparent', 
                        border: 'none', 
                        cursor: 'pointer', 
                        display: 'flex', 
                        alignItems: 'center' 
                    }}
                >
                    <i className="material-icons" style={{ color: '#1976d2', fontSize: '26px', marginRight: '8px' }}>
                        arrow_back
                    </i>
                    <span style={{ color: '#1976d2', fontSize: '18px' }}>Back</span>
                </button>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '4rem' }}>
                    <i className="material-icons" style={{ color: '#1976d2', fontSize: '26px', marginRight: '1rem' }}>person</i>
                    <a href="/admin" style={{ color: '#1976d2', fontSize: '20px', textDecoration: 'none' }}>Admin</a>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <h2 style={{ fontSize: '24px', marginLeft: '25rem', marginTop: '6px' }}>Manage Users</h2>
                    <button 
                        onClick={handleAddUser}
                        style={{ 
                            backgroundColor: '#0d47a1', 
                            color: 'white', 
                            border: 'none', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            alignItems: 'center', 
                            padding: '8px 12px', 
                            borderRadius: '4px', 
                            marginRight: '25em'
                        }}
                    >
                        <i className="material-icons">add</i>
                    </button>
                </div>
                <div style={{ 
                    backgroundColor: 'white',
                    border: '1px solid #ddd', 
                    padding: '0', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                    height: '78vh',
                    width: '50%',
                    margin: 'auto', 
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column'  
                }}>
                    <table className="striped" style={{ width: '100%', marginBottom: '0', tableLayout: 'auto' }}>
                        <thead style={{ position: 'sticky', top: '0', marginTop: '0', backgroundColor: 'white', zIndex: '1' }}>
                            <tr>
                                <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd' }}>User</th>
                                <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((val, key) => (
                                <tr key={key}>
                                    <td style={{ textAlign: 'center' }}>{val.username}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Link to="/updateUser">
                                            <button style={{
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                color: '#1976d2',
                                                cursor: 'pointer',
                                                padding: '8px',
                                                marginRight: '5px'
                                            }}>
                                                <i className="material-icons">edit</i>
                                            </button>
                                        </Link>

                                        <button onClick={() => deleteUser(val.userid)} style={{
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            color: 'red',
                                            cursor: 'pointer',
                                            padding: '8px',
                                            marginRight: '5px'
                                        }}>
                                            <i className="material-icons">delete</i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
