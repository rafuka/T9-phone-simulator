var charToNumMap = {
    'a': 2, 'b': 2, 'c': 2,
    'd': 3, 'e': 3, 'f': 3,
    'g': 4, 'h': 4, 'i': 4,
    'j': 5, 'k': 5, 'l': 5,
    'm': 6, 'n': 6, 'o': 6,
    'p': 7, 'q': 7, 'r': 7, 's': 7,
    't': 8, 'u': 8, 'v': 8,
    'w': 9, 'x': 9, 'y': 9, 'z': 9
};

class DictTrie {
    constructor(dictionary) {
        this.children = {}
        this.words = [];

        if (dictionary) {
            for (let word of Object.keys(dictionary)) {
                this.insert(word);
            }
        }
    }
    
    insert(word) {
        let node = this;

        for (let i = 0; i < word.length; i++) {
            
            const char = word[i];
            const digit = charToNumMap[char];
            
            if (node.children[digit]) {
                node = node.children[digit];
            } else {
                node.children[digit] = new DictTrie();
                node = node.children[digit];
            }
        }

        if (!node.words.includes(word)) {
            node.words.push(word);
        }
    }

    getWords(digits) {
        let node = this;

        for (let i = 0; i < digits.length; i++) {
            const digit = digits[i];

            if (node.children[digit]) {
                node = node.children[digit];
            } else {
                return [];
            }
        }

        return node.words;
    }
};

export default DictTrie;