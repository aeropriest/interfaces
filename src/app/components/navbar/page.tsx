import styles from './styles.module.scss'
import React from 'react';
import Link from 'next/link';

import { FaWallet } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { TbCirclesFilled } from "react-icons/tb";
import { RiNftFill } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineSwap } from "react-icons/ai";
import { IoQrCodeOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";

const items = [
    {
        "icon": <MdDashboard />,
        "label": "Dashboard",
        "path": "/"
    },
    {
        "icon": <MdAnalytics />,
        "label": "Analytics",
        "path": "/analytics"
    },
    {
        "icon": <TbCirclesFilled />,
        "label": "Assets",
        "path": "/assets"
    },
    {
        "icon": <RiNftFill />,
        "label": "NFTs",
        "path": "/nfts"
    },
    {
        "icon": <AiOutlineTransaction />,
        "label": "Transactions",
        "path": "/transactions"
    },
    {
        "icon": <AiOutlineSwap />,
        "label": "Swap",
        "path": "/swap"
    },
    {
        "icon": <IoIosSettings />,
        "label": "Settings",
        "path": "/settings"
    }
]
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.wallets}>
                <div className={styles.walleticon}><FaWallet /></div>
                <div>Wallets</div>
            </div>
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