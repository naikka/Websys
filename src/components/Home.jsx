import React from 'react';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import pasonglogos from '../assets/pasonglogos.png'; // Path to Pasong logo image
import sibalomlog from '../assets/sibalomlog.png'; // Path to Sibalom logo image

export default function Home() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Blue sidebar on the left */}
            <div style={{ width: '280px', backgroundColor: '#0d47a1', position: 'relative' }}>
                {/* Logo centered vertically */}
                <img src={pasonglogos} alt="Pasong Logo" style={{ height: '120px', width: 'auto', position: 'absolute', top: '3%', transform: 'translateY(-50%)', left: '50%', transform: 'translateX(-50%)' }} />
            </div>
            
            {/* White content area */}
            <div style={{ flex: 1, backgroundColor: 'white' }}>
                {/* Header with blue background */}
                <div style={{ height: '160px', backgroundColor: '#0d47a1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                    {/* Placeholder for alignment */}
                    <div style={{ width: '120px' }}></div> {/* Adjust width as needed */}
                    
                    {/* Second image (sibalomlog) aligned to the right with padding */}
                    <img src={sibalomlog} alt="Sibalom Logo" style={{ height: '120px', width: 'auto', marginRight: '4rem' }} />
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
