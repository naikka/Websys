import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import pasonglogos from '../assets/pasonglogos.png'; // Path to Pasong logo image

export default function Documents() {
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const handleNavigation = (type) => {
        if (type === 'dashboard') {
            navigate('/Home');
        } else if (type === 'user') {
            navigate('/User');
        } else if (type === 'resident') {
            navigate('/Resident');
        } else if (type === 'documents') {
            navigate('/Documents');
        } else if (type === 'history') {
            navigate('/History');
        } else if (type === 'exit') {
            navigate('/LogInPage');
        }
        if (isSidebarOpen) setSidebarOpen(false); // Collapse sidebar after navigation
    };

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState); // Toggle sidebar open/close state
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* SIDEBAR DASHBOARD */}
            <div style={{ 
                width: isSidebarOpen ? '280px' : '80px', 
                backgroundColor: '#0d47a1', 
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                paddingTop: '2rem', 
                transition: 'width 0.3s' 
            }}>
                <button 
                    onClick={toggleSidebar} 
                    style={{ 
                        backgroundColor: 'transparent', 
                        border: 'none', 
                        cursor: 'pointer', 
                        alignSelf: 'flex-end', 
                        marginRight: '1.5em', 
                        marginBottom: '1rem' 
                    }}
                >
                    <i className="material-icons" style={{ color: 'white', fontSize: '26px' }}>
                        {isSidebarOpen ? 'dehaze' : 'menu'}
                    </i>
                </button>
                {isSidebarOpen && <img src={pasonglogos} alt="Pasong Logo" style={{ height: '120px', width: 'auto' }} />}
                <div style={{ 
                    width: '100%', 
                    marginTop: '20px', 
                    textAlign: 'left', 
                    paddingLeft: isSidebarOpen ? '20px' : '0', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: isSidebarOpen ? 'flex-start' : 'center' 
                }}>
                    <button style={buttonStyle} type="button" onClick={() => handleNavigation('dashboard')}>
                        <i className="material-icons" style={iconStyle}>dashboard</i>
                        {isSidebarOpen && <span>Dashboard</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleNavigation('user')}>
                        <i className="material-icons" style={iconStyle}>person</i>
                        {isSidebarOpen && <span>User</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleNavigation('resident')}>
                        <i className="material-icons" style={iconStyle}>group</i>
                        {isSidebarOpen && <span>Resident</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleNavigation('documents')}>
                        <i className="material-icons" style={iconStyle}>description</i>
                        {isSidebarOpen && <span>Documents</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleNavigation('history')}>
                        <i className="material-icons" style={iconStyle}>history</i>
                        {isSidebarOpen && <span>History</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleNavigation('exit')}>
                        <i className="material-icons" style={iconStyle}>exit_to_app</i>
                        {isSidebarOpen && <span>Log Out</span>}
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
                    <h2>User</h2>
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
