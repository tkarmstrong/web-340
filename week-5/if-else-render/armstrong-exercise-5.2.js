/*
============================================
; Title:  Assignment 5.2 - if else render
; Author: Tyler Armstrong
; Date:   04 Apr 2019
; Modified By: N/A
; Description: Showcases if else render in ejs.
;===========================================
*/

const express = require("express");

const http = require("http");

const path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var names = [
  "Tyler",
  "Riley",
  "Joyce",
  "Kent"
];


app.get("/", function(request, response) {

    response.render("index", {
        names: names
    })

});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
