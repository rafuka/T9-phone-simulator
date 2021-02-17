const numToCharMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
};

function naiveCombinations(digits) {
    let combinations = numToCharMap[digits[0]];
    const result = [];
    
    for (let i = 1; i < digits.length; i++) {
        const temp = [];
        const nextChars = numToCharMap[digits[i]];

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