import dictionary from '../../lib/dictionary.json';
import { DictTrie } from '../../lib/classes';
import { naiveCombinations } from '../../lib/functions';

const trieDictionary = new DictTrie(dictionary);

const digitsController = {};

digitsController.getDictionaryWords = function(req, res) {
    const { digits } = req.params;
    const words = trieDictionary.getWords(digits);
    res.status(200);
    res.json(words);
};

digitsController.getNaiveCombinations = function(req, res) {
    const { digits } = req.params;
    const words = naiveCombinations(digits);
    res.status(200);
    res.json(words);
};

export default digitsController;