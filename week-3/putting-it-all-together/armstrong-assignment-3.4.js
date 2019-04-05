/*
============================================
; Title:  Assignment 3.4 - Putting It All Together
; Author: Tyler Armstrong
; Date:   04 Apr 2019
; Modified By: N/A
; Description: Showcases logging with Morgan & advanced routing.
;===========================================
*/

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {

    response.render("index", {

        message: "home page"

    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    })

});

app.get("/products", function(request, response) {

   response.render("products", {

       message: "products page"

   });

});

http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080.");

});
