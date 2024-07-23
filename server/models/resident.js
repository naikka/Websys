const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); // Adjust path as necessary

const Resident = sequelize.define('Resident', {
  // Define your model attributes here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maritalStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'residenttable', // Ensure this matches your database table name
  timestamps: false,         // Set to true if you want Sequelize to handle createdAt and updatedAt fields
});

module.exports = Resident;
