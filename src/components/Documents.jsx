import React, { useEffect } from 'react';
import M from 'materialize-css';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS

export default function Documents() {
    const navigate = useNavigate();

    useEffect(() => {
        M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {});
    }, []);

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
                <h3 style={{ fontSize: '24px', marginTop: '0' }}>Documents</h3>
                
                {/* Search Bar */}
                <div className="input-field" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <i className="material-icons" style={{ marginRight: '20px' }}>search</i>
                    <input id="search" type="text" style={{ maxWidth: '300px', marginBottom: '0' }} />
                    <label htmlFor="search" style={{ left: '48px' }}>Search Resident</label>
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
                                <th style={{ width: '20%' }}>Name</th>
                                <th style={{ width: '20%' }}>Birthday</th>
                                <th style={{ width: '20%' }}>Sex</th>
                                <th style={{ width: '20%' }}>Contact Number</th>
                                <th style={{ width: '20%' }}>Documents</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>01/01/1990</td>
                                <td>Male</td>
                                <td>123-456-7890</td>
                                <td>
                                    <button className="btn dropdown-trigger" data-target="dropdown1">Select Document</button>
                                    <ul id="dropdown1" className="dropdown-content">
                                        <li><a href="#!">Barangay Clearance</a></li>
                                        <li><a href="#!">Business Clearance</a></li>
                                        <li><a href="#!">Barangay Indigency</a></li>
                                        <li><a href="#!">Barangay Residency</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>02/02/1992</td>
                                <td>Female</td>
                                <td>098-765-4321</td>
                                <td>
                                    <button className="btn dropdown-trigger" data-target="dropdown2">Select Document</button>
                                    <ul id="dropdown2" className="dropdown-content">
                                        <li><a href="#!">Barangay Clearance</a></li>
                                        <li><a href="#!">Business Clearance</a></li>
                                        <li><a href="#!">Barangay Indigency</a></li>
                                        <li><a href="#!">Barangay Residency</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>02/02/1992</td>
                                <td>Female</td>
                                <td>098-765-4321</td>
                                <td>
                                    <button className="btn dropdown-trigger" data-target="dropdown2">Select Document</button>
                                    <ul id="dropdown2" className="dropdown-content">
                                        <li><a href="#!">Barangay Clearance</a></li>
                                        <li><a href="#!">Business Clearance</a></li>
                                        <li><a href="#!">Barangay Indigency</a></li>
                                        <li><a href="#!">Barangay Residency</a></li>
                                    </ul>
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
