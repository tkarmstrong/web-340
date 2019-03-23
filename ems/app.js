const express = require("express");

const http = require("http");

const path = require("path");

const logger = require("morgan");

const app = express();

app.set("views", path.resolve(__dirname, "views"));

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response) {

  response.render("index", {
    title: "Home page",
    year: new Date().getFullYear()
  });

});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
