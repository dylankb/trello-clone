var path = require('path');
var fs = require('fs');
var filePath = path.resolve(path.dirname(__dirname), 'data/board.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  },
  get: function() {
    return this.__readFile().data;
  },
  set: function(data) {
    fs.writeFileSync(filePath, JSON.stringify({
      data: data,
    }), 'utf8');
  },
};
