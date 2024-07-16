import React from 'react';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import pasonglogos from '../assets/pasonglogos.png'; // Path to Pasong logo image

export default function Home() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Blue sidebar on the left */}
            <div style={{ width: '280px', backgroundColor: '#0d47a1', position: 'relative' }}>
                {/* Logo centered vertically */}
                <img src={pasonglogos} alt="Pasong Logo" style={{ height: '120px', width: 'auto', position: 'absolute', top: '14%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
            
            {/* White content area */}
            <div style={{ flex: 1, backgroundColor: 'white' }}>
                {/* Header with blue background */}
                <div style={{ height: '80px', backgroundColor: '#0d47a1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                    {/* Placeholder for alignment */}
                    <div style={{ width: '120px' }}></div> {/* Adjust width as needed */}
                    
                    {/* Admin link aligned to the right */}
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '4rem' }}>
                        <i className="material-icons" style={{ color: 'white', fontSize: '26px', marginRight: '1rem' }}>person</i>
                        <a href="/admin" style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>Admin</a>
                    </div>
                </div>
                
                {/* Main content area */}
                <div style={{ padding: '20px' }}>
                    {/* Add your main content here */}
                    <h1>Main Content Area</h1>
                    <p>This is where your main content goes...</p>
                </div>
            </div>
        </div>
    );
}
