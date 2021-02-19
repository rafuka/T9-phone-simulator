import React, { useState, useEffect } from 'react';
import {
    Screen,
    KeyPad,
} from './components';
import './App.global.scss';
import styles from './App.scss';

const BASE_URL = 'http://localhost:3000';

const App = () => {
    const [text, setText] = useState('');
    const [currentWord, setCurrentWord] = useState({ word: '', index: 0});
    const [currentDigits, setCurrentDigits] = useState('');
    const [suggestionsList, setSuggestionsList] = useState([]);
    const [naiveMode, setNaiveMode] = useState(false);

    const handleKeypadBtnPressed = (key) => {
        switch(key) {
            case "0":
                acceptCurrentSuggestion()
                break;
            case "1":
                setCurrentDigits(currentDigits.slice(0, -1));
                break;
            case "*":
                handleSelectSuggestion(1);
                break;
            case "+":
                handleAddWordToDictionary();
                break;
            default:
                setCurrentDigits(currentDigits + key);
        }
    };

    const acceptCurrentSuggestion = () => {
        if (currentWord.word !== '') {
            const newText = text + currentWord.word;
            setText(newText);
            setCurrentWord({ word: '', index: 0 });
            setCurrentDigits('');
            setSuggestionsList([]);
        } else {
            const newText = text + ' ';
            console.log('new text: ', newText);
            setText(newText);
        }
    };

    const handleSelectSuggestion = (value) => {
        const { index } = currentWord;
        const newIndex = (index + value) % suggestionsList.length;
        setCurrentWord({
            word: suggestionsList[newIndex],
            index: newIndex,
        });
    };

    const handleAddWordToDictionary = () => {
        if(currentWord.word !== '') {
            fetch(`${BASE_URL}/insert/${currentWord.word}`)
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
        }
    };

    useEffect(() => {
        if(currentDigits) {
            fetch(`${BASE_URL}/${naiveMode ? 'naive' : 'words'}/${currentDigits}`)
                .then(response => response.json())
                .then(result => {
                    if(result.length > 0) {
                        setSuggestionsList(result);
                        setCurrentWord({ word: result[0], index: 0 });
                    } else {
                        setSuggestionsList([`No suggestions found for digits: ${currentDigits}`]);
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
                    />
                    <KeyPad
                        onKeypadBtnPressed={handleKeypadBtnPressed}
                        onSelectSuggestion={handleSelectSuggestion}
                    />
                </div>
            </div>
        </div>
    );
};


export default App;
