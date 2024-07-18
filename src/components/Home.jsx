import React from 'react';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import pasonglogos from '../assets/pasonglogos.png'; // Path to Pasong logo image

export default function Home() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>

            {/* SIDEBAR DASHBOARD */}
            <div style={{ width: '280px', backgroundColor: '#0d47a1', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '3rem' }}>
                
                <img src={pasonglogos} alt="Pasong Logo" style={{ height: '120px', width: 'auto' }} />
                
                <h3 style={{ color: 'white', marginTop: '2em' }}>
                    <button style={dashboardButtonStyle}>
                        Dashboard
                    </button>
                </h3>
                
                <div style={{ width: '100%', marginTop: '20px', textAlign: 'left', paddingLeft: '20px' }}>
                    <button style={buttonStyle}>
                        <i className="material-icons" style={iconStyle}>person</i>
                        User
                    </button>
                    <button style={buttonStyle}>
                        <i className="material-icons" style={iconStyle}>group</i>
                        Resident
                    </button>
                    <button style={buttonStyle}>
                        <i className="material-icons" style={iconStyle}>description</i>
                        Documents
                    </button>
                    <button style={buttonStyle}>
                        <i className="material-icons" style={iconStyle}>history</i>
                        History
                    </button>
                    <button style={buttonStyle}>
                        <i className="material-icons" style={iconStyle}>exit_to_app</i>
                        Log Out
                    </button>
                </div>
            </div>
            
            <div style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                {/* HEADER */}
                <div style={{ height: '80px', backgroundColor: '#efebe9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ width: '120px' }}></div> 
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '4rem' }}>
                        <i className="material-icons" style={{ color: '#1976d2', fontSize: '26px', marginRight: '1rem' }}>person</i>
                        <a href="/admin" style={{ color: '#1976d2', fontSize: '20px', textDecoration: 'none' }}>Admin</a>
                    </div>
                </div>
                
                {/* MAIN CONTENT */}
                <div style={{ padding: '20px' }}>
                    <h2>DASHBOARD</h2>
                    
                    {/* Table for Barangay Officials */}
                    <h3>Barangay Officials</h3>
                    <div style={tableContainerStyle}>
                        <table className="table table-striped" style={{ marginBottom: '0' }}>
                            <thead>
                                <tr>
                                    <th>Picture</th>
                                    <th>Name</th>
                                    <th>Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="path/to/picture1.jpg" alt="Official 1" style={{ height: '100px', width: 'auto' }} /></td>
                                    <td>Official 1</td>
                                    <td>Information about Official 1</td>
                                </tr>
                                <tr>
                                    <td><img src="path/to/picture2.jpg" alt="Official 2" style={{ height: '100px', width: 'auto' }} /></td>
                                    <td>Official 2</td>
                                    <td>Information about Official 2</td>
                                </tr>
                                <tr>
                                    <td><img src="path/to/picture3.jpg" alt="Official 3" style={{ height: '100px', width: 'auto' }} /></td>
                                    <td>Official 3</td>
                                    <td>Information about Official 3</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Styles for the buttons and icons
const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    cursor: 'pointer',
    padding: '10px 0'
};

const iconStyle = {
    marginRight: '10px',
    fontSize: '24px'
};

const dashboardButtonStyle = {
    backgroundColor: 'white',
    border: '2px solid white',
    borderRadius: '2px',
    color: 'black',
    fontSize: '18px',
    padding: '10px 20px',
    cursor: 'pointer'
};

const tableContainerStyle = {
    border: '1px solid #ddd',
    borderRadius: '2px',
    maxHeight: '400px', // Adjust height as needed
    overflowY: 'scroll',
    padding: '10px'
};
