'use strict';

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/**
 * Loads all routes from controllers folder
 */
function initRoutes() {
  var controllersFolder = path.join(__dirname, 'controllers/');
  fs.readdir(controllersFolder, function(error, files) {
    if (error) {
      console.log('Error loading routes', error.stack);
    }

    files.forEach(function(file) {
      var name = file.replace('.js', '');
      require(controllersFolder + name);
    });
  });
}

initRoutes();

app.listen(8080);
console.log('Server running at: http://localhost:8080');

// Make the app available to the outside
module.exports = app;
