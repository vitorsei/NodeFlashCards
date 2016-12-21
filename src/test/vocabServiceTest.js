import expect from 'expect';
import VocabService from '../services/VocabService';

describe('Vocab Services', () => {
    describe('Helper methods', () => {

        it('removes formatting characters', () => {
            let sentenceSanitized = VocabService.Sanitize(' This is a sentence.\r\n\t ');
            expect('This is a sentence.').toBe(sentenceSanitized);
        });

        it('verifies new words', () => {
            let newWord = VocabService.IsNewWord('New word');
            expect(newWord).toBe(true);

            let notAWord = VocabService.IsNewWord('\t an explanation');
            expect(notAWord).toBe(false);

            let notAWord2 = VocabService.IsNewWord(' New word');
            expect(notAWord2).toBe(false);
        });

        it('verifies explanations', () => {
            let newExplanation = VocabService.IsNewExplanation('\t new explanation');
            expect(newExplanation).toBe(true);

            let notAnExplanation = VocabService.IsNewExplanation(' not an explanation');
            expect(notAnExplanation).toBe(false);
        });

        it('extracts all explanations', () => {
            let lines = ['\t exp1', '\t exp2', 'word'];
            let i = 0;
            let explanations = VocabService.ExtractExplanations(lines, i);

            expect(explanations).toEqual(['exp1', 'exp2']);
        });

        it('extracts all vocabs formatted', () => {
            let lines = ['term1', '\t exp1', '\t exp2', 'term2', '\texp1'];
            let vocabs = VocabService.ExtractVocab(lines);

            expect(vocabs).toEqual(['term1\texp1||exp2', 'term2\texp1']);
        });
    });
});