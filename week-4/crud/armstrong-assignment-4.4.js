/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.\n\n");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.\n\n");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request.\n\n");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request.\n\n");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
