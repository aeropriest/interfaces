'use client'
import styles from './styles.module.scss';

import React, { useState } from 'react';

const Tabs = ({ pages }: any) => {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log('change the page ', activeIndex);
    return (
        <div className={styles.main}>
            <div className={styles.tabs}>
                {pages && pages.map((page: any, index: number) => {
                    return (
                        <button
                            className={styles.tab}
                            key={index}
                            onClick={() => {
                                console.log('new index ', index);
                                console.log('pages are ', pages);
                                setActiveIndex(index);
                            }}
                        >
                            {page.title}
                        </button>
                    )
                })}
            </div>
            <div className={styles.page}>
                {pages[activeIndex].tab}
            </div>
        </div>
    );
};

export default Tabs;