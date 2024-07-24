
const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const path = require("path")
const app = express()


const port = 5000

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"naika352088",
    database:"websysdb",
})


app.listen(port, () =>{
    console.log("Server is running");
})