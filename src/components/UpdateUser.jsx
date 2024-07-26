import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import axios from 'axios';

export default function UpdateUser() {
  const navigate = useNavigate();

  const [newusername, setUsername] = useState('');
  const [newpassword, setPassword] = useState('');
  const [userid, setUserid] = useState(1); // Set this to the correct ID of the user you want to update

  const handleGoBack = () => {
    navigate("/user");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser();
  };

  const updateUser = () => {
    console.log("Username:", newusername);
    console.log("Password:", newpassword);
    console.log("User ID:", userid);
  
    Axios.put("http://localhost:3002/updateUser", 
      {
        username: newusername,
        password: newpassword,
        userid: userid
      }
    ).then((response) => {
      console.log(response.data);
      alert("User updated successfully");
      navigate('/user'); // Redirect after successful update
    }).catch((error) => {
      console.error("There was an error updating the user!", error);
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
        <h3 className="mb-4">Update User</h3>
        
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
                  value={newusername}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  name="password"
                  value={newpassword}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Update
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
