import React, { useEffect, useRef } from 'react';
import { PadBtn } from './components';
import styles from './KeyPad.scss';


const KeyPad = ({
    onKeypadBtnPressed,
    keys,
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