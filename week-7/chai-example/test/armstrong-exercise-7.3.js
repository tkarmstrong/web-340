/*
============================================
; Title:  Assignment 7.3 - chai example
; Author: Tyler Armstrong
; Date:   07 Apr 2019
; Modified By: N/A
; Description: Showcases tdd.
;===========================================
*/

var fruits = require("../armstrong-fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));

    });

});
