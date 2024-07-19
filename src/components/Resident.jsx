import React from 'react';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import pasonglogos from '../assets/pasonglogos.png'; // Path to Pasong logo image

export default function Home() {
    const navigate = useNavigate();

    const handleLoginClick = (type) => {
        if (type === 'dashboard') {
            // Handle personnel login
            navigate('/Home'); // Example route for personnel
        } else if (type === 'user') {
            // Handle admin login
            navigate('/User'); // Example route for admin
        } else if (type === 'resident') {
            // Handle admin login
            navigate('/Resident'); // Example route for admin
        } else if (type === 'documents') {
            // Handle admin login
            navigate('/Documents'); // Example route for admin
        } else if (type === 'history') {
            // Handle admin login
            navigate('/History'); // Example route for admin
        } else if (type === 'exit') {
            // Handle admin login
            navigate('/LogInPage'); // Example route for admin
        } 
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>

            {/* SIDEBAR DASHBOARD */}
            <div style={{ width: '280px', backgroundColor: '#0d47a1', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '3rem' }}>
                
                <img src={pasonglogos} alt="Pasong Logo" style={{ height: '120px', width: 'auto' }} />
                
                <h3 style={{ color: 'white', marginTop: '2em' }}>
                    <button style={dashboardButtonStyle} type="button" onClick={() => handleLoginClick('dashboard')}>
                        Dashboard
                    </button>
                </h3>
                
                <div style={{ width: '100%', marginTop: '20px', textAlign: 'left', paddingLeft: '20px' }}>
                    <button style={buttonStyle}>
                        <i className="material-icons" style={iconStyle} type="button" onClick={() => handleLoginClick('user')}>person</i>
                        User
                    </button>
                    <button style={buttonStyle}>
                        <i className="material-icons" style={iconStyle} type="button" onClick={() => handleLoginClick('resident')}>group</i>
                        Resident
                    </button>
                    <button style={buttonStyle}>
                        <i className="material-icons" style={iconStyle} type="button" onClick={() => handleLoginClick('documents')}>description</i>
                        Documents
                    </button>
                    <button style={buttonStyle}>
                        <i className="material-icons" style={iconStyle} type="button" onClick={() => handleLoginClick('history')}>history</i>
                        History
                    </button>
                    <button style={buttonStyle}>
                        <i className="material-icons" style={iconStyle} type="button" onClick={() => handleLoginClick('exit')}>exit_to_app</i>
                        Log Out
                    </button>
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
                    </div>
                </div>
            </div>
        </div>
    );
}