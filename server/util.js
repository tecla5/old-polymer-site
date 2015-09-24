'use strict';

var fs = require('fs');
var path = require('path');

var decorate = function(json, id) {
  if (Array.isArray(json)) {
    return json.map(item => decorate(item, id));
  }
  console.log('json', json);
  var fileName = json.content + '.md';
  var filePath = path.join('./app/pages/', id, 'txt', fileName);
  json.content = fs.readFileSync(filePath, 'utf8');
  return json;
};

module.exports = {
  decorate: decorate
};