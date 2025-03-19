const { Sequelize } = require('sequelize');
const dbConfig = require('./db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection stablish successfully');
    })
    .catch(err => {
        console.error('Failed to connect to database :', err);
    });

module.exports = sequelize;
