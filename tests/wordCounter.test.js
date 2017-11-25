const wordCounter = require('../src/wordCounter');
const fileSamples = require('./_samples');

describe('wordCounter', () => {
    const minLength = 2;

    it('should return the number of occurrences for each word of 2 letters or more in a given text', () => {
        fileSamples.forEach((sample) => {
            const inventory = wordCounter(sample.input, minLength);
            expect(inventory).toEqual(sample.expect);
        });
    });

    // feel free to add more tests
    it('should return an empty object if input is empty', () => {
        const inventory = wordCounter('', minLength);

        expect(inventory).toEqual({});
    });

    it('should return an empty object if input is numbers', () => {
        const samples = ['1', '1 2', '12', '123', '12 345 6789'];

        samples.forEach((sample) => {
            const inventory = wordCounter(sample, minLength);
            expect(inventory).toEqual({});
        });
    });

    it('should return an empty object if input is special characters', () => {
        const samples = ['!', '! ?', '!?', '???', '!! ??? :;\'-'];

        samples.forEach((sample) => {
            const inventory = wordCounter(sample, minLength);
            expect(inventory).toEqual({});
        });
    });

    it('should return an empty object if input is words with a length of 1', () => {
        const samples = ['a', 'a e', 'a e i o u y'];

        samples.forEach((sample) => {
            const inventory = wordCounter(sample, minLength);
            expect(inventory).toEqual({});
        });
    });

    it('should return the right number of occurences if input is words with a length >= 2', () => {
        const inventoryOne = wordCounter('on', minLength);
        const inventoryMany = wordCounter('on a friday', minLength);

        expect(inventoryOne).toEqual({ on: 1 });
        expect(inventoryMany).toEqual({ on: 1, friday: 1 });
    });

    it('should return the right number of occurences if input is same words with different cases', () => {
        const sample = 'This is a case test. THIS IS A CASE TEST!!';

        const inventory = wordCounter(sample, minLength);

        expect(inventory).toEqual({
            this: 2,
            is: 2,
            case: 2,
            test: 2
        });
    });

    it('should return the right number of occurences if input is words with hyphens', () => {
        const sample = 'A moon-shaped pool';

        const inventory = wordCounter(sample, minLength);

        expect(inventory).toEqual({ moon: 1, shaped: 1, pool: 1 });
    });

    it('should return the right number of occurences if input is words with special letters', () => {
        const sample = "Un café au lait, s'il-vous-plaît!";

        const inventory = wordCounter(sample, minLength);

        expect(inventory).toEqual({
            un: 1,
            café: 1,
            au: 1,
            lait: 1,
            il: 1,
            vous: 1,
            plaît: 1
        });
    });

    it('should return the right number of occurences if input is words with a tab or new line', () => {
        const sample = `    Tab
        New line`;

        const inventory = wordCounter(sample, minLength);

        expect(inventory).toEqual({ tab: 1, new: 1, line: 1 });
    });
});
