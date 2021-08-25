INSERT INTO department (name)
VALUES ("Human Resources"), ("R&D"), ("Engineering"), ("Accounting"), ("Sales");

INSERT INTO role (title, salary, department_id)
VALUE ("manager", 75000.00, 2), ("engineer", 52000, 3), ("accountant", 62500, 4), ("recruiter", 57500, 1), ("sales person", 85650, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Dave", "Smith", 1, null), ("Joe", "Green", 1, 1), ("Jackson", "Brown", 3, 2), ("Steven", "Quinn", 5, 2);


-- INSERT INTO department (name)
-- VALUES
--     ("Sales"),
--     ("Engineering"),
--     ("Finance"),
--     ("Legal");

-- INSERT INTO role (title, salary, department_id)
-- VALUES
--     ("Sales Lead", 100000, 1),
--     ("Salesperson", 80000, 1),
--     ("Lead Engineer", 150000, 2),
--     ("Software Engineer", 120000, 2),
--     ("Account Manager", 160000, 3),
--     ("Accountant", 125000, 3),
--     ("Legal Team Lead", 250000, 4),
--     ("Lawyer", 190000, 4);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES
--     ("John", "Doe", 1, null),
--     ("Mike", "Chan", 2, 1),
--     ("Ashley", "Rodriguez", 3, null),
--     ("Kevin", "Tupik", 4, 3),
--     ("Kunal", "Singh", 5, null),
--     ("Malia", "Brown", 6, 5),
--     ("Sarah", "Lourd", 7, null),
--     ("Tom", "Allen", 8, 7),
--     ("Sam", "Cash", 1, 3);