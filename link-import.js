// Loads a dir with yaml file and generates <link rel="import" statements
// that are written to a file
// TODO: integrate with Gulp!!!

var utils = require('./utils');
var LinksGenerator = utils.LinksGenerator;
var fs = require('fs');
var path = require('path');

var ymlBaseDir = path.join(__dirname, 'app', 'elements', 'imports');
var libComponentsBasePath = '../bower_components/';

var importsLinksGen = new LinksGenerator(libComponentsBasePath);
importsLinksGen.forFiles(ymlBaseDir, function(links) {
  var filePath = 'app/elements/import-elements.html';
  console.log('write', filePath);
  fs.writeFileSync(filePath, links);
});

var appYmlFile = path.join(__dirname, 'app', 'elements', 'app.yml');
var appComponentsBasePath = './';

var appLinksGen = new LinksGenerator(appComponentsBasePath);
appLinksGen.forFile(appYmlFile, function(links) {
  var filePath = 'app/elements/app-elements.html';
  console.log('write', filePath);
  fs.writeFileSync(filePath, links);
});


