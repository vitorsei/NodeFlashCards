import {ReadFile, WriteFile} from "./services/fileService";
import VocabService from "./services/vocabService";

const entryPath = "D:\\Seiji\\Vocab\\EngVocab.txt";
const outputPath = "D:\\Seiji\\Vocab\\Test.txt";

const lines = ReadFile(entryPath);
const vocabs = VocabService.ExtractVocab(lines);
WriteFile(outputPath, vocabs);