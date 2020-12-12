'use strict';

const express = require('express');
// const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost:27017/users');

const Users = require('../models/User');
const asyncHandler = require('../middleware/async');

app.disable('x-powered-by');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

  

// @desc      Search base on names
// @route     POST /api/v1/search
// @access    Private
exports.Search = asyncHandler(async (req, res) => {
var regex = new RegExp(req.query["term"], 'i');
var query = User.find({city: regex}, { 'city': 1 }).sort({"country":-1}).sort({"region":-1}).limit(20);
    
   // Execute query in a callback and return users list
query.exec(function(err, users) {
   if (!err) {
      // Method to construct the json result set
      var result = buildResultSet(users);
      res.send(result, {
         'Content-Type': 'application/json'
      }, 200);
   } else {
      res.send(JSON.stringify(err), {
         'Content-Type': 'application/json'
      }, 404);
   }
});
});
