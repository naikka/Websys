const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'websystemdb'
});

module.exports = Object.freeze({ pool: pool });