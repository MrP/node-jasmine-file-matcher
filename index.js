var fs = require('fs');

var matchers = {
    toEqualFile: function(util, customEqualityTesters) {
        return {
            compare: function(actual, expected) {
                var result = {
                    pass: util.equals(fs.readFileSync(actual), fs.readFileSync(expected))
                };
                if (!result.pass) {
                    result.message = 'Expected the file \'' + actual + '\' to equal the file \'' + expected + '\'.';
                } else {
                    result.message = 'Expected the file \'' + actual + '\' to not equal the file \'' + expected + '\'.';
                }
                return result;
            }
        };
    },
};

module.exports = matchers;
