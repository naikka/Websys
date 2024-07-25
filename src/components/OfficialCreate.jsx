import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import axios from 'axios';

export default function OfficialCreate() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };



    return (
        <div className="d-flex flex-column h-100">
            {/* HEADER */}
            <header className="d-flex align-items-center bg-light shadow-sm p-3">
                <button 
                    onClick={handleGoBack} 
                    className="btn btn-link d-flex align-items-center "style={{ color: '#ffffff' }}
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
            <main className="flex-grow-1 d-flex flex-column align-items-center bg-light py-4">
                <h3 className="mb-4">Create Official</h3>

                <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '600px' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                name="name" 
                                required 
                                onChange={(e) => setValues({ ...values, name: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="position" className="form-label">Position</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="position" 
                                name="position" 
                                required 
                                onChange={(e) => setValues({ ...values, position: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="contact" 
                                name="contact" 
                                required onChange={(e) => setValues({ ...values, contact: e.target.files[0] })}
                            />
                        </div>
                        <button type="submit" className="btn btn-success ">
                            Save
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}