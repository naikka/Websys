import mysql from 'mysql'


const mariadb = require('mariadb'); 
const pool = mariadb.createPool({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'bppis'
});

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Connected")
    }
})

module.exports = Object.freeze({pool:pool});