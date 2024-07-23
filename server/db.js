const { Sequelize } = require('sequelize');

// Initialize Sequelize with your database connection details
const sequelize = new Sequelize('websystemdb', 'naika', 'naika@352088', { // Replace 'your_password_here' with your actual password
  host: 'localhost',
  dialect: 'mysql', // You can change this if you're using a different SQL database
  logging: false,   // Set to true if you want to log SQL queries
});

module.exports = {
  sequelize,
  pool: sequelize,
};
