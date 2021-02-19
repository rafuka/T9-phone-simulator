import React, { useState, useEffect } from 'react';
import { Screen, KeyPad } from './components';
import { wordToDigits } from './helpers';
import { KEYPAD_KEYS } from './constants';
import { BASE_URL, BACKEND_PORT } from '../../settings';
import './App.global.scss';
import styles from './App.scss';


const apiUrl = `${BASE_URL}:${BACKEND_PORT}`;

const App = () => {
    const [text, setText] = useState('');
    const [currentWord, setCurrentWord] = useState({ word: '', index: 0 });
    const [currentDigits, setCurrentDigits] = useState('');
    const [suggestionsList, setSuggestionsList] = useState([]);
    const [naiveMode, setNaiveMode] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);
    const [withSpace, setWithSpace] = useState(false);

    const handleKeypadBtnPressed = (key) => {
        switch (key) {
            case "0":
                deselectOrSpace()
                break;
            case "1":
                deleteFromCurrentSelection();
                break;
            case "*":
                selectNextSuggestion(1);
                break;
            case "+":
                addWordToDictionary();
                break;
            default:
                setCurrentDigits(currentDigits + key);
        }
    };

    const deleteFromCurrentSelection = () => {
        if (currentDigits.length > 0) {
            setCurrentDigits(currentDigits.slice(0, -1));
        }
    }

    const deselectOrSpace = () => {
        if (currentWord.word !== '') {
            const newText = text + currentWord.word;
            setText(newText);
            setCurrentWord({ word: '', index: 0 });
            setCurrentDigits('');
            setSuggestionsList([]);
            setWithSpace(false);
        } else if (text[text.length - 1] !== ' ') {  // if there's no current selection, just add a space
            const newText = text + ' ';
            setText(newText);
            setWithSpace(true);
        }
    };

    const selectNextSuggestion = (step) => {
        const { index } = currentWord;
        const newIndex = (index + step) % suggestionsList.length;
        setCurrentWord({
            word: suggestionsList[newIndex],
            index: newIndex,
        });
    };

    const addWordToDictionary = () => {
        if (currentWord.word !== '') {
            fetch(`${apiUrl}/insert/${currentWord.word}`)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    setSuggestionsList([result.message])
                });
        } else {
            const textArr = text.split(' ');
            const newCurrentWord = textArr.slice(-1)[0];
            const newText = textArr.slice(0, -1).join(' ') + ' ';

            setText(newText);
            setCurrentWord({ word: newCurrentWord, index: 0 });
            setIsAddMode(true);
            setCurrentDigits(wordToDigits(newCurrentWord));
        }
    };

    useEffect(() => {
        if (currentDigits) {
            fetch(`${apiUrl}/${naiveMode ? 'naive' : 'words'}/${currentDigits}`)
                .then(response => response.json())
                .then(result => {
                    if (result.length > 0) {
                        if (isAddMode) {
                            setSuggestionsList(result);
                            setCurrentWord({ word: currentWord.word, index: -1 });
                            setIsAddMode(false);
                        } else {
                            setSuggestionsList(result);
                            setCurrentWord({ word: result[0], index: 0 });
                        }
                    } else {
                        setSuggestionsList([`No suggestions found for digits: ${currentDigits}.`]);
                    }
                });
        } else {
            setSuggestionsList([]);
            setCurrentWord({ word: '', index: 0 });
        }
    }, [currentDigits, naiveMode])

    return (
        <div className={styles.base}>
            <div className={styles.innerWrapper}>
                <button
                    className={styles.modeButton}
                    onClick={() => setNaiveMode(!naiveMode)}
                >
                    {naiveMode ? 'Naive mode' : 'Dictionary mode'}
                </button>

                <div className={styles.phoneWrapper}>
                    <Screen
                        text={text}
                        currentWord={currentWord.word}
                        suggestionsList={suggestionsList}
                        hasSpace={withSpace}
                    />
                    <KeyPad
                        onKeypadBtnPressed={handleKeypadBtnPressed}
                        keys={KEYPAD_KEYS}
                    />
                </div>
            </div>
        </div>
    );
};


export default App;
