/*
============================================
; Title:  app.js
; Author: Tyler Armstrong
; Date:   7 April 2019
; Description: Server file for the ems application
;===========================================
*/

// Require statements
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

// Assign model
const Employee = require("./models/employee");

// Connect to DB
const mongoDB = "mongodb+srv://test_user1:Pa$$word@ems-qmc0r.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to Atlas MongoDB instance");
});

// Setup csrf protection
const csrfProtection = csrf({cookie: true});

// Start express application
const app = express();

// Path to views, public directory
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

// Use dependencies
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

// Routes
  // Homepage
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page",
    year: new Date().getFullYear(),
    message: "EJS Test"
  });
});

  // List
app.get("/list", function(request, response) {
  Employee.find({}, function(error, employees) {
     if (error) throw error;
     response.render("list", {
         title: "Employee List",
         year: new Date().getFullYear(),
         employees: employees
     });
  });
});

  // List
  app.get("/new", function(request, response) {
    response.render("new", {
      title: "Add Employee",
      year: new Date().getFullYear(),
      message: "Add Employee"
    });
  });

  // View
  app.get("/view/:queryName", function(request, response) {
    var queryName = request.params.queryName;

    Employee.find({ lastName: queryName }, function(error, employees) {
      if (error) throw error;

      console.log(employees);

      if (employees.length > 0) {
        response.render("view", {
          title: "Employee Record",
          year: new Date().getFullYear(),
          employee: employees
        });
      } else {
        response.redirect("/list");
      }
    });
  });

  // Add Employee
app.get("/new", function(request, response) {
  if (error) throw error;
  response.render("new", {
    title: "New Employee"
  });
});

// Posts
  // EJS 'new' post
app.post("/process", function(request, response) {
  console.log(request.body.txtFirstName);
  console.log(request.body.txtLastName);

  // Model
  let employee = new Employee({
    firstName: request.body.txtFirstName,
    lastName: request.body.txtLastName
  });

  employee.save(function (error) {
    if (error) throw error;
    console.log(employee + " saved successfully!");
  });

  response.redirect("/list");
});

// Fire up Node server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
