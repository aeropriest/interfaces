import styles from './styles.module.scss'
import React from 'react';
import Link from 'next/link';

const Navbar = ({ items }: any) => {
    return (
        <div className={styles.navbar}>
            {items.map((item: any, index: number) => (
                <Link
                    key={index}
                    href={item.path}
                    className={styles.navItem}
                >
                    <div className={styles.icon}>{item.icon}</div>
                    <span className={styles.label}>{item.label}</span>
                </Link>
            ))}
        </div>
    );
};

export default Navbar;