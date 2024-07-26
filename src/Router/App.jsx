import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInPage from '../components/LogInPage';
import Home from '../components/Home'; // Import Home component
import User from '../components/User';
import Resident from '../components/Resident';
import Documents from '../components/Documents'; // Adjust the import based on your file structure
import OfficialUnit from '../components/OfficialUnit';
import OfficialCreate from '../components/OfficialCreate';
import OfficialUpdate from '../components/OfficialUpdate';

import CreateResident from '../components/CreateResident';
import UpdateResident from '../components/UpdateResident';

import CreateUser from '../components/CreateUser';
import UpdateUser from '../components/UpdateUser';

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
                <Route path="officialUnit" element={<OfficialUnit />} />
                <Route path="officialCreate" element={<OfficialCreate />} />
                <Route path="officialUpdate" element={<OfficialUpdate />} />
                <Route path="createResident" element={<CreateResident />} />
                <Route path="updateResident" element={<UpdateResident />} />
                <Route path="updateUser" element={<UpdateUser />} />
                <Route path="createUser" element={<CreateUser />} />
                
            </Routes>
        </BrowserRouter>
    );
}
