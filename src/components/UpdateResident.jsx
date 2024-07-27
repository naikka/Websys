import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import Axios from "axios";

export default function UpdateResident() {
  const navigate = useNavigate();

  const [newName, setNewName] = useState("");
  const [newBirthday, setNewBirthday] = useState("");
  const [newSex, setNewSex] = useState("");
  const [newContactnumber, setNewContactnumber] = useState("");
  const [newMaritalStatus, setNewMaritalStatus] = useState("");

  const [residentid, setResidentId] = useState(1); // Set this to the correct ID

  const handleGoBack = () => {
    navigate("/resident");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateResident();
  };

  const updateResident = () => {
    console.log("Updating Resident with ID:", residentid);
    console.log("Name:", newName);
    console.log("Birthday:", newBirthday);
    console.log("Sex:", newSex);
    console.log("Contact:", newContactnumber);
    console.log("Marital Status:", newMaritalStatus);

    Axios.put("http://localhost:3002/updateResident", {
      residentname: newName,
      residentbirthday: newBirthday,
      residentsex: newSex,
      residentcontactnumber: newContactnumber,
      residentmaritalstatus: newMaritalStatus,
      residentid: residentid,
    })
      .then((response) => {
        console.log(response.data);
        alert("Resident updated successfully");
        navigate("/resident");
      })
      .catch((error) => {
        console.error("Error updating resident:", error.message);
        alert("Error updating resident. Please try again later.");
        navigate("/resident");
      });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* HEADER */}
      <header className="d-flex align-items-center bg-light shadow-sm p-3">
        <button
          onClick={handleGoBack}
          className="btn btn-link d-flex align-items-center"
          style={{ color: "white" }}
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
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="residentbirthday" className="form-label">
                  Birthday
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="residentbirthday"
                  name="residentbirthday"
                  value={newBirthday}
                  onChange={(e) => setNewBirthday(e.target.value)}
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
                  value={newSex}
                  onChange={(e) => setNewSex(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="residentcontactnumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="residentcontactnumber"
                  name="residentcontactnumber"
                  value={newContactnumber}
                  onChange={(e) => setNewContactnumber(e.target.value)}
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
                  value={newMaritalStatus}
                  onChange={(e) => setNewMaritalStatus(e.target.value)}
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
