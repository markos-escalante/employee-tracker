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
  salary DECIMAL (6,2),
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM employee;
select * from department;
select * from employee_role;