'use strict';

var app = require('../app');
var pages = require('../pages');
var util = require('../../util');

var routes = {
  pages: function(req, res) {
    var id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    var page = pages[id];
    console.log('page', id, page);
    var json = util.decorate(page, id);
    res.send(JSON.stringify(json));
  }
};

// Routes
app.get('/pages/:id', routes.pages);
