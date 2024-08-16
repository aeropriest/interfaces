import styles from './styles.module.scss'
import React from 'react';

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

const Table = ({ tokens }: any) => {
    console.log(tokens);
    return (<div>
        <div className={styles.header}>
            <div className={styles.text}>Name</div>
            <div className={styles.numbers}>Amount</div>
            <div className={styles.numbers}>24H Change</div>
            <div className={styles.numbers}>Price</div>
            <div className={styles.numbers}>Avg Buy</div>
            <div className={styles.numbers}>Total</div>
            <div className={styles.numbers}>All Time</div>
        </div>
        {tokens.map((item: any, index: number) => {
            return (<div className={styles.row}>
                <div className={styles.text}>{item.name}</div>
                <div className={styles.numbers}>{item.price}</div>
                <div className={styles.numbers}>{item.amount}</div>
                <div className={styles.numbers}>{item.changeToday}</div>
                <div className={styles.numbers}>{item.avgBuy}</div>
                <div className={styles.numbers}>{item.total}</div>
                <div className={styles.numbers}>{item.totalChange}</div>
            </div>)
        })}
    </div >
    );
};

export default Table;