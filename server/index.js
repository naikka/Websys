
const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()

app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"websysdb",
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM officialtable";
    db.query(sql, (err,data)=>{
        if(err) return res .json("Error")
            return res.json(data);
    })
})

app.listen(8082, () =>{
    console.log("Server is running");
})