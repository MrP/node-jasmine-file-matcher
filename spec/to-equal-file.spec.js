/*global jasmine, expect*/
var fileMatcher = require('../index.js');

describe("toEqualFile", function() {
    beforeEach(function() {
        jasmine.addMatchers(fileMatcher);
    });

    it('matches when the files are the same', function () {
        expect('spec/testFile.txt').toEqualFile('spec/testFileSame.txt');
    });

    it('matches negated when the files are not he same', function () {
        expect('spec/testFile.txt').not.toEqualFile('spec/testFileDifferent.txt');
    });
});
