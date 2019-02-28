/*
============================================
; Title:  Assignment 2.4 - EJS Views
; Author: Tyler Armstrong
; Date:   27 February 2019
; Modified By: N/A
; Description: Showcases EJS templating language.
;===========================================
*/

const express = require("express");

const http = require("http");

const app = express();

const path = require("path");

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", function(request, response) {
  response.render("index", {
      firstName: "Linda",
      lastName: "Lapointe<br>",
      address: "123 Jerry Dove Drive<br>Apt 123<br>Myrtle Beach, SC 12345"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("ejs-views app listening on port 8080.");
});
