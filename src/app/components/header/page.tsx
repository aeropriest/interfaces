import styles from './styles.module.scss'
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

import React from 'react';

const Header = (props: any) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Degen Ledger</div>
            {/* <div className={styles.menus}>
                <p>Portfolio</p>
                <p>Swap</p>
            </div> */}
            <div className={styles.right}>
                <div className={styles.search}>
                    <CiSearch />
                    <input className={styles.textInput} type='text' name='search' placeholder='Assets, Wallets..' />
                </div>
                <div className={styles.settings}><CiSettings /></div>
                <div className={styles.user}><FaUserCircle /></div>

            </div>
        </div>
    );
};

export default Header;