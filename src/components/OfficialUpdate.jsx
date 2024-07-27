import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import Axios from 'axios';


let id = null;
let name = null;
let position = null;
let contact = null;



export function setOfficialInfo (a, b, c, d) {
  id = a;
  name = b;
  position = c;
  contact = d;
}

async function handleSubmit(e) {
  e.preventDefault();

  const data = {
    name: e.target.name.value,
    position: e.target.position.value,
    contact: e.target.contact.value,
    id: id,
  };

  await Axios.put("http://localhost:3002/updateOfficial", data)
    .then(() => console.log("Successfully updated."))
    .catch((e) => console.log(e));
}

export default function OfficialUpdate() {

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* HEADER */}
      <header className="d-flex align-items-center bg-light shadow-sm p-3">
      <button
          /*onClick={handleGoBack}*/
          className="btn btn-link d-flex align-items-center"
          style={{ color: "white" }}
          onClick={() => (window.location.href = "/officialUnit")}
        >
          <i className="material-icons">arrow_back</i>
          <span className="ms-2">Back</span>
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow-1 d-flex flex-column align-items-center bg-light py-4">
        <h3 className="mb-4" style={{color:"#4db6ac"}}>Update Official</h3>
        
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
                  defaultValue={name}
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="position" className="form-label">Position</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="position" 
                  name="position"
                  defaultValue={position}
                  
                />
              </div>
            </div>
            <div className="mt-auto">
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="contact" 
                  name="contact"
                  defaultValue={contact}
                  
                />
              </div>
              <button type="submit"
              onClick={() => {
                window.location.href = "/officialUnit";
              }}
              className="btn btn-success w-100">
                Update
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
