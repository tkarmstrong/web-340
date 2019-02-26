/*
============================================
; Title:  Exercise 2.2 - Hello World
; Author: Professor Krasso
; Date:   24 February 2019
; Modified By: Tyler Armstrong
; Description: Showcases Express's app server.
;===========================================
*/

const express = require("express");

const http = require("http");

const app = express();

app.use(function(request, response){
  console.log(`In comes a request to: ${request.url}`);
  response.end("Hello World");
});

http.createServer(app).listen(8080);
