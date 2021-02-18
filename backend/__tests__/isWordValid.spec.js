import { isWordValid } from '../lib/functions';

describe("Word validation function", () => {
    test("it should return true if the word is formed by alphabetical characters only.", () => {
        const word = 'cheese';
        expect(isWordValid(word)).toEqual(true);
    });

    test("it should return false if word contains non-alphabetical characters", () => {
        const word = 'abc x';
        expect(isWordValid(word)).toEqual(false);
    });
});