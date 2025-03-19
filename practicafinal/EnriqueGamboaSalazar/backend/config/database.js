const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("books_db", "postgres", "1234", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

module.exports = sequelize;
