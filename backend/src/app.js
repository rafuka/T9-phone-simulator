import express from 'express';
import {
    digitsValidation,
    wordValidation,
} from './middleware/validation';
import {
    digitsController,
    wordsController,
} from './controllers';

import cors from 'cors';

const app = express();

app.use(cors());

app.get('/words/:digits', digitsValidation, digitsController.getDictionaryWords);
app.get('/naive/:digits', digitsValidation, digitsController.getNaiveCombinations);
app.get('/insert/:word', wordValidation, wordsController.insertWord);

export default app;