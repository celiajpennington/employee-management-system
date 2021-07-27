function getDepartments()
{
    const departments = [];

    db.query(`SELECT name FROM department;`, (err, results) => {
        if (err) throw err
        results.forEach(i => {departments.push(i.name)})
    })

    return departments;
}
function getManagers(){
    db.query(`SELECT first_name, last_name from employee WHERE manager_id IS NULL;`, (err, results) => {
        if(err) throw err;
    })
}

function getDepartments()
{
    const departments = [];

    db.query(`SELECT name FROM department;`, (err, results) => {
        if (err) throw err
        results.forEach(i => {departments.push(i.name)})
    })

    return departments;
}
function getEmployeeNames(){

    const employeeName = [];

    db.query(`SELECT CONCAT(first_name, ' ', last_name) AS name FROM employee;`, (err, results) => {
        if (err) throw err
        results.forEach(i => {employeeName.push(i.name)})
    })

    return employeeName;
}
function getRoles()
{
    const roles = [];

    db.query(`SELECT title FROM role;`, (err, results) => {
        if (err) throw err
        results.forEach(i => {roles.push(i.title)})
    })

    return roles;
}
