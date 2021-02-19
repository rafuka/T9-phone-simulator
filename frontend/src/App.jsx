import React, { useState, useEffect } from 'react';
import {
    Screen,
    KeyPad,
} from './components';
import './App.global.scss';
import styles from './App.scss';

const App = () => {
    const [text, setText] = useState('');
    const [currentWord, setCurrentWord] = useState({ word: '', index: 0});
    const [currentDigits, setCurrentDigits] = useState('');
    const [suggestionsList, setSuggestionsList] = useState([]);

    const handleKeypadBtnPressed = (key) => {
        // console.log('on keypad btn pressed handler!', key);
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
                break;
            default:
                setCurrentDigits(currentDigits + key);
        }
    };

    const acceptCurrentSuggestion = () => {
        // console.log('on acceptCurrentSuggestion ');
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

    useEffect(() => {
        if(currentDigits) {
            fetch(`http://localhost:3000/words/${currentDigits}`)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
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
    }, [currentDigits])
 
    return (
        <div className={styles.base}>
            <div className={styles.innerWrapper}>
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
    );
};


export default App;
