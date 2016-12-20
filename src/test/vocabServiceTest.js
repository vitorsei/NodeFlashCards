var expect = require('expect');
var vocabService = require('../services/vocabService')();

describe('Vocab Services', function () {
    describe('Helper methods', function () {

        it('removes formatting characters', function () {
            var sentenceSanitized = vocabService.Sanitize(' This is a sentence.\r\n\t ');
            expect('This is a sentence.').toBe(sentenceSanitized);
        });

        it('verifies new words', function () {
            var newWord = vocabService.IsNewWord('New word');
            expect(newWord).toBe(true);

            var notAWord = vocabService.IsNewWord('\t an explanation');
            expect(notAWord).toBe(false);

            var notAWord2 = vocabService.IsNewWord(' New word');
            expect(notAWord2).toBe(false);
        });

        it('verifies explanations', function () {
            var newExplanation = vocabService.IsNewExplanation('\t new explanation');
            expect(newExplanation).toBe(true);

            var notAnExplanation = vocabService.IsNewExplanation(' not an explanation');
            expect(notAnExplanation).toBe(false);
        });

        it('extracts all explanations', function () {
            var lines = ['\t exp1', '\t exp2', 'word'];
            var i = 0;
            var explanations = vocabService.ExtractExplanations(lines, i);

            expect(explanations).toEqual(['exp1', 'exp2']);
        });

        it('extracts all vocabs formatted', function () {
            var lines = ['term1', '\t exp1', '\t exp2', 'term2', '\texp1'];
            var vocabs = vocabService.ExtractVocab(lines);

            expect(vocabs).toEqual(['term1\texp1||exp2', 'term2\texp1']);
        });
    })
});