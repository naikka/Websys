import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import axios from 'axios';

export default function CreateResident({ updateResidentList }) {
    const navigate = useNavigate();
    const [residentname, setName] = useState('');
    const [residentbirthday, setBirthday] = useState('');
    const [residentsex, setSex] = useState('');
    const [residentcontactnumber, setContactnumber] = useState('');
    const [residentmaritalstatus, setMaritalstatus] = useState('');
    const [purok, setPurok] = useState('');

    const handleGoBack = () => {
        navigate("/resident");
    };

    const addResident = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3002/createResident', {
            residentname, 
            residentbirthday, 
            residentsex, 
            residentcontactnumber, 
            residentmaritalstatus,
            purok
        })
        .then((response) => {
            console.log("Resident created successfully:", response.data);
            // Update the resident list
            navigate('/resident');
            updateResidentList(response.data);
        })
        .catch((error) => {
            console.error("Error creating resident:", error);
        });
    };

    return (
        <div className="d-flex flex-column h-100">
    {/* HEADER */}
    <header className="d-flex align-items-center bg-light shadow-sm p-3">
        <button 
            onClick={handleGoBack} 
            className="btn btn-link d-flex align-items-center"
            style={{ color: '#ffffff' }}
        >
            <i className="material-icons">arrow_back</i>
            <span className="ms-2">Back</span>
        </button>
        <div className="ms-auto d-flex align-items-center">
            <i className="material-icons text-primary">person</i>
            <a href="/admin" className="ms-2 text-primary text-decoration-none">Admin</a>
        </div>
    </header>

    {/* MAIN CONTENT */}
    <main className="d-flex flex-column align-items-center bg-light py-4 flex-grow-1" style={{ minHeight: '0' }}>
        <h3 className="mb-4" style={{ color: '#4db6ac', fontSize: '34px', marginTop: '0' }}>CREATE RESIDENT</h3>

        <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '600px', flex: '1 1 auto', overflowY: 'auto' }}>
            <form onSubmit={addResident} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Form Fields */}
                <div className="row g-2 mb-3">
                    <div className="col-md-12">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="residentname" 
                                name="residentname" 
                                value={residentname}
                                required 
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="residentname" className="form-label">Full Name</label>
                        </div>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-12">
                        <div className="input-group">
                            <input 
                                type="date" 
                                className="form-control" 
                                id="residentbirthday" 
                                name="residentbirthday"
                                value={residentbirthday}
                                required 
                                onChange={(e) => setBirthday(e.target.value)}
                            />
                            <label htmlFor="residentbirthday" className="form-label">Birthday</label>
                        </div>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="residentsex" 
                                name="residentsex"
                                value={residentsex}
                                required 
                                onChange={(e) => setSex(e.target.value)}
                            />
                            <label htmlFor="residentsex" className="form-label">Sex</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input 
                                type="number" 
                                className="form-control" 
                                id="residentcontactnumber" 
                                name="residentcontactnumber" 
                                value={residentcontactnumber}
                                required 
                                onChange={(e) => setContactnumber(e.target.value)}
                            />
                            <label htmlFor="residentcontactnumber" className="form-label">Contact Number</label>
                        </div>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="residentmaritalstatus" 
                                name="residentmaritalstatus" 
                                value={residentmaritalstatus}
                                required 
                                onChange={(e) => setMaritalstatus(e.target.value)}
                            />
                            <label htmlFor="residentmaritalstatus" className="form-label">Marital Status</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input 
                                type="number" 
                                className="form-control" 
                                id="purok" 
                                name="purok" 
                                value={purok}
                                required 
                                onChange={(e) => setPurok(e.target.value)}
                            />
                            <label htmlFor="purok" className="form-label">Purok</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mt-3 mb-4">
                    Add Resident
                </button>
            </form>
        </div>
    </main>
</div>

    );
}
