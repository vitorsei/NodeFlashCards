var fs = require('fs');

var readFile = function (path) {
    var result = fs.readFileSync(path);
    return result.toString().split("\n");
};

var writeFile = function (path, array) {

    var file = fs.createWriteStream(path);
    file.on('error', function(err) {
        console.error(err);
    });

    array.forEach(function(item) {
        file.write(item + '\n');
    });

    file.end();
};

module.exports.readFile = readFile;
module.exports.writeFile = writeFile;