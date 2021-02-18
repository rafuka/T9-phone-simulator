import { CHAR_NUM_MAP } from '../constants';

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
            const digit = CHAR_NUM_MAP[char];
            
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