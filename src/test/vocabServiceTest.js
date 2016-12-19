var expect = require('expect');
var vocabService = require('../vocabService')();

describe('Vocab Services', function () {
    describe('Helper methods', function () {

        it('removes formatting characters', function () {
            var sentenceSanitized = vocabService.Sanitize(' This is a sentence.\r\n\t ');
            expect('This is a sentence.').toBe(sentenceSanitized);
        });


    })
});