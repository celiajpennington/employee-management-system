const mysql = require("mysql2");
const util = require("util");

const connection = mysql.createConnection({
        host: "localhost",
        // MySQL username,
        user: "root",
        // MySQL password
        password: "Funnygirl@214",
        database: "employee-management-system",
    },
    console.log(`Connected to the roster_db database.`)
);
// fancy line of code that allows us to us async/await
connection.query = util.promisify(connection.query);
connection.connect();
module.exports = connection;