import { NUMBER_BINARY_OPERATORS } from '@babel/types';
import React from 'react';
import styles from './Screen.scss';

const Screen = ({
    text,
    currentWord,
    suggestionsList,
    hasSpace,
}) => {
    return (
        <div className={styles.base}>
            <div className={styles.screen}>
                <span className={styles.text}>{hasSpace ? text.slice(0, -1) : text}</span>
                {hasSpace ? <span>&nbsp;</span> : null}
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