const mysql = require("mysql2");

const db = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"password",
    database:"tech_portfolio"

});

module.exports = db;
