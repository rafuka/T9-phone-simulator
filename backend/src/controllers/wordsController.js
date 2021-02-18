const wordsController = {};

wordsController.insertWord = function(req, res) {
    const { word } = req.params;
    trieDictionary.insert(word);
    res.status(200);
    res.end();
};

export default wordsController;