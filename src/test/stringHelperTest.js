import expect from 'expect';
import StringHelper from '../helpers/stringHelper';

describe('String Helper', () => {
    describe('Helper methods', () => {

        it('is true if the string is null or white space', () => {
            let isNull = StringHelper.IsNullOrWhiteSpace('');
            expect(isNull).toBe(true);
        });

        it('is false if the string is not null', () => {
            let notNull = StringHelper.IsNullOrWhiteSpace('not null');
            expect(notNull).toBe(false);
        });
    })
});