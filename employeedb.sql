DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT DEFAULT NULL, 
  manager_id INT DEFAULT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee_role (
  id INT NOT NULL,
  role_title VARCHAR(30) NOT NULL, 
  salary DECIMAL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

--EMPLOYEE SEEDING
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Markos", "Escalante", 1, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Aleah", "Snider", 2, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Alex", "Garcia", 3, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Sean", "Goldfinger", 4, NEULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Church", "Bass", 5, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Jacob", "Handy", 6, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Timothy", "Davis", 7, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Jordan", "Hicks", 8, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Dylan", "Baker", 9, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Marques", "White", 10, NULL);

--DEPARTMENT SEEDING
INSERT INTO department (id, department_name)
VALUES (1, "Management");
INSERT INTO department (id, department_name)
VALUES (2, "Engineering Team");
INSERT INTO department (id, department_name)
VALUES (3, "Marketing Team");
INSERT INTO department (id, department_name)
VALUES (4, "Client Relations");
INSERT INTO department (id, department_name)
VALUES (5, "Human Resources");

-- EMPLOYEE ROLE SEEDING
INSERT INTO employee_role (id, role_title, salary, department_id)
VALUES (1, "Engineering Team Manager", 75000, 1);
INSERT INTO employee_role (id, role_title, salary, department_id)
VALUES (2, "Client Relations Team Manager", 75000, 2);
INSERT INTO employee_role (id, role_title, salary, department_id)
VALUES (3, "Marketing Team Manager", 75000, 3);
INSERT INTO employee_role (id, role_title, salary, department_id)
VALUES (4, "Marketing Team", 58000, 4);
INSERT INTO employee_role (id, role_title, salary, department_id)
VALUES (5, "Marketing Team", 58000, 5);
INSERT INTO employee_role (id, role_title, salary, department_id)
VALUES (6, "Engineering Team", 64000, 6);
INSERT INTO employee_role (id, role_title, salary, department_id)
VALUES (7, "Engineering Team", 64000, 7);
INSERT INTO employee_role (id, role_title, salary, department_id)
VALUES (8, "Client Relations", 60000, 8);
INSERT INTO employee_role (id, role_title, salary, department_id)
VALUES (9, "Client Relations", 60000, 9);
INSERT INTO employee_role (id, role_title, salary, department_id)
VALUES (10, "Human Resources", 68000, 10);

SELECT * FROM employee;
select * from department;
select * from employee_role;