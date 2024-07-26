import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import Axios from 'axios';

export default function OfficialCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [contact, setContact] = useState('');
    const [error, setError] = useState(null);

    const handleGoBack = () => {
        navigate(-1);
    };

    const addOfficial = () => {
        Axios.post('http://localhost:3002/createOfficial', {
            name: name, 
            position: position, 
            contact: contact
        }).then(() => {
            console.log("success")
        })
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
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                name="name" 
                                required 
                                value={name}
                                require onChange={(e) => setName(e.target.value)}
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
                                value={position}
                                require onChange={(e) => setPosition(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="contact" 
                                name="contact" 
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        {error && (
                            <div className="mb-3">
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            </div>
                        )}
                        <button onClick={addOfficial} type="submit" className="btn btn-success ">
                            Save
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}