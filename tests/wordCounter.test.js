const wordCounter = require('../src/wordCounter');
const samples = require('./_samples');


describe('wordCounter', () => {
    it('returns the number of occurrences for each word of 2 letters or more in a given text', () => {
        samples.forEach((sample) => {
            const inventory = wordCounter(sample.input, 2);
            expect(inventory).toEqual(sample.expect);
        });
    });

    // feel free to add more tests
});
