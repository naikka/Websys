import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import pasonglogos from '../assets/pasonglogos.png'; // Path to Pasong logo image
import defaultimage from '../assets/defaultimage.png'; // Default image for officials

export default function Home() {
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const handleLoginClick = (type) => {
        if (type === 'dashboard') {
            navigate('/Home');
        } else if (type === 'user') {
            navigate('/User');
        } else if (type === 'resident') {
            navigate('/Resident');
        } else if (type === 'documents') {
            navigate('/Documents');
        } else if (type === 'officialunit') {
            navigate('/OfficialUnit'); // Updated route
        } else if (type === 'exit') {
            navigate('/LogInPage');
        }
        if (isSidebarOpen) setSidebarOpen(false); // Collapse sidebar after navigation
    };

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState); // Toggle sidebar open/close state
    };

    return (
        <div style={{ display: 'flex', height: '100%' }}>
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
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('dashboard')}>
                        <i className="material-icons" style={iconStyle}>dashboard</i>
                        {isSidebarOpen && <span>Dashboard</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('resident')}>
                        <i className="material-icons" style={iconStyle}>group</i>
                        {isSidebarOpen && <span>Resident</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('documents')}>
                        <i className="material-icons" style={iconStyle}>description</i>
                        {isSidebarOpen && <span>Documents</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('officialunit')}>
                        <i className="material-icons" style={iconStyle}>recent_actors</i> {/* Updated icon */}
                        {isSidebarOpen && <span>Barangay Official</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('user')}>
                        <i className="material-icons" style={iconStyle}>person</i>
                        {isSidebarOpen && <span>User</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('exit')}>
                        <i className="material-icons" style={iconStyle}>exit_to_app</i>
                        {isSidebarOpen && <span>Log Out</span>}
                    </button>
                </div>
            </div>

            <div style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                {/* HEADER */}
                <div style={{ height: '60px', backgroundColor: '#efebe9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ width: '120px' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '4rem' }}>
                        <i className="material-icons" style={{ color: '#1976d2', fontSize: '26px', marginRight: '1rem' }}>person</i>
                        <a href="/admin" style={{ color: '#1976d2', fontSize: '20px', textDecoration: 'none' }}>Admin</a>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div style={{ padding: '20px', display: 'flex' }}>
                    <div style={{ width: '70%', marginRight: '20px' }}>
                        <h2 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', marginTop:'0' }}>Dashboard</h2>
                        <h3 style={{ color: '#333', fontSize: '20px', marginBottom: '20px', marginTop:'0',marginTop:'4rem' }}>Current Barangay Officials</h3>
                        <div style={tableContainerStyle}>
                            <table className="table table-striped" style={{ width: '100%', marginBottom: '0', tableLayout: 'auto' }}>
                                <thead style={{ position: 'sticky', top: '0', backgroundColor: 'white', zIndex: '1' }}>
                                    <tr>
                                        <th>Picture</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ height: '20px' }}>
                                        <td><img src={defaultimage} alt="Official 1" style={{ height: '100px', width: 'auto' }} /></td>
                                        <td>Juan Dela Cruz</td>
                                        <td>Position of Official 1</td>
                                    </tr>
                                    <tr style={{ height: '20px' }}>
                                        <td><img src={defaultimage} alt="Official 2" style={{ height: '100px', width: 'auto' }} /></td>
                                        <td>Official 2</td>
                                        <td>Position of Official 2</td>
                                    </tr>
                                    <tr style={{ height: '20px' }}>
                                        <td><img src={defaultimage} alt="Official 3" style={{ height: '100px', width: 'auto' }} /></td>
                                        <td>Official 3</td>
                                        <td>Position of Official 3</td>
                                    </tr>
                                    <tr style={{ height: '20px' }}>
                                        <td><img src={defaultimage} alt="Official 4" style={{ height: '100px', width: 'auto' }} /></td>
                                        <td>Official 4</td>
                                        <td>Position of Official 4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={{ width: '30%' }}>
                        <h2 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', marginTop:'0' }}>Residents Record Summary</h2>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={boxStyle}>
                                <p style={boxTextStyle}>Total Number Of Residents</p>
                                <h2 style={boxNumberStyle}>200</h2>
                            </div>
                            <div style={boxStyle}>
                                <p style={boxTextStyle}>Male</p>
                                <h2 style={boxNumberStyle}>200</h2>
                            </div>
                            <div style={boxStyle}>
                                <p style={boxTextStyle}>Female</p>
                                <h2 style={boxNumberStyle}>200</h2>
                            </div>
                            <div style={boxStyle}>
                                <p style={boxTextStyle}>Registered Voters</p>
                                <h2 style={boxNumberStyle}>200</h2>
                            </div>
                        </div>
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

const boxStyle = {
    width: '100%', 
    backgroundColor: '#fff', 
    padding: '10px', 
    border: '1px solid #ddd', 
    borderRadius: '10px', 
    marginBottom: '10px'
};

const boxTextStyle = {
    fontSize: '16px', 
    color: '#333'
};

const boxNumberStyle = {
    fontSize: '36px', 
    color: '#333', 
    textAlign: 'center'
};

const tableContainerStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '100%', // Adjust the width as necessary
    height: '500px',
    overflowY: 'scroll',
    padding: '10px',
    backgroundColor: 'white'
};
