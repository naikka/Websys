import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS

export default function Resident() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div style={{ height: '100vh' }}>
            {/* HEADER */}
            <div style={{ 
                height: '80px', 
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
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5', height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
                <h3 style={{ fontSize: '24px', marginTop: '0' }}>Resident List</h3>
                
                {/* Search Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 20px', padding: '10px 0' }}>
                    <div className="input-field" style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="material-icons" style={{ marginRight: '20px' }}>search</i>
                        <input id="search" type="text" style={{ maxWidth: '300px', marginBottom: '0' }} />
                        <label htmlFor="search" style={{ left: '48px' }}>Search Resident</label>
                    </div>
                    <button className="btn waves-effect waves-light" style={{ backgroundColor: '#1976d2', color: 'white' }}>
                        <i className="material-icons left" style={{paddingRight:'4px', margin:'0'}}>add</i>
                        Create
                    </button>
                </div>

                {/* Table Container */}
                <div style={{ 
                    backgroundColor: 'white', 
                    padding: '20px', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                    maxHeight: '70vh', 
                    overflowY: 'auto' 
                }}>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birthday</th>
                                <th>Sex</th>
                                <th>Contact Number</th>
                                <th>Marital Status</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>01/01/1990</td>
                                <td>Male</td>
                                <td>123-456-7890</td>
                                <td>Single</td>
                                <td>
                                    <button className="btn-flat">
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button className="btn-flat">
                                        <i className="material-icons">delete</i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>02/02/1992</td>
                                <td>Female</td>
                                <td>098-765-4321</td>
                                <td>Married</td>
                                <td>
                                    <button className="btn-flat">
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button className="btn-flat">
                                        <i className="material-icons">delete</i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>02/02/1992</td>
                                <td>Female</td>
                                <td>098-765-4321</td>
                                <td>Married</td>
                                <td>
                                    <button className="btn-flat">
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button className="btn-flat">
                                        <i className="material-icons">delete</i>
                                    </button>
                                </td>
                            </tr>
                            
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
