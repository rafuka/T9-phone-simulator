import React from 'react';
import styles from './Screen.scss';

const Screen = ({
    text,
    currentWord,
    suggestionsList,
}) => {
    return (
        <div className={styles.base}>
            <div className={styles.screen}>
                {text}
                <span className={styles.currentWord}>{currentWord}</span>
            </div>
            <div className={styles.suggestionsList}>
                {suggestionsList.map((word) => (
                    <span className={styles.suggestedWord} key={word}>
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Screen;