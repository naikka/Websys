import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import axios from 'axios';

let id = null;
let name = null;
let birthday = null;
let sex = null;
let contactnumber = null;
let maritalstatus = null;
let residentpurok = null;

export function SetResidentInfo(a, b, c, d, e, f, g) {
  id = a;
  name = b;
  birthday = c;
  sex = d;
  contactnumber = e;
  maritalstatus = f;
  residentpurok = g;
}
async function handleSubmit(e) {
  e.preventDefault();

  const data = {
      residentname: e.target.residentname.value,
      residentbirthday: e.target.residentbirthday.value,
      residentsex: e.target.residentsex.value,
      residentcontactnumber: e.target.residentcontactnumber.value,
      residentmaritalstatus: e.target.residentmaritalstatus.value,
      purok: e.target.purok.value,
      residentid: id,
  };

  await axios.put("http://localhost:3002/updateResident", data)
  .then((response) => {
    console.log(response);
    if (response.status === 200) {
      console.log('Resident updated successfully');
    } else {
      console.log('Error updating resident');
    }
  })
  .catch((e) => console.log(e));
}

export default function UpdateResident() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/resident");
  };

  return (
    <div className="d-flex flex-column h-100">
      {/* HEADER */}
      <header className="d-flex align-items-center bg-light shadow-sm p-3">
        <button 
          className="btn btn-link d-flex align-items-center"
          style={{ color: "white" }}
          onClick={() => (window.location.href = "/resident")}
        >
          <i className="material-icons">arrow_back</i>
          <span className="ms-2">Back</span>
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow-1 d-flex flex-column align-items-center bg-light py-4" style={{height:'90vh'}}>
        <h3 className="mb-4" style={{color: '#4db6ac', fontSize:'34px', marginTop:'0'}}>UPDATE RESIDENT</h3>

        <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '600px' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="residentname" 
                name="residentname" 
                defaultValue={name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthday" className="form-label">Birthday</label>
              <input 
                type="date" 
                className="form-control" 
                id="residentbirthday" 
                name="residentbirthday"
                defaultValue={birthday}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="residentsex" className="form-label">Sex</label>
              <input 
                type="text" 
                className="form-control" 
                id="residentsex" 
                name="residentsex"
                defaultValue={sex}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="residentcontactnumber" className="form-label">Contact Number</label>
              <input 
                type="number" 
                className="form-control" 
                id="residentcontactnumber" 
                name="residentcontactnumber" 
                defaultValue={contactnumber}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="residentmaritalstatus" className="form-label">Marital Status</label>
              <input 
                type="text" 
                className="form-control" 
                id="residentmaritalstatus" 
                name="residentmaritalstatus" 
                defaultValue={maritalstatus}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="purok" className="form-label">Purok</label>
              <input 
                type="number" 
                className="form-control" 
                id="purok" 
                name="purok" 
                defaultValue={residentpurok}
              />
            </div>
            <button
                type="submit"
                className="btn btn-success w-100"
                onClick={() => {
                  window.location.href = "/resident";
                }}
              >
                Update
              </button>
          </form>
        </div>
      </main>
    </div>
  );
}