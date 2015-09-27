// Loads a dir with yaml file and generates <link rel="import" statements
// that are written to a file
// TODO: integrate with Gulp!!!

var utils = require('./utils');
var fs = require('fs');
var path = require('path');

var ymlBaseDir = path.join(__dirname, 'app', 'elements', 'imports');
var linkMapper = new utils.LinkMapper('../bower_components/');
var importsLinksGen = new utils.LinksGenerator(linkMapper);
importsLinksGen.forFiles(ymlBaseDir, function(links) {
  var filePath = 'app/elements/import-elements.html';
  console.log('write', filePath);
  fs.writeFileSync(filePath, links);
});

var appYmlFile = path.join(__dirname, 'app', 'elements', 'app.yml');

var linkMapper = new utils.LinkMapper('./');
var appLinksGen = new utils.LinksGenerator(linkMapper);
appLinksGen.forFile(appYmlFile, function(links) {
  var filePath = 'app/elements/app-elements.html';
  console.log('write', filePath);
  fs.writeFileSync(filePath, links);
});


