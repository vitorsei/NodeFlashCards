var expect = require('expect');
var stringHelper = require('../helpers/stringHelper');

describe('String Helper', function () {
    describe('Helper methods', function () {

        it('is true if the string is null or white space', function () {
            var isNull = stringHelper.IsNullOrWhiteSpace('');
            expect(isNull).toBe(true);
        });

        it('is false if the string is not null', function () {
            var notNull = stringHelper.IsNullOrWhiteSpace('not null');
            expect(notNull).toBe(false);
        });
    })
});