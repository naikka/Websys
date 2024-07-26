import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import Axios from 'axios';

export default function OfficialUpdate() {
  const [newName, setNewName] = useState('');
  const [newPosition, setNewPosition] = useState('');
  const [newContact, setNewContact] = useState('');
  const [id, setId] = useState(1); // Set this to the correct ID

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/officialUnit');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateOfficial();
  };

  const updateOfficial = () => {
    console.log("Updating official with ID:", id);
    console.log("Name:", newName);
    console.log("Position:", newPosition);
    console.log("Contact:", newContact);

    Axios.put("http://localhost:3002/updateOfficial", 
      {
        id: id,
        name: newName,
        position: newPosition,
        contact: newContact
      }
    ).then((response) => {
      console.log(response.data);
      alert("Official updated successfully");
      navigate('/officialUnit'); // Assuming this is where you want to navigate after updating
    }).catch((error) => {
      console.error("There was an error updating the official!", error);
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
        <h3 className="mb-4">Update Official</h3>
        
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
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="position" className="form-label">Position</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="position" 
                  name="position"
                  value={newPosition}
                  onChange={(e) => setNewPosition(e.target.value)} 
                />
              </div>
            </div>
            <div className="mt-auto">
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="contact" 
                  name="contact"
                  value={newContact}
                  onChange={(e) => setNewContact(e.target.value)} 
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
