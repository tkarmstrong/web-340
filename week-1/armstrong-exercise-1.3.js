/*
============================================
; Title:  Exercise 1.4 - Duck Typing
; Author: Tyler Armstrong
; Date:   24 February 2019
; Modified By: N/A
; Description: Showcases JavaScript Duck Typing aka "Interfaces."
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 1.4") + '\n');

var url = require("url");

var parsedURL = url.parse("https://github.com/tkarmstrong");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);
