/*
============================================
; Title:  Exercise 2.3 - Routes
; Author: Tyler Armstrong
; Date:   26 February 2019
; Modified By: N/A
; Description: Showcases Routes in Express
;===========================================
*/

const express = require("express");

const http = require("http");

const app = express();

app.get("/", function(request, response) {

  response.end("Welcome to the homepage!");

});

app.get("/about", function(request, response){
  response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response){
  response.end("Welcome to the contact page!");
});

app.use(function(request, response){
  response.statusCode = "404";
  response.end("404!");
});

http.createServer(app).listen(8080);
