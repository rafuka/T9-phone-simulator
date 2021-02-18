import React, { useEffect, useRef } from 'react';
import { PadBtn } from './components';
import styles from './KeyPad.scss';

const KeyPad = () => {
    const refs = useRef({});

    useEffect(() => {
        const keyPressHandler = getKeyPressHandler(refs);
        window.addEventListener('keydown', keyPressHandler);

        return () => {
            window.removeEventListener('keydown', keyPressHandler);
        }
    });

    return ( // TODO: extract keypad values and subtext to a constant key-value pair and then iterate on it
        <div className={styles.base}>
            <PadBtn value="1" ref={(ref) => refs.current['1'] = ref} />
            <PadBtn value="2" subText="abc" ref={(ref) => refs.current['2'] = ref} />
            <PadBtn value="3" subText="def" ref={(ref) => refs.current['3'] = ref} />
            <PadBtn value="4" subText="ghi" ref={(ref) => refs.current['4'] = ref} />
            <PadBtn value="5" subText="jkl" ref={(ref) => refs.current['5'] = ref} />
            <PadBtn value="6" subText="mno" ref={(ref) => refs.current['6'] = ref} />
            <PadBtn value="7" subText="pqrs" ref={(ref) => refs.current['7'] = ref} />
            <PadBtn value="8" subText="tuv" ref={(ref) => refs.current['8'] = ref} />
            <PadBtn value="9" subText="wxyz" ref={(ref) => refs.current['9'] = ref} />
            <PadBtn value="*" subText="->" ref={(ref) => refs.current['*'] = ref} />
            <PadBtn value="0" subText="_" ref={(ref) => refs.current['0'] = ref} />
            <PadBtn value="+" subText="add" ref={(ref) => refs.current['+'] = ref} />
        </div>
    );
};

function getKeyPressHandler(refs) {
    return function(e) {
        if (refs.current[e.key]) {
            refs.current[e.key].click();
        }
    }
};

export default KeyPad;