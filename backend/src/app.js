import express from 'express';
import {
    digitsValidation,
    wordValidation,
} from './middleware/validation';
import {
    digitsController,
    wordsController,
} from './controllers';

const app = express();

app.get('/words/:digits', digitsValidation, digitsController.getDictionaryWords);
app.get('/naive/:digits', digitsValidation, digitsController.getNaiveCombinations);
app.get('/insert/:word', wordValidation, wordsController.insertWord);

export default app;