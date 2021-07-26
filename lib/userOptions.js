const { table } = require("console");

const firstQuestion = [{
    type: 'list',
    message: 'What would you like to do?',
    name: 'answers',
    choices: ['View All Employees', 'Add Employee','Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Departments']
}]

const addDepartment = [{
    type: 'input',
    messag: 'What is the name of the department you would like to add?',
    name: 'name'
}];

const addRole = [{
    type: 'input',
    messag: 'What is the name of the role you would like to add?',
    name: 'name'
    },
    {
        type: 'input',
        message: 'What salary belongs to this role?',
        name: 'name',
    },
    
    {
        type: 'input',
        message: 'What department does the role belong to?',
        name: 'department',
        choices: tableData.getDepartments(),
    }
];

const addDEmployee = [{
    
    type: 'input',
    message: 'What is the first name of your new employee ',
    name: 'firstName',
},
{
type: 'input',
message: 'What is the last name of your new employee ',
name: 'lastName',
},
{
    type: 'list',
    message: "What is your new employee's role?",
    name: "newEmployeeRole",
    choices: tableData.getRoles()
},
{
    type: 'list',
    message: "Who is your new employee's manager?",
    name: "newEmployeeManager",
    choices: tableData.getEmployeeNames(),

}];