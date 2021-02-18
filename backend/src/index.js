import express from 'express';
import {
    naiveCombinations,
    DictTrie,
    dictionary
} from '../lib';

const trieDictionary = new DictTrie(dictionary);

const app = express();

app.get('/words/:digits', (req, res) => {
    const { digits } = req.params;
    const words = trieDictionary.getWords(digits);
    res.end(JSON.stringify(words));
});

app.get('/naive/:digits', (req, res) => {
    const { digits } = req.params;
    const words = naiveCombinations(digits);
    res.end(JSON.stringify(words));
});

app.get('/insert/:word', (req, res) => {
    const { word } = req.params;
    trieDictionary.insert(word);
    res.status(200);
    res.end();
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});