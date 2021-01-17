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
});

const employeeTracker = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
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
    .prompt([{
      name: "id",
      type: "input",
      message: "Please enter the new employee's id."
    },
        {
            name: "first_name",
            type: "input",
            message: "Please enter employee's first name"
        },
        {
            name: "last_name",
            type: "input",
            message: "Please enter the employee's last name."
        }]
    )
      .then(function (answer) {
          const query = "INSERT INTO employee SET ?";
          connection.query(query, answer, (err, res) => {
              if (err) throw err;
              employeeTracker();
          }) 
    });
}

const addRole = () => {
  inquirer
    .prompt([{
      name: "id",
      type: "input",
      message: "Please enter the employee's id."
    },
    {
        name: "role_title",
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
        }]
    )
      .then(function (answer) {
          const query = "INSERT INTO employee_role SET ?";
          connection.query(query, answer, (err, res) => {
              if (err) throw err;
              employeeTracker();
          }) 
    });
}

const addDepartment = () => {
  inquirer
    .prompt([{
      name: "id",
      type: "input",
      message: "Please enter the new department's id."
    },
        {
            name: "department_name",
            type: "input",
            message: "Please enter the department's name"
        }],
    )
      .then(function (answer) {
          const query = "INSERT INTO department SET ?";
          connection.query(query, answer, function (err, res) {
              if (err) throw err;
              employeeTracker();
          }) 
    });
}

const viewEmployee = () => {
    const query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        employeeTracker(); 
    });
}

const viewRole = () => {
    const query = "SELECT * FROM employee_role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        employeeTracker(); 
    });
}

const viewDepartments = () => {
    const query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        employeeTracker(); 
    });
}

const updateRole = () => {
  inquirer
    .prompt([{
      name: "update_employee",
      type: "input",
      message: "Please enter the employee's id number that you would like to update"
    },
    {
      name: "employee_new_role",
      type: "input",
      message: "Please enter the employee's new role"
    }]
    )
    .then(function (answer) {
      const query = "UPDATE position SET role_title = ? WHERE = ?";
      connection.query(query, [req.body.quote, req.params.id],
        function (err, res) {
          if (err) throw err;
          console.table(res)
        }
      )
      employeeTracker();
    }
    )
};
