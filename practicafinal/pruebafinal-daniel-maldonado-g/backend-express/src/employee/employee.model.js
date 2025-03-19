const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'employees',
    timestamps: true
});

Employee.sync()
    .then(() => {
        console.log('Model employee synchronized');
    })
    .catch(err => {
        console.error('Failed to synchronize to employee model', err);
    });
    
module.exports = Employee;
