import styles from './styles.module.scss'
import React from 'react';
import Navbar from '../components/navbar/page';
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

import Table from '../components/table/page';
import Header from '../components/header/page';
import Button from '../components/button/page';

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
    },
    // Additional coins
    {
        "image": "https://example.com/solana.png",
        "name": "Solana",
        "symbol": "SOL",
        "amount": 500000000,
        "changeToday": 5.0,
        "price": 45,
        "avgBuy": 30,
        "total": 22500000000,
        "totalChange": 2000
    },
    {
        "image": "https://example.com/polkadot.png",
        "name": "Polkadot",
        "symbol": "DOT",
        "amount": 1000000000,
        "changeToday": 4.1,
        "price": 8,
        "avgBuy": 5,
        "total": 8000000000,
        "totalChange": 400
    },
    {
        "image": "https://example.com/chainlink.png",
        "name": "Chainlink",
        "symbol": "LINK",
        "amount": 500000000,
        "changeToday": 3.0,
        "price": 25,
        "avgBuy": 12,
        "total": 12500000000,
        "totalChange": 800
    },
    {
        "image": "https://example.com/litecoin.png",
        "name": "Litecoin",
        "symbol": "LTC",
        "amount": 84000000,
        "changeToday": 2.5,
        "price": 150,
        "avgBuy": 50,
        "total": 12600000000,
        "totalChange": 500
    },
    {
        "image": "https://example.com/stellar.png",
        "name": "Stellar",
        "symbol": "XLM",
        "amount": 50000000000,
        "changeToday": 1.8,
        "price": 0.12,
        "avgBuy": 0.05,
        "total": 6000000000,
        "totalChange": 300
    }
];
const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.content}>
                <div className={styles.activity}>Dashboard</div>
                <div className={styles.actions}>
                    <Button caption='Receive' icon={<IoQrCodeOutline />}><IoQrCodeOutline /></Button>
                    <Button caption='Buy' icon={<CiWallet />} />
                    <Button caption='Swap' icon={<AiOutlineSwap />} />
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
                    {/* <Table tokens={tokens} /> */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;