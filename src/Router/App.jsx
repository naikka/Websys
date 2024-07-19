import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPage from '../components/LogInPage';
import Home from '../components/Home'; // Import Home component
import User from '../components/User';
import Resident from '../components/Resident';
import Documents from '../components/Documents'; // Adjust the import based on your file structure
import History from '../components/History';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogInPage />} />
                <Route path="loginpage" element={<LogInPage />} />
                <Route path="home" element={<Home />} />
                <Route path="user" element={<User />} />
                <Route path="resident" element={<Resident />} />
                <Route path="documents" element={<Documents />} />
                <Route path="history" element={<History />} />
                {/* Add other routes as needed */}
            </Routes>
        </BrowserRouter>
    );
}
