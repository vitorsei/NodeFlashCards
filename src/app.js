//TODO:
//How to debug ES6
//How to use mocha with ES6
//ESLint

import {ReadFile, WriteFile} from './services/fileService';
import vocabService from './services/vocabService';

const entryPath = "D:\\Seiji\\Vocab\\EngVocab.txt";
const outputPath = "D:\\Seiji\\Vocab\\Test.txt";

const lines = ReadFile(entryPath);
const vocabs = vocabService.ExtractVocab(lines);
WriteFile(outputPath, vocabs);