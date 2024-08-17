'use client'
import styles from './styles.module.scss';

import React, { useState } from 'react';

const Tabs = ({ pages }: any) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className={styles.main}>
            <div className={styles.tabs}>
                {pages && pages.map((page: any, index: number) => {
                    // console.log(page)
                    return (
                        <div
                            className={`${styles.tab} ${index === activeIndex ? styles.active : ''}`}
                            key={index}
                            onClick={() => {
                                // console.log('new index ', index);
                                // console.log('pages are ', pages);
                                setActiveIndex(index);
                            }}
                        >
                            <div className={styles.icon}>
                                {page.button}
                            </div>
                            <div> {page.title}</div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.page}>
                {pages[activeIndex].tab}
            </div>
        </div >
    );
};

export default Tabs;