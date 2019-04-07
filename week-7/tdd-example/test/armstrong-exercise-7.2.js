/*
============================================
; Title:  Assignment 7.2 - tdd example
; Author: Tyler Armstrong
; Date:   07 Apr 2019
; Modified By: N/A
; Description: Showcases tdd.
;===========================================
*/

var assert = require("assert");

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});

