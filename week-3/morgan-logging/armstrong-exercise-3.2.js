/*
============================================
; Title:  Assignment 3.2 - Morgan
; Author: Tyler Armstrong
; Date:   04 Apr 2019
; Modified By: N/A
; Description: Showcases logging with Morgan.
;===========================================
*/

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function (request, response) {

  response.render("index", {

    message: "This is my custom message!"

  });

});

http.createServer(app).listen(8080, function () {

  console.log("Application started on port 8080");

});
