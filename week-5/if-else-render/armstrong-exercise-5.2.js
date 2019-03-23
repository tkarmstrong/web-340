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
