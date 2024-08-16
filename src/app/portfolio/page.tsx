import styles from './styles.module.scss'
import React from 'react';
import Navbar from '../components/navbar/page';
import { FaWallet } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { TbCirclesFilled } from "react-icons/tb";
import { RiNftFill } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { AiOutlineSwap } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import Table from '../components/table/page';

const tokens = [
    {
        "image": "https://example.com/bitcoin.png",
        "name": "Bitcoin",
        "symbol": "BTC",
        "amount": 21000000,
        "changeToday": 1.2,
        "price": 29500,
        "avgBuy": 10000,
        "total": 620500000000,
        "totalChange": 1000
    },
    {
        "image": "https://example.com/ethereum.png",
        "name": "Ethereum",
        "symbol": "ETH",
        "amount": 120000000,
        "changeToday": 3.5,
        "price": 1800,
        "avgBuy": 500,
        "total": 216000000000,
        "totalChange": 500
    },
    {
        "image": "https://example.com/tether.png",
        "name": "Tether",
        "symbol": "USDT",
        "amount": 78000000000,
        "changeToday": -0.1,
        "price": 1,
        "avgBuy": 1,
        "total": 78000000000,
        "totalChange": 0
    },
    {
        "image": "https://example.com/usd-coin.png",
        "name": "USD Coin",
        "symbol": "USDC",
        "amount": 55000000000,
        "changeToday": -0.2,
        "price": 1,
        "avgBuy": 1,
        "total": 55000000000,
        "totalChange": 0
    },
    {
        "image": "https://example.com/binance-coin.png",
        "name": "Binance Coin",
        "symbol": "BNB",
        "amount": 200000000,
        "changeToday": 2.8,
        "price": 310,
        "avgBuy": 20,
        "total": 62000000000,
        "totalChange": 1450
    },
    {
        "image": "https://example.com/xrp.png",
        "name": "XRP",
        "symbol": "XRP",
        "amount": 100000000000,
        "changeToday": 0.9,
        "price": 0.5,
        "avgBuy": 0.1,
        "total": 50000000000,
        "totalChange": 400
    },
    {
        "image": "https://example.com/cardano.png",
        "name": "Cardano",
        "symbol": "ADA",
        "amount": 45000000000,
        "changeToday": 1.5,
        "price": 0.55,
        "avgBuy": 0.05,
        "total": 24750000000,
        "totalChange": 1000
    },
    {
        "image": "https://example.com/dogecoin.png",
        "name": "Dogecoin",
        "symbol": "DOGE",
        "amount": 132000000000,
        "changeToday": 2.2,
        "price": 0.07,
        "avgBuy": 0.01,
        "total": 9240000000,
        "totalChange": 600
    }
]
const Portfolio = () => {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.logo}>logo here</div>
                <div className={styles.menus}>menus</div>
                <div className={styles.search}>search</div>
                <div className={styles.settings}>settings</div>
                <div className={styles.user}>user</div>
            </div>
            <div className={styles.main}>
                <div className={styles.navigation}>
                    <div className={styles.wallets}>
                        <div className={styles.walleticon}><FaWallet /></div>
                        <div>Wallets</div>
                    </div>
                    <Navbar items={[
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
                    ]} />
                </div>
                <div className={styles.submain}>
                    <div className={styles.activity}>Dashboard</div>
                    <div className={styles.actions}>
                        <button className={styles.cleanButton}>Receive</button>
                        <button className={styles.cleanButton}>Buy</button>
                        <button className={styles.cleanButton}>Swap</button>
                    </div>
                    <div className={styles.snapshot}>
                        <p className={styles.caption}>Total Worth  :</p>
                        <p className={styles.total}>$800,000.80</p>
                        <div className={styles.change}>
                            <p className={styles.absolute}>+8000.80</p>
                            <p className={styles.percent}>+80.80</p>
                            <p className={styles.period}>1W</p>
                        </div>
                    </div>
                    <div className={styles.portfolio}>
                        <Table tokens={tokens} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;