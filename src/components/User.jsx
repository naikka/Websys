import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS

export default function User() {
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
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <h2 style={{ fontSize: '32px', marginLeft: '5rem', marginTop:'6px'}}>Manage Users</h2>
                    <button 
                        style={{ 
                            backgroundColor: '#0d47a1', 
                            color: 'white', 
                            border: 'none', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            alignItems: 'center', 
                            padding: '8px 12px', 
                            borderRadius: '4px', 
                            marginRight:'5em'
                        }}
                    >
                        <i className="material-icons">add</i>
                    </button>
                </div>
                <div style={tableContainerStyle}>
                    <table className="table table-striped" style={{ width: '90%', margin: '0 auto', tableLayout: 'auto' }}>
                        <thead style={{ position: 'sticky', top: '0', backgroundColor: 'white', zIndex: '1' }}>
                            <tr>
                                <th style={{ textAlign: 'center' }}>User</th>
                                <th style={{ textAlign: 'center' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ height: '20px' }}>
                                <td style={{ textAlign: 'center' }}>John Doe</td>
                                <td style={{ textAlign: 'center' }}>
                                    <button style={actionButtonStyle}>
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button style={actionButtonStyle}>
                                        <i className="material-icons">delete</i>
                                    </button>
                                </td>
                            </tr>
                            <tr style={{ height: '20px' }}>
                                <td style={{ textAlign: 'center' }}>Jane Smith</td>
                                <td style={{ textAlign: 'center' }}>
                                    <button style={actionButtonStyle}>
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button style={actionButtonStyle}>
                                        <i className="material-icons">delete</i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Styles for the action buttons and table container
const actionButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1976d2',
    cursor: 'pointer',
    padding: '8px',
    marginRight: '5px'
};

const tableContainerStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '90%', // Set the width of the table container
    margin: '0 auto', // Center the table container
    height: '500px',
    overflowY: 'scroll',
    padding: '10px',
    backgroundColor: 'white'
};
