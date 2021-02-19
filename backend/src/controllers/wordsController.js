import trieDictionary from '../../lib/trieDictionary';

const wordsController = {};

wordsController.insertWord = function(req, res) {
    const { word } = req.params;
    trieDictionary.insert(word);
    res.status(200);
    res.json({ message: `Word ${word} inserted successfully`});
};

export default wordsController;