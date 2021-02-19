import { wordToDigits } from '../helpers';

describe("Function wordToDigits", () => {
    test("it should return a string of numerical characters that correspond to the digits that would form the input word", () => {
        let word = 'cat';

        expect(wordToDigits(word)).toEqual('228');

        word = 'limli';
        expect(wordToDigits(word)).toEqual('54654');

        expect(wordToDigits('12345')).toEqual('');
    });
});