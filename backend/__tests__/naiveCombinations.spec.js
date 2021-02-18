import { naiveCombinations } from '../lib/functions';

describe("Naive combinations function", () => {
    test("it should return an array containing all the possible combinations based on a string of digits", () => {
        let digits = '2';
        expect(naiveCombinations(digits)).toEqual(['a', 'b', 'c']);

        digits = '23';
        expect(naiveCombinations(digits)).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
    });
});