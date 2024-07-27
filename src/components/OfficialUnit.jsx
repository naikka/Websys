import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS
import axios from 'axios';
import Axios from 'axios';

export default function OfficialUnit() {
    const navigate = useNavigate();
    const [officialList, setOfficialList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch the initial list of officials
        axios.get('http://localhost:3002/officials')
            .then(response => {
                setOfficialList(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        // Fetch search results whenever the search query changes
        if (searchQuery.trim() !== '') {
            axios.get(`http://localhost:3002/search-officials`, {
                params: { query: searchQuery }
            })
                .then(response => {
                    setOfficialList(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            // If the search query is empty, fetch all officials
            axios.get('http://localhost:3002/officials')
                .then(response => {
                    setOfficialList(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleGoBack = () => {
        navigate("/home"); // Navigate to the previous page
    };

    const deleteOfficial = (id) => {
        if (window.confirm("Are you sure you want to delete this official?")) {
            axios.delete(`http://localhost:3002/delete/${id}`)
                .then(response => {
                    console.log(response);
                    // Update the officialList state to remove the deleted item
                    setOfficialList(officialList.filter(item => item.id !== id));
                })
                .catch(error => {
                    console.error(error);
                });
        }
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
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5', height: '90vh', overflowY: 'auto' }}>
                <h3 style={{ fontSize: '24px', marginTop: '0', color:'#1976d2', fontWeight:'bold'  }}>BARANGAY OFFICIALS</h3>
                
                {/* Search Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 20px', padding: '0' }}>
                    <div className="input-field" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        <i className="material-icons" style={{ marginRight: '20px' }}>search</i>
                        <input 
                            id="search" 
                            type="text" 
                            style={{ maxWidth: '300px', marginBottom: '0' }} 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <label htmlFor="search" style={{ left: '48px' }}>Search Barangay Official</label>
                    </div>
                    <Link to="/OfficialCreate">
                        <button className="btn waves-effect waves-light" style={{ backgroundColor: '#1976d2', color: 'white' }}>
                            <i className="material-icons">add</i>
                        </button>
                    </Link>
                </div>

                {/* Table Container */}
                <div style={{ 
                    backgroundColor: 'white',
                    border: '1px solid #ddd', 
                    padding: '0', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                    maxHeight: '70vh', 
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column'  
                }}>
                    <table className="striped" style={{ width: '100%', marginBottom: '0', tableLayout: 'auto' }}>
                        <thead style={{ position: 'sticky', top: '0', marginTop:'0', backgroundColor: 'white', zIndex: '1' }}>
                            <tr>
                                <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd', color:'#1976d2'  }}>Name</th>
                                <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd', color:'#1976d2' }}>Position</th>
                                <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd', color:'#1976d2' }}>Contact</th>
                                <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd', color:'#1976d2' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {officialList.map((val, key) => (
                            <tr key={val.id}>
                                <td style={{ textAlign: 'center' }}>{val.name}</td>
                                <td style={{ textAlign: 'center' }}>{val.position}</td>
                                <td style={{ textAlign: 'center' }}>{val.contact}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <Link to="/officialUpdate"><button className="btn-flat">
                                        <i className="material-icons" style={{color: '#F9A602'}}>edit</i>
                                    </button>
                                    </Link>
                                    <button onClick={() => deleteOfficial(val.id)} className="btn-flat">
                                        <i className="material-icons" style={{color:'#B22222'}} >delete</i>
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
