var path = require('path');
var dir = require('node-dir');

var YAML = require('yamljs');

function load(file) {
  return YAML.load(file);
}

module.exports = function LinksGenerator(componentsBasePath) {
  return {
    createLink: function(componentPath) {
      var fullPath = path.join(componentsBasePath, componentPath);
      return '<link rel="import" href="' + fullPath + '"/>';
    },
    createLinks: function(file) {
      return load(file).map((item) => {
        return this.createLink(item);
      }).join('\n');
    },
    forFiles: function(ymlDir, cb) {
      dir.files(ymlDir, (err, files) => {
          if (err) {
            throw err;
          }

          var links = files.map((file) => {
            var header = '<!-- ' + path.basename(file, '.yml') + '-->';
            var links = this.createLinks(file);
            return [header, links].join('\n');
          }).join('\n');
          cb(links);
      });
    },
    forFile: function(ymlFile, cb) {
      var links = this.createLinks(ymlFile);
      cb(links);
    }
  };
};
