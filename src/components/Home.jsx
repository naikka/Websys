import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pasonglogos from '../assets/pasonglogos.png';
import axios from 'axios';

export default function Home() {
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [currentTime, setCurrentTime] = useState(new Date());

    const [officialList, setOfficialList] = useState([]);
    const [totalResidents, setTotalResidents] = useState(0);
    const [totalMaleResidents, setTotalMaleResidents] = useState(0);
    const [totalFemaleResidents, setTotalFemaleResidents] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3002/officials')
            .then(response => {
                setOfficialList(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get('http://localhost:3002/residents/total')
            .then(response => {
                setTotalResidents(response.data.totalResidents);
                setTotalMaleResidents(response.data.totalMaleResidents);
                setTotalFemaleResidents(response.data.totalFemaleResidents);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleLoginClick = (type) => {
        navigate(`/${type}`);
        if (isSidebarOpen) setSidebarOpen(false);
    };

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleString('en-US', { timeZone: 'Asia/Manila', hour12: false });
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ 
                width: isSidebarOpen ? '280px' : '80px', 
                backgroundColor: '#0d47a1', 
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                paddingTop: '2rem', 
                transition: 'width 0.3s',
                height: '100vh'
            }}>
                <button 
                    onClick={toggleSidebar} 
                    style={{ 
                        backgroundColor: 'transparent', 
                        border: 'none', 
                        cursor: 'pointer', 
                        alignSelf: 'flex-end', 
                        marginRight: '1.5em', 
                        marginBottom: '2rem' 
                    }}
                >
                    <i className="material-icons" style={{ color: 'white', fontSize: '26px' }}>
                        {isSidebarOpen ? 'dehaze' : 'menu'}
                    </i>
                </button>
                {isSidebarOpen && <img src={pasonglogos} alt="Pasong Logo" style={{ height: '120px', width: '120px'}} />}
                <div style={{ 
                    width: '100%', 
                    marginTop: '44px', 
                    textAlign: 'left', 
                    paddingLeft: isSidebarOpen ? '20px' : '0', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: isSidebarOpen ? 'flex-start' : 'center' 
                }}>
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('Home')}>
                        <i className="material-icons" style={iconStyle}>dashboard</i>
                        {isSidebarOpen && <span>Dashboard</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('Resident')}>
                        <i className="material-icons" style={iconStyle}>group</i>
                        {isSidebarOpen && <span>Resident</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('Documents')}>
                        <i className="material-icons" style={iconStyle}>description</i>
                        {isSidebarOpen && <span>Certificate</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('OfficialUnit')}>
                        <i className="material-icons" style={iconStyle}>recent_actors</i>
                        {isSidebarOpen && <span>Barangay Official</span>}
                    </button>
                    <button style={buttonStyle} type="button" onClick={() => handleLoginClick('LogInPage')}>
                        <i className="material-icons" style={iconStyle}>exit_to_app</i>
                        {isSidebarOpen && <span>Log Out</span>}
                    </button>
                </div>
                {isSidebarOpen && (
                    <div style={{ marginTop: 'auto', marginBottom: '20px', color: 'white', textAlign: 'center' }}>
                        <div>{currentTime.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Manila' })}</div>
                        <div>{formatTime(currentTime)}</div>
                    </div>
                )}
            </div>

            <div style={{ flex: 1, backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>
                <div style={{ minHeight: '60px', backgroundColor: '#efebe9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '4rem' }}>
                        <i className="material-icons" style={{ color: '#1976d2', fontSize: '26px', marginRight: '1rem' }}>person</i>
                        <a href="/admin" style={{ color: '#1976d2', fontSize: '20px', textDecoration: 'none' }}>Admin</a>
                    </div>
                </div>

                <div style={{ flex: 1, padding: '20px', display: 'flex', height: '100vh', overflowY: 'auto' }}>
                    <div style={{ width: '70%', marginRight: '20px', display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', marginTop:'4px', marginBottom:'24px', color:'#1976d2'}}>DASHBOARD</h2>
                        <h3 style={{ color: '#333', fontSize: '24px', margin:'auto', paddingBottom:'20px'}}>Current Barangay Officials</h3>
                        <div style={tableContainerStyle}>
                            <table className="table table-striped" style={{ width: '100%', marginBottom: '0', tableLayout: 'auto' }}>
                                <thead style={{ position: 'sticky', top: '0', backgroundColor: 'white', zIndex: '1', fontSize:'18px' }}>
                                    <tr>
                                    <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd', color:'#1976d2'  }}>Name</th>
                                    <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd', color:'#1976d2'  }}>Position</th>
                                    <th style={{ width: '16%', textAlign: 'center', borderBottom: '2px solid #ddd', color:'#1976d2'  }}>Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {officialList.map((val, key) => (
                                     <tr key={key}>
                                            <td style={tableCellStyle}>{val.name}</td>
                                            <td style={tableCellStyle}>{val.position}</td>
                                            <td style={tableCellStyle}>{val.contact}</td>
                                        </tr>
                                    ))}                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ color: '#333', fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', marginTop:'0', color:'#1976d2' }}>RESIDENTS RECORD SUMMARY</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', flex: 1 }}>
                            <div style={boxStyle}>
                                <i className="material-icons" style={boxIconStyle}>people</i>
                                <p style={boxTextStyle}>Total Number Of Residents</p>
                                <h2 style={boxNumberStyle}>{totalResidents}</h2>
                            </div>
                            <div style={boxStyle}>
                                <i className="material-icons" style={boxIconStyle}>male</i>
                                <p style={boxTextStyle}>Male</p>
                                <h2 style={boxNumberStyle}>{totalMaleResidents}</h2>
                            </div>
                            <div style={boxStyle}>
                                <i className="material-icons" style={boxIconStyle}>female</i>
                                <p style={boxTextStyle}>Female</p>
                                <h2 style={boxNumberStyle}>{totalFemaleResidents}</h2>
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
    marginBottom: '10px',
    position: 'relative',
    flex: 1,
};

const boxTextStyle = {
    fontSize: '16px', 
    color: '#333'
};

const boxNumberStyle = {
    fontSize: '54px', 
    color: '#0d47a1', 
    textAlign: 'center',
    marginTop:'.5em',
};

const boxIconStyle = {
    fontSize: '36px',
    color: '#1976d2',
    position: 'absolute', 
    bottom: '10px', 
    left: '10px' 
};

const tableContainerStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '100%',
    height: '80vh', 
    overflowY: 'auto', 
    padding: '0', 
    backgroundColor: 'white',
};


const tableCellStyle = {
    textAlign: 'center',
    padding: '10px',
};
