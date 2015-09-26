'use strict';

var fs = require('fs');
var path = require('path');

var decorate = function(json, id) {
  if (Array.isArray(json)) {
    return json.map(function (item) {
      return decorate(item, id);
    });
  }
  var fileName = json.name + '.md';
  var filePath = path.join('./app/pages/', id, 'txt', fileName);
  json.content = fs.readFileSync(filePath, 'utf8');
  return json;
};

function writeFile(name, formattedJson) {
  var filePath = path.join('../app/data', name + '.json');
  var resolvedFilePath = path.resolve(filePath);
  console.log(resolvedFilePath);
  fs.writeFileSync(resolvedFilePath, formattedJson);
}


module.exports = {
  decorate: decorate,
  writeFile: writeFile
};
