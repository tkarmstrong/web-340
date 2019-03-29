/*
============================================
; Title:  armstrong-exercise-6.3.js
; Author: Tyler Armstrong
; Date:   29 March 2019
; Description: Demos MongoDB Atlas connection.
;===========================================
*/

// Connect to mongoose plugin
const mongoose = require("mongoose");

// Connection string to connect to DB
const mongoDB = "mongodb+srv://test_user1:Pa$$word@ems-qmc0r.mongodb.net/test?retryWrites=true";

// Mongoose's connection method
mongoose.connect(mongoDB, {
  // Enables to connect to MongoDB without having to escape special characters
    // Other option is to remove this property and escape characters
  useNewUrlParser: true
});

// No longer needed in Mongoose v5+ since global promise is inherent
  // Was a requirement of Mongoose v4.x.x
mongoose.Promise = global.Promise;

// Assign variable to the default Mongoose connection
const db = mongoose.connection;

// If connection errors, log error to console.
db.on("error", console.error.bind(console, "MongoDB connected error: "));

// If connection is successful, log success message in console.
db.once("open", function() {
  console.log("Application connected to Atlas MongoDB instance");
});
