/*
============================================
; Title:  employee.js
; Author: Tyler Armstrong
; Date:   7 April 2019
; Description: File for the employee database model
;===========================================
*/

// Require statements
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

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

// Start express application
const app = express();

// Path to views, public directory
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

// Use dependencies
app.use(logger("short"));

// Homepage
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page",
    year: new Date().getFullYear()
  });
});

// Fire up Node server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
