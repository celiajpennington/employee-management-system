const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Funnygirl@214',
        database: 'employee_management_db'
    },
    console.log(`You are connected to your employee management system`)
);

module.exports = db;