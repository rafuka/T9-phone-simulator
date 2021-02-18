import React from 'react';
import styles from './Screen.scss';

const Screen = ({
    text
}) => {
    return (
        <div className={styles.base}>
            <input
                className={styles.screen}
                type="text"
                value={text}
                disabled
            />
            <div className={styles.suggestionsList}>

            </div>
        </div>
    );
};

export default Screen;