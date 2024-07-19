import React from 'react';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import pasonglogos from '../assets/pasonglogos.png'; // Path to Pasong logo image

export default function Resident() {
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
        </div>
    );
}