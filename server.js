const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,


  user: "root",

  password: "Killua10!",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
    employeeTracker();
    addEmployee();
    addRole();
    addDepartment();
    viewEmployee();
    viewRole();
    viewDepartments();
    updateRole();
});

const employeeTracker = () => {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Welcome to the employee tracker! What would you like to do?",
      choices: [
        "Add a new employee",
        "Add a role to a new employee",
        "Add a new department",
        "View an existing employee",
        "View an existing employee's role",
        "View all departments",
        "Update an employee's role"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Add a new employee":
        addEmployee();
        break;

      case "Add a role to a new employee":
        addRole();
        break;

      case "Add a new department":
        addDepartment();
        break;

      case "View an existing employee":
        viewEmployee();
        break;

      case "View an existing employee's role":
        viewRole();
        break;
          
      case "View all departments":
        viewDepartments();
        break;
          
      case "Update an employee's role":
        updateRole();
        break;
      }
    });
}

const addEmployee = () => {
  inquirer
    .prompt({
      name: "employee_id",
      type: "input",
      message: "Please enter the new employee's id."
    },
        {
            name: "FirstName",
            type: "input",
            message: "Please enter employee's first name"
        },
        {
            name: "LastName",
            type: "input",
            message: "Please enter the employee's last name."
        }
    )
      .then(function (answer) {
          const query = "INSERT TO employee";
          connection.query(query, { answer }, function (err, res) {
              if (err) throw err;
              employeeTracker();
          }) 
    });
}

const addRole = () => {
  inquirer
    .prompt({
      name: "employee_id",
      type: "input",
      message: "Please enter the employee's id."
    },
    {
        name: "employee_role",
        type: "input",
        message: "Please enter the employee's role."
        },
        {
            name: "salary",
            type: "input",
            message: "Please enter the employee's salary."
        },
        {
            name: "department_id",
            type: "input",
            message: "Please enter the employee's department id."
        }
    )
      .then(function (answer) {
          const query = "INSERT TO employee";
          connection.query(query, { answer }, function (err, res) {
              if (err) throw err;
              employeeTracker();
          }) 
    });
}

const addDepartment = () => {
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message: "Please enter the new department's id."
    },
        {
            name: "department_name",
            type: "input",
            message: "Please enter the department's name"
        },
    )
      .then(function (answer) {
          const query = "INSERT TO employee";
          connection.query(query, { answer }, function (err, res) {
              if (err) throw err;
              employeeTracker();
          }) 
    });
}

const addRole = () => {
  inquirer
    .prompt({
      name: "employee_id",
      type: "input",
      message: "Please enter the employee's id."
    },
    {
        name: "employee_role",
        type: "input",
        message: "Please enter the employee's role."
        },
        {
            name: "salary",
            type: "input",
            message: "Please enter the employee's salary."
        },
        {
            name: "department_id",
            type: "input",
            message: "Please enter the employee's department id."
        }
    )
      .then(function (answer) {
          const query = "INSERT TO employee";
          connection.query(query, { answer }, function (err, res) {
              if (err) throw err;
              employeeTracker();
          }) 
    });
}

