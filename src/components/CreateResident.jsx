import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import axios from 'axios';

export default function CreateResident() {


  const [residentname, setName] = useState('');
  const [residentbirthday, setBirthday] = useState('');
  const [residentsex, setSex] = useState('');
  const [residentcontactnumber, setContactnumber] = useState('');
  const [residentmaritalstatus, setMaritalstatus] = useState('');


  const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    const addResident = () => {
      axios.post('http://localhost:3002/createResident', {
        residentname: residentname, 
        residentbirthday: residentbirthday, 
        residentsex: residentsex, 
        residentcontactnumber: residentcontactnumber, 
        residentmaritalstatus: residentmaritalstatus
      })
      .then(() => {
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
                                id="residentname" 
                                name="residentname" 
                                value={residentname}
                                require onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="position" className="form-label">Birthday Format: YYYY-MM-DD </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="birthday" 
                                name="residentbirthday"
                                value={residentbirthday}
                                require onChange={(e) => setBirthday(e.target.value)} 
                                
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="position" className="form-label">Sex</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="residentsex" 
                                name="residentsex"
                                value={residentsex}
                                require onChange={(e) => setSex(e.target.value)} 
                                
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="position" className="form-label">Contact Number</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="residentcontactnumber" 
                                name="residentcontactnumber" 
                                value={residentcontactnumber}
                                require onChange={(e) => setContactnumber(e.target.value)} 
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Marital Status</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="residentmaritalstatus" 
                                name="residentmaritalstatus" 
                                value={residentmaritalstatus}
                                require onChange={(e) => setMaritalstatus(e.target.value)} 
                            />
                        </div>
                        
                        <button onClick={addResident} type="submit" className="btn btn-success ">
                            Add Resident
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
