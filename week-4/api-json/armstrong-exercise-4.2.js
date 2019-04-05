/*
============================================
; Title:  Exercise 4.2 - API JSON
; Author: Tyler Armstrong
; Date:   04 Apr 2019
; Modified By: N/A
; Description: Showcases API JSON.
;===========================================
*/

let express = require('express');

let http = require('http');

let app = express();

app.get('/car/:id', function(request, response){

  const id = parseInt(request.params.id, 10);

  response.json({
    "make" : "Chevrolet",
    "model" : "Z28 Camaro",
    "year" : "1994",
    "id" : id
  });

});

// Note to self: No get to the homepage or '/'. Will return "Cannot GET /"
http.createServer(app).listen(3000, function() {
  console.log("Application started on port 3000");
});
