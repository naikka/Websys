import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import Axios from "axios";

let id = null;
let name = null;
let birthday = null;
let sex = null;
let contactnumber = null;
let maritalstatus = null;
let residentpurok = null;

export function SetResidentInfo(a, b, c, d, e, g) {
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
    purok:e.target.purok.value,
    residentid: id,
  };

  await Axios.put("http://localhost:3002/updateResident", data)
    .then(() => console.log("Successfully updated."))
    .catch((e) => console.log(e));
}

export default function UpdateResident() {


  return (
    <div className="d-flex flex-column min-vh-100">
      {/* HEADER */}
      <header className="d-flex align-items-center bg-light shadow-sm p-3">
        <button
          /*onClick={handleGoBack}*/
          className="btn btn-link d-flex align-items-center"
          style={{ color: "white" }}
          onClick={() => (window.location.href = "/resident")}
        >
          <i className="material-icons">arrow_back</i>
          <span className="ms-2">Back</span>
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow-1 d-flex flex-column align-items-center bg-light py-4">
        <h3
          className="mb-4"
          style={{ color: "#4db6ac", fontSize: "34px", marginTop: "0" }}
        >
          UPDATE RESIDENT
        </h3>

        <div
          className="bg-white p-4 rounded shadow-sm w-100 d-flex flex-column justify-content-between"
          style={{ maxWidth: "600px" }}
        >
          {/* UPDATE FORMS */}
          <form onSubmit={handleSubmit} className="d-flex flex-column h-100">
            <div>
              <div className="mb-3">
                <label htmlFor="residentname" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="residentname"
                  name="residentname"
                  defaultValue={name}
                  /*onChange={(e) => setNewName(e.target.value)}*/
                />
              </div>
              <div className="mb-3">
                <label htmlFor="residentbirthday" className="form-label">
                  Birthday
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="residentbirthday"
                  name="residentbirthday"
                  defaultValue={birthday}
                  /*onChange={(e) => setNewBirthday(e.target.value)}*/
                />
              </div>
              <div className="mb-3">
                <label htmlFor="residentsex" className="form-label">
                  Sex
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="residentsex"
                  name="residentsex"
                  defaultValue={sex}
                  /*onChange={(e) => setNewSex(e.target.value)}*/
                />
              </div>
              <div className="mb-3">
                <label htmlFor="residentcontactnumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="residentcontactnumber"
                  name="residentcontactnumber"
                  defaultValue={contactnumber}
                  /*onChange={(e) => setNewContactnumber(e.target.value)}*/
                />
              </div>
              <div className="mb-3">
                <label htmlFor="residentmaritalstatus" className="form-label">
                  Marital Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="residentmaritalstatus"
                  name="residentmaritalstatus"
                  defaultValue={maritalstatus}
                  /*onChange={(e) => setNewMaritalStatus(e.target.value)}*/
                />
              </div>
              <div className="mb-3">
                <label htmlFor="residentmaritalstatus" className="form-label">
                  Purok
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="purok"
                  name="purok"
                  defaultValue={residentpurok}
                  /*onChange={(e) => setNewMaritalStatus(e.target.value)}*/
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
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
