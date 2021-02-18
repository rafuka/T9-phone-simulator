import React from 'react';
import { PadBtn } from './components';
import styles from './KeyPad.scss';

const KeyPad = () => {
    return (
        <div className={styles.base}>
            <PadBtn value="1" />
            <PadBtn value="2" subText="abc"/>
            <PadBtn value="3" subText="def"/>
            <PadBtn value="4" subText="ghi"/>
            <PadBtn value="5" subText="jkl"/>
            <PadBtn value="6" subText="mno"/>
            <PadBtn value="7" subText="pqrs"/>
            <PadBtn value="8" subText="tuv"/>
            <PadBtn value="9" subText="wxyz"/>
            <PadBtn value="*" subText="->"/>
            <PadBtn value="0" subText="_"/>
            <PadBtn value="+" subText="add"/>
        </div>
    );
};

export default KeyPad;