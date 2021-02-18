import React from 'react';
import styles from './PadBtn.scss';

const PadBtn = ({
    value,
    subText,
}) => {
    return (
        <div className={styles.base}>
            <span className={styles.numValue}>{value}</span>
            <span className={styles.subText}>{subText}</span>
        </div>
    );
};

export default PadBtn;