//TODO:
//how to debug node.js
//use ES6
//TDD
//ESLint

var ReadFile = require('./src/fileService').readFile;
var WriteFile = require('./src/fileService').writeFile;
var vocabService = require('./src/vocabService')();

var entryPath = "D:\\Seiji\\Vocab\\EngVocab.txt";
var outputPath = "D:\\Seiji\\Vocab\\Test.txt";

var lines = ReadFile(entryPath);
var vocabs = vocabService.ExtractVocab(lines);
WriteFile(outputPath, vocabs);