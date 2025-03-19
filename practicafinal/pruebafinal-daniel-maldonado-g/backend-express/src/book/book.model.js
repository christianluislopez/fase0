const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cellphone: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'books',
    timestamps: false
});

Book.sync()
    .then(() => {
        console.log('Model Book synchronized');
    })
    .catch(err => {
        console.error('Failed to synchronize to Book model', err);
    });
    
module.exports = Book;
