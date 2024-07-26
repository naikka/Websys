import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import Axios from 'axios';

export default function CreateUser() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleGoBack = () => {
    navigate("/user");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser();
  };

  const createUser = () => {
    console.log("Creating User with Username:", username);

    Axios.post("http://localhost:3002/createUser", 
      {
        username: username,
        password: password
      }
    ).then((response) => {
      console.log(response.data);
      alert("User created successfully");
      navigate('/user'); // Assuming this is where you want to navigate after creating
    }).catch((error) => {
      console.error("There was an error creating the user!", error);
    });
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
        <h3 className="mb-6" style={{color:'#1976d2', fontSize:'38px'}}>CREATE USER</h3>
        
        <div className="bg-white p-4 rounded shadow-sm w-100 d-flex flex-column justify-content-between" style={{ maxWidth: '600px' }}>
          <form onSubmit={handleSubmit} className="d-flex flex-column h-100">
            <div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="username" 
                  name="username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Create
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
