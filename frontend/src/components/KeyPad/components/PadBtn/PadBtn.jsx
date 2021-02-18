import React, { forwardRef } from 'react';
import styles from './PadBtn.scss';

const PadBtn = forwardRef(({
    value,
    subText,
    onClick,
}, ref) => {
    return (
        <div className={styles.base} ref={ref} onClick={onClick}>
            <span className={styles.numValue}>{value}</span>
            <span className={styles.subText}>{subText}</span>
        </div>
    );
});

export default PadBtn;