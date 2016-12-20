//TODO:
//use ES6
// How to debug ES6
//ESLint



// var WriteFile = require('./services/fileService').writeFile;
// var vocabService = require('./services/vocabService')();
//
// var entryPath = "D:\\Seiji\\Vocab\\EngVocab.txt";
// var outputPath = "D:\\Seiji\\Vocab\\Test.txt";
//

// var vocabs = vocabService.ExtractVocab(lines);
// WriteFile(outputPath, vocabs);

// import {Vocab} from './models/vocab';
//
// let a = new Vocab('a', ['1', '2']);
//
// console.log(a);

import {ReadFile, WriteFile} from './services/fileService';

const entryPath = "D:\\Seiji\\Vocab\\EngVocab.txt";
let lines = ReadFile(entryPath);

console.log(lines);