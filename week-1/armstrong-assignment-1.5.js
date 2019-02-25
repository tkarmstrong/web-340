/*
============================================
; Title:  Assignment 1.5 - Hello World
; Author: Tyler Armstrong
; Date:   24 February 2019
; Modified By: N/A
; Description: Showcases Node.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Assignment 1.5") + '\n');

var http = require("http");

function processRequest(req, res) {

var body = "Hello World";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);
