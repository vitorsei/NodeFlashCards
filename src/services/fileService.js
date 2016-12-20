import fs from 'fs';

function ReadFile(path) {
    const result = fs.readFileSync(path);
    return result.toString().split("\n");
}

function WriteFile(path, array) {

    let file = fs.createWriteStream(path);
    file.on('error', function (err) {
        console.error(err);
    });

    array.forEach(function (item) {
        file.write(item + '\n');
    });

    file.end();
}

export {ReadFile, WriteFile};
