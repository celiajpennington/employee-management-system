const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const employee = require('./lib/employees');
const role = require('./lib/roles');
const department = require('./lib/departments');
 
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection({
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Password123',
        database: 'roster_db'
    },
    console.log(`Connected to the roster_db database.`)
);

// Query database
db.query('SELECT * FROM employees', function(err, results) {
    console.log(results);
});
// Query database
db.query('SELECT * FROM departments', function(err, results) {
    console.log(results);
});

// Query database
db.query('SELECT * FROM roles', function(err, results) {
    console.log(results);
});


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});