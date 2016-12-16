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

fs.readFile("D:\\Seiji\\Vocab\\EngVocab.txt", function (err, result) {
    if (err) {
        console.error(err);
    }

    var lines = result.toString().split("\n");

    var length = lines.length;
    var word = '';
    var explanations = [];

    for (var i = 0; i < length; i++) {
        if (!IsNullOrWhiteSpace(lines[i])) {
            if (IsNewWord(lines[i])) {
                word = lines[i].replace('\r', '');
                explanations = ExtractExplanations(lines, ++i);
                vocabs.push(new Vocab(word, explanations));
            }
        }
    }

    var formattedVocabs = vocabs.map(function (vocab) {
        return vocab.word + '\t' + vocab.explanations.join('||');
    });

    console.log(formattedVocabs);

    // fs.writeFile("D:\\Seiji\\Vocab\\Test.txt", vocabs, function (err) {
    //     if (err){
    //         return console.error(err);
    //     }
    // });
});



function IsNullOrWhiteSpace(string) {
    return !/\S/.test(string);
}

function IsNewExplanation(string) {
    return string.startsWith('\t') || string.startsWith(' ');
}

function ExtractExplanations(lines, i) {
    var explanations = [];
    while (IsNewExplanation(lines[i])) {
        explanations.push(lines[i]);
        i++;
    }

    return explanations;
}

function IsNewWord(word) {
    var regex = new RegExp('^[a-z]', 'gi');
    return word.match(regex);
}

