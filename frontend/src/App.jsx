import React from 'react';
import {
    Screen,
    KeyPad,
} from './components';
import './App.global.scss';

const App = () => {
    return (
        <div>
            <Screen />
            <KeyPad />
        </div>
    );
};

export default App;
