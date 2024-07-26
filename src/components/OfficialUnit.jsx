import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS
import axios from 'axios';

export default function OfficialUnit() {
   
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    const [officialList, setOfficialList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/officials')
          .then(response => {
            setOfficialList(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

      const deleteOfficial = (id) => {
        axios.delete(`http://localhost:3002/deleteresident/${id}`)
         .then(response => {
            console.log(response);
            // Update the officialList state to remove the deleted item
            setOfficialList(officialList.filter(item => item.id!== id));
          })
         .catch(error => {
            console.error(error);
          });
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
                <h3 style={{ fontSize: '24px', marginTop: '0' }}>Official Unit</h3>
                
                {/* Search Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 20px', padding: '0' }}>
                    <div className="input-field" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        <i className="material-icons" style={{ marginRight: '20px' }}>search</i>
                        <input id="search" type="text" style={{ maxWidth: '300px', marginBottom: '0' }} />
                        <label htmlFor="search" style={{ left: '48px' }}>Search Barangay Official</label>
                    </div>
                    <Link to="/OfficialCreate" ><button className="btn waves-effect waves-light" style={{ backgroundColor: '#1976d2', color: 'white' }}>
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
                                <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd' }}>Name</th>
                                <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd' }}>Position</th>
                                <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd' }}>Contact</th>
                                <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {officialList.map((val, key) => (
                            <tr>
                                <td style={{ textAlign: 'center' }}>{val.name}</td>
                                <td style={{ textAlign: 'center' }}>{val.position}</td>
                                <td style={{ textAlign: 'center' }}>{val.contact}</td>
                                <td style={{ textAlign: 'center' }}>
                                <Link to="/OfficialUpdate"><button className="btn-flat">
                                    <i className="material-icons">edit</i>
                                </button>
                                </Link>
                                <button  onClick={() => deleteOfficial(val.id)} className="btn-flat">
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
