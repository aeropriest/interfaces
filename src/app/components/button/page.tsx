import styles from './styles.module.scss';
import React from 'react';

const Button = (props: any) => {
    return (
        <div className={styles.main}>
            <div className={styles.icon}>{props.icon}</div>
            {props.caption}
        </div>
    );
};

export default Button;