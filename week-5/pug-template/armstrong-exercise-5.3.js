/*
============================================
; Title:  Assignment 5.3 - Pug Template
; Author: Tyler Armstrong
; Date:   04 Apr 2019
; Modified By: N/A
; Description: Showcases using Pug templating language.
;===========================================
*/

const express = require("express");

const http = require("http");

const pug = require("pug");

const path = require("path");

const app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(request, response) {

    response.render("index", {
      message: "Welcome to my Pug based homepage!"
    });

});


http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
