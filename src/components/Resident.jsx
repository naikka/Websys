import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";
import Axios from "axios";
import axios from "axios";
import { SetResidentInfo } from "./UpdateResident";

export default function Resident() {
  const navigate = useNavigate();
  const [residentList, setResidentList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleGoBack = () => {
    navigate("/home");
  };

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = () => {
    Axios.get("http://localhost:3002/residents")
      .then((response) => {
        setResidentList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteResident = (residentid) => {
    if (window.confirm("Are you sure you want to delete this resident?")) {
      Axios.delete(`http://localhost:3002/deleteresident/${residentid}`)
        .then((response) => {
          console.log(response);
          setResidentList(
            residentList.filter((item) => item.residentid !== residentid)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const updateResidentList = (newResident) => {
    setResidentList([...residentList, newResident]);
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      axios
        .get("http://localhost:3002/search-residents", {
          params: { query: searchQuery },
        })
        .then((response) => {
          setResidentList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      axios
        .get("http://localhost:3002/residents")
        .then((response) => {
          setResidentList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching residents:", error);
        });
    }
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div style={{ height: "100vh" }}>
      {/* HEADER */}
      <div
        style={{
          height: "10vh",
          backgroundColor: "#efebe9",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          onClick={handleGoBack}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            className="material-icons"
            style={{ color: "#1976d2", fontSize: "26px", marginRight: "8px" }}
          >
            arrow_back
          </i>
          <span style={{ color: "#1976d2", fontSize: "18px" }}>Back</span>
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "4rem",
          }}
        >
          <i
            className="material-icons"
            style={{ color: "#1976d2", fontSize: "26px", marginRight: "1rem" }}
          >
            person
          </i>
          <a
            href="/admin"
            style={{
              color: "#1976d2",
              fontSize: "20px",
              textDecoration: "none",
            }}
          >
            Admin
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f5f5f5",
          height: "calc(100vh - 80px)",
          overflowY: "auto",
        }}
      >
        <h3
          style={{
            fontSize: "24px",
            marginTop: "0",
            color: "#1976d2",
            fontWeight: "bold",
          }}
        >
          RESIDENT LIST
        </h3>

        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 20px",
            padding: "10px 0",
          }}
        >
          <div
            className="input-field"
            style={{ display: "flex", alignItems: "center" }}
          >
            <i
              className="material-icons"
              style={{ marginRight: "20px", color: "#1976d2" }}
            >
              search
            </i>
            <input
              id="search"
              type="text"
              style={{ maxWidth: "300px", marginBottom: "0" }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <label htmlFor="search" style={{ left: "48px" }}>
              Search Resident
            </label>
          </div>
          <Link to="/CreateResident">
            <button
              className="btn waves-effect waves-light"
              style={{ backgroundColor: "#1976d2", color: "white" }}
            >
              <i className="material-icons">add</i>
            </button>
          </Link>
        </div>

        {/* Table Container */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxHeight: "70vh",
            overflowY: "auto",
          }}
        >
          <table
            className="striped"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead
              style={{
                position: "sticky",
                top: "0",
                backgroundColor: "white",
                zIndex: "1",
              }}
            >
              <tr>
                <th
                  style={{
                    width: "5%",
                    textAlign: "center",
                    borderBottom: "2px solid #ddd",
                    color: "#1976d2",
                  }}
                >
                  Item
                </th>
                <th
                  style={{
                    width: "16%",
                    textAlign: "center",
                    borderBottom: "2px solid #ddd",
                    color: "#1976d2",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    width: "16%",
                    textAlign: "center",
                    borderBottom: "2px solid #ddd",
                    color: "#1976d2",
                  }}
                >
                  Birthday
                </th>
                <th
                  style={{
                    width: "16%",
                    textAlign: "center",
                    borderBottom: "2px solid #ddd",
                    color: "#1976d2",
                  }}
                >
                  Sex
                </th>
                <th
                  style={{
                    width: "16%",
                    textAlign: "center",
                    borderBottom: "2px solid #ddd",
                    color: "#1976d2",
                  }}
                >
                  Contact Number
                </th>
                <th
                  style={{
                    width: "16%",
                    textAlign: "center",
                    borderBottom: "2px solid #ddd",
                    color: "#1976d2",
                  }}
                >
                  Marital Status
                </th>
                <th
                  style={{
                    width: "16%",
                    textAlign: "center",
                    borderBottom: "2px solid #ddd",
                    color: "#1976d2",
                  }}
                >
                  Purok
                </th>
                <th
                  style={{
                    width: "16%",
                    textAlign: "center",
                    borderBottom: "2px solid #ddd",
                    color: "#1976d2",
                  }}
                >
                  Edit/Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {residentList.map((val, key) => (
                <tr key={key}>
                  <td style={{ textAlign: "center" }}>{key + 1}</td>
                  <td style={{ textAlign: "center" }}>{val.residentname}</td>
                  <td style={{ textAlign: "center" }}>
                    {val.residentbirthday}
                  </td>
                  <td style={{ textAlign: "center" }}>{val.residentsex}</td>
                  <td style={{ textAlign: "center" }}>
                    {val.residentcontactnumber}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {val.residentmaritalstatus}
                  </td>
                  <td style={{ textAlign: "center" }}>{val.purok}</td>
                  <td style={{ textAlign: "center" }}>
                    <Link to="/updateResident">
                      <button
                        className="btn-flat"
                        onClick={() =>
                          SetResidentInfo(
                            val.residentid,
                            val.residentname,
                            val.residentbirthday,
                            val.residentsex,
                            val.residentcontactnumber,
                            val.residentmaritalstatus,
                            val.residentpurok
                          )
                        }
                      >
                        <i
                          className="material-icons"
                          style={{ color: "#F9A602" }}
                        >
                          edit
                        </i>
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteResident(val.residentid)}
                      className="btn-flat"
                    >
                      <i
                        className="material-icons"
                        style={{ color: "#B22222" }}
                      >
                        delete
                      </i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
