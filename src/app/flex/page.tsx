import styles from './styles.module.scss'

import React from 'react';

const Flex = () => {
  return (
    <section className={styles.section}>
        <div className={styles.red}>RED 1</div>
        <div className={styles.green}>GREEN 1</div>
        <div className={styles.blue}>BLUE 1</div>
        <div className={styles.red}>RED</div>
        <div className={styles.green}>GREEN</div>
        <div className={styles.blue}>BLUE</div>
        <div className={styles.red}>RED 2</div>
        <div className={styles.green}>GREEN 2</div>
        <div className={styles.blue}>BLUE 2</div>
        <div className={styles.red}>RED</div>
        <div className={styles.green}>GREEN</div>
    </section>
  );
};

export default Flex;