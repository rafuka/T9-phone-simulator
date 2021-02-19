import React, { useEffect, useRef } from 'react';
import { PadBtn } from './components';
import styles from './KeyPad.scss';

const keys = [
    { value: "1", subText: "delete" },
    { value: "2", subText: "abc" },
    { value: "3", subText: "def" },
    { value: "4", subText: "ghi" },
    { value: "5", subText: "jkl" },
    { value: "6", subText: "mno" },
    { value: "7", subText: "pqrs" },
    { value: "8", subText: "tuv" },
    { value: "9", subText: "wxyz" },
    { value: "*", subText: "next->" },
    { value: "0", subText: "_" },
    { value: "+", subText: "select | add" },
]

const KeyPad = ({
    onKeypadBtnPressed,
}) => {
    const refs = useRef({});

    const getKeypadPressHandler = (refs) => {
        return function(e) {
            if (refs.current[e.key]) {
                refs.current[e.key].click();
            }
        }
    };

    useEffect(() => {
        const keypadPressHandler = getKeypadPressHandler(refs);
        window.addEventListener('keydown', keypadPressHandler);

        return () => {
            window.removeEventListener('keydown', keypadPressHandler);
        }
    }, []);

    return (
        <div className={styles.base}>
            {keys.map(key => (
                <PadBtn
                    key={key.subText}
                    value={key.value}
                    subText={key.subText}
                    ref={ref => refs.current[key.value] = ref}
                    onClick={() => onKeypadBtnPressed(key.value)}
                />
            ))}
        </div>
    );
};


export default KeyPad;