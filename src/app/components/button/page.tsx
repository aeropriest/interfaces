import styles from './styles.module.scss';
import React from 'react';

const Button = (props: any) => {
    return (
        <div className={styles.main}>
            <div>
                {props.children}
            </div>
            <p></p>
            <div>
                {props.caption}
            </div>

        </div>
    );
};

export default Button;