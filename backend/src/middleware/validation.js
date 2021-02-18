import { on } from 'events';
import {
    areDigitsValid,
    isWordValid,
} from '../../lib/functions';

export function digitsValidation(req, res, next) {
    const { digits } = req.params;
    if (areDigitsValid(digits)) {
        return next();
    } else {
        res.status(422).json({ error: "Can only process digits from 2 to 9"})
    }
}

export function wordValidation(req, res, next) {
    const { word } = req.params;
    if(isWordValid(word)) {
        return next();
    } else {
        res.status(422).json({ error: "Can only process words with alphabetical letters." })
    }
}