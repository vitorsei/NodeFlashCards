//TODO: debug node.js
//use ES6
//TDD
//ESLint

var fs = require('fs');

function Vocab(word, explanations) {
    this.word = word;
    this.explanations = explanations;
}

var vocabs = [];

var result = fs.readFileSync("D:\\Seiji\\Vocab\\EngVocab.txt", 'utf8');

var lines = result.toString().split("\n");
console.log(lines);

var length = lines.length;
var word = '';
var explanations = [];

for (var i = 0; i < length; i++) {
    if (!IsNullOrWhiteSpace(lines[i])) {
        if (IsNewWord(lines[i])) {
            word = Sanitize(lines[i]);
            explanations = ExtractExplanations(lines, ++i);
            vocabs.push(new Vocab(word, explanations));
        }
    }
}

var formattedVocabs = vocabs.map(function (vocab) {
    return vocab.word + '\t' + vocab.explanations.join('||');
});

var file = fs.createWriteStream("D:\\Seiji\\Vocab\\Test.txt");
file.on('error', function(err) {
    console.error(err);
});

formattedVocabs.forEach(function(vocab) {
    file.write(vocab + '\n');
});

file.end();


// fs.readFile("D:\\Seiji\\Vocab\\EngVocab.txt", function (err, result) {
//     if (err) {
//         console.error(err);
//     }
//
//     var lines = result.toString().split("\n");
//
//     var length = lines.length;
//     var word = '';
//     var explanations = [];
//
//     for (var i = 0; i < length; i++) {
//         if (!IsNullOrWhiteSpace(lines[i])) {
//             if (IsNewWord(lines[i])) {
//                 word = Sanitize(lines[i]);
//                 explanations = ExtractExplanations(lines, ++i);
//                 vocabs.push(new Vocab(word, explanations));
//             }
//         }
//     }
//
//     var formattedVocabs = vocabs.map(function (vocab) {
//         return vocab.word + '\t' + vocab.explanations.join('||');
//     });
//
//     var file = fs.createWriteStream("D:\\Seiji\\Vocab\\Test.txt");
//     file.on('error', function(err) {
//         console.error(err);
//     });
//
//     formattedVocabs.forEach(function(vocab) {
//         file.write(vocab + '\n');
//     });
//
//     file.end();
// });

function Sanitize(string) {
    return string
                .replace('\r', '')
                .replace('\t', '')
                .replace('\n', '')
                .trim();
}

function IsNullOrWhiteSpace(string) {
    return !/\S/.test(string);
}

function IsNewExplanation(string) {
    return string.startsWith('\t') || string.startsWith(' ');
}

function ExtractExplanations(lines, i) {
    var explanations = [];
    while (IsNewExplanation(lines[i])) {
        explanations.push(Sanitize(lines[i]));
        i++;
    }

    return explanations;
}

function IsNewWord(word) {
    var regex = new RegExp('^[a-z|\s]', 'gi');
    return word.match(regex);
}

