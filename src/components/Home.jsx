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
                
                <h3 style={{ color: 'white', marginTop: '20px' }}>Dashboard</h3>
                
                
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
                
                {/* MAINCONTENT */}
                <div style={{ padding: '20px' }}>
                    
                    <h1>DASHBOARD</h1>
                    
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
