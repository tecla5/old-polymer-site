'use strict';

var app = require('../app');
var pages = require('../pages');
var util = require('../../util');

var routes = {
  pages: function(req, res) {
    var id = req.params.id;
    var write = req.query.write;
    console.log('params', req.params, req.query);

    res.setHeader('Content-Type', 'application/json');
    var page = pages[id];
    var json = util.decorate(page, id);
    var formattedJson = JSON.stringify(json, null, 4);
    if (write) {
      util.writeFile(id, formattedJson);
    }
    res.send(formattedJson);

  }
};

// Routes
app.get('/pages/:id', routes.pages);
