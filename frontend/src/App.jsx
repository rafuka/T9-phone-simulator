import React, { useState } from 'react';
import {
    Screen,
    KeyPad,
} from './components';
import './App.global.scss';
import styles from './App.scss';

const App = () => {
    const [text, setText] = useState('');
    return (
        <div className={styles.base}>
            <div className={styles.innerWrapper}>
                <Screen text={text}/>
                <KeyPad />
            </div>
        </div>
    );
};

export default App;
