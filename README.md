# node-jasmine-file-matcher
Matches a file's contents to another file's contents.

Install with:

```
npm install --save-dev node-jasmine-file-matcher
```

Then use like this:

```
var fileMatcher = require('node-jasmine-file-matcher');

describe('check those files', function () {
    beforeEach(function() {
        jasmine.addMatchers(fileMatcher);
    });

    it('checks them', function () {
        expect('path/to/actualFile.txt').toEqualFile('path/to/expectedFile.txt');
    });
});
```
