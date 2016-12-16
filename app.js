//TODO:
//how to debug node.js
//use ES6
//TDD
//ESLint

var ReadFile = require('./src/fileService').readFile;
var WriteFile = require('./src/fileService').writeFile;
var vocabService = require('./src/vocabService')();

var vocabEntryPath = "D:\\Seiji\\Vocab\\EngVocab.txt";
var vocabOutputPath = "D:\\Seiji\\Vocab\\Test.txt";

var lines = ReadFile(vocabEntryPath);
var vocabs = vocabService.ExtractVocab(lines);
WriteFile(vocabOutputPath, vocabs);