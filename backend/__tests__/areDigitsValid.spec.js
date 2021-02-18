import { areDigitsValid } from '../lib/functions';

describe("Digits validation function", () => {
    test("it should return true if digits are numbers from 2 to 9", () => {
        const digits = '67895';
        expect(areDigitsValid(digits)).toEqual(true);
    });

    test("it should return false if digits contain non-numerical characters", () => {
        const digits = 'abc856';
        expect(areDigitsValid(digits)).toEqual(false);
    });

    test("it should return false if digits contains the numbers 0 or 1", () => {
        let digits = '0786';
        expect(areDigitsValid(digits)).toEqual(false);

        digits = '1876';
        expect(areDigitsValid(digits)).toEqual(false);
    });
});