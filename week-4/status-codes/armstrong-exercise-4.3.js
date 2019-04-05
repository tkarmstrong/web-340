/*
============================================
; Title:  Assignment 4.3 - Status Codes
; Author: Tyler Armstrong
; Date:   04 Apr 2019
; Modified By: N/A
; Description: Showcases Status Codes.
;===========================================
*/

let express = require("express");

let http = require('http');

let app = express();

app.get("/forbidden", function(req, res) {

  res.status(403);

  res.json({
      message: "403. There is a charm about the forbidden that makes it unspeakably desireable. -Mark Twain"
  })

});

app.get("/method", function(req, res) {

  res.status(405);

  res.json({
      message: "405. I don't dare do anything anymore, 'cause I'm afraid it's not allowed. -Anne Frank"
  })

});

app.get("/service", function(req, res) {

  res.status(503);

  res.json({
      message: "503. The truth you believe and cling to makes you unavailable to hear anything new. -Pema Chodron"
  })

});

http.createServer(app).listen(3000, function() {
 console.log("Application started on port 3000.");
});
