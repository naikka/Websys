import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css'; // Assuming this contains your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'material-icons/iconfont/material-icons.css'; // Material Icons
import axios from 'axios';

export default function OfficialCreate() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* HEADER */}
            <header className="d-flex align-items-center bg-light shadow-sm p-3">
                <button 
                    onClick={handleGoBack} 
                    className="btn btn-link d-flex align-items-center" 
                    style={{ color: 'white' }}
                >
                    <i className="material-icons">arrow_back</i>
                    <span className="ms-2">Back</span>
                </button>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-grow-1 d-flex flex-column align-items-center bg-light py-4">
                <h3 className="mb-4">Create Official</h3>
                
                <div className="bg-white p-4 rounded shadow-sm w-100 d-flex flex-column justify-content-between" style={{ maxWidth: '600px' }}>
                    <form onSubmit={handleSubmit} className="d-flex flex-column h-100">
                        <div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    name="name" 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="position" className="form-label">Position</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="position" 
                                    name="position" 
                                />
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="mb-3">
                                <label htmlFor="picture" className="form-label">Picture</label>
                                <input 
                                    type="file" 
                                    className="form-control" 
                                    id="picture" 
                                    name="picture" 
                                />
                            </div>
                            <button type="submit" className="btn btn-success w-100">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
