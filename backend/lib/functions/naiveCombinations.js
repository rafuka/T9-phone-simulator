import { NUM_CHAR_MAP } from '../constants';

function naiveCombinations(digits) {
    let combinations = NUM_CHAR_MAP[digits[0]];
    const result = [];
    
    for (let i = 1; i < digits.length; i++) {
        const temp = [];
        const nextChars = NUM_CHAR_MAP[digits[i]];

        for (let j = 0; j < combinations.length; j++) {
            for (let k = 0; k < nextChars.length; k++) {
                const newWord = combinations[j] + nextChars[k];
                
                if (newWord.length === digits.length) {
                    result.push(newWord);
                } else {
                    temp.push(newWord);
                }
            }
        }

        combinations = [...temp];
    }

    return result;
};

export default naiveCombinations;