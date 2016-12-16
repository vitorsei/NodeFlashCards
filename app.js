//TODO: debug node.js
//use ES6
//TDD
//ESLint

var Vocab = require('./src/vocab');
var ReadFile = require('./src/fileService').readFile;
var WriteFile = require('./src/fileService').writeFile;
var vocabService = require('./src/vocabService')();

var vocabEntryPath = "D:\\Seiji\\Vocab\\EngVocab.txt";
var vocabOutputPath = "D:\\Seiji\\Vocab\\Test.txt";

var vocabs = [];

var lines = ReadFile(vocabEntryPath);
console.log(lines);


var word = '';
var explanations = [];

var length = lines.length;
for (var i = 0; i < length; i++) {
    if (!vocabService.IsNullOrWhiteSpace(lines[i])) {
        if (vocabService.IsNewWord(lines[i])) {
            word = vocabService.Sanitize(lines[i]);
            explanations = vocabService.ExtractExplanations(lines, ++i);
            vocabs.push(new Vocab(word, explanations));
        }
    }
}

var formattedVocabs = vocabs.map(function (vocab) {
    return vocab.word + '\t' + vocab.explanations.join('||');
});

WriteFile(vocabOutputPath, formattedVocabs);