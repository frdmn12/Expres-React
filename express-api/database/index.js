const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "Bayu",
  password: "bayuferdiman1212",
  database: "purwadhika",
  port: 3306,
});

module.exports = db;
