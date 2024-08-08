import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInPage from '../components/LogInPage';
import Home from '../components/Home';
import Resident from '../components/Resident';
import Documents from '../components/Documents'; 
import OfficialUnit from '../components/OfficialUnit';
import OfficialCreate from '../components/OfficialCreate';
import OfficialUpdate from '../components/OfficialUpdate';
import CreateResident from '../components/CreateResident';
import UpdateResident from '../components/UpdateResident';
import ClearanceFormat from '../components/ClearanceFormat';
import IndigencyFormat from '../components/IndigencyFormat';
import CertificationFormat from '../components/CertificationFormat';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogInPage />} />
                
                    <Route path="/home" element={<Home />} />
                
                <Route path="resident" element={<Resident />} />
                <Route path="documents" element={<Documents />} />
                <Route path="officialUnit" element={<OfficialUnit />} />
                <Route path="officialCreate" element={<OfficialCreate />} />
                <Route path="officialUpdate" element={<OfficialUpdate />} />
                <Route path="createResident" element={<CreateResident />} />
                <Route path="updateResident" element={<UpdateResident />} />
                <Route path="clearance-format" element={<ClearanceFormat />} />
                <Route path="indigency-format" element={<IndigencyFormat />} />
                <Route path="certification-format" element={<CertificationFormat />} />

                
            </Routes>
            
        </BrowserRouter>
        
    );
}
