const { table } = require("console");
//First Question for User
const firstQuestion = [{
    type: 'list',
    message: 'What would you like to do?',
    name: 'answers',
    choices: ['View All Employees', 'Add Employee','Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Departments']
}]
//If user selects add department
const addDepartment = [{
    type: 'input',
    messag: 'What is the name of the department you would like to add?',
    name: 'departmentName'
}];
//if user selects add role
const addRole = [{
    type: 'input',
    messag: 'What is the name of the role you would like to add?',
    name: 'roleName'
    },
    {
        type: 'input',
        message: 'What salary belongs to this role?',
        name: 'salary',
    },
    
    {
        type: 'input',
        message: 'What department does the role belong to?',
        name: 'roleDepartment',
        choices: tableData.getDepartments(),
    }
];
// if user selects add Employee
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
//If user picks to update an existing Employee
const existingEmployeeUpdate = [
    {
        type: 'list',
        message: 'Which employee would you like to update',
        name: 'employeeNames',
        choices: tableData.getEmployeeNames()
    },
    {
        type: 'list',
        message: 'What updates would you like to add?',
        name: 'employeeUpdateOptions',
        choices: ['role', 'manager']

    },
    {
        type: 'list',
        message: 'What would you like their new role to be?',
        name: 'employeeRoleUpdate',
        choices: tableData.getRole(),
        when: (list) => list.employeeUpdate == 'role'
    },
    {
        type: 'list',
        message: 'Who is their manager?',
        name: 'employeeManagerU[date',
        choices: tableData.getManagers(),
        when: (list) => list.employeeUpdate == "manager"
    }
]