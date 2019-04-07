/*
============================================
; Title:  employee.js
; Author: Tyler Armstrong
; Date:   7 April 2019
; Description: File for the employee database model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);
