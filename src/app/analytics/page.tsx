import React from 'react';
import Tabs from '../components/tabs/page';
import Table from '../components/table/page';
import { IoBarChart } from "react-icons/io5";
import { PiSpeedometerFill } from "react-icons/pi";
import { GiTwoCoins } from "react-icons/gi";
import styles from './styles.module.scss'
interface Asset {
    type: 'blue_chip' | 'defi' | 'nft' | 'web3' | 'gaming' | 'other';
    protocol: string;
    token: string;
    amount: number;
    price: number;
    value: number;
    market_cap: number;
    circulating_supply?: number; // Optional, as some NFTs may not have this
    total_supply?: number; // Optional, specific to NFTs
    all_time_high: number;
    last_updated: string; // ISO 8601 format
    icon: string; // URL to the asset icon
}

const portfolio = [
    {
        "type": "blue_chip",
        "protocol": "Bitcoin",
        "token": "BTC",
        "amount": 0.75,
        "price": 30000,
        "value": 22500,
        "market_cap": 600000000000,
        "circulating_supply": 19000000,
        "all_time_high": 69000,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/bitcoin-btc-logo.png"
    },
    {
        "type": "blue_chip",
        "protocol": "Ethereum",
        "token": "ETH",
        "amount": 5,
        "price": 2000,
        "value": 10000,
        "market_cap": 220000000000,
        "circulating_supply": 120000000,
        "all_time_high": 4800,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/ethereum-eth-logo.png"
    },
    {
        "type": "defi",
        "protocol": "Uniswap",
        "token": "UNI",
        "amount": 1200,
        "price": 5,
        "value": 6000,
        "market_cap": 5000000000,
        "circulating_supply": 1000000000,
        "all_time_high": 44.97,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/uniswap-uni-logo.png"
    },
    {
        "type": "defi",
        "protocol": "Aave",
        "token": "AAVE",
        "amount": 50,
        "price": 150,
        "value": 7500,
        "market_cap": 2000000000,
        "circulating_supply": 16000000,
        "all_time_high": 661.69,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/aave-aave-logo.png"
    },
    {
        "type": "nft",
        "protocol": "Bored Ape Yacht Club",
        "token": "BAYC",
        "amount": 1,
        "price": 100000,
        "value": 100000,
        "market_cap": 1000000000,
        "total_supply": 10000,
        "all_time_high": 400000,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/bored-ape-yacht-club-bayc-logo.png"
    },
    {
        "type": "nft",
        "protocol": "CryptoPunks",
        "token": "PUNK",
        "amount": 0.5,
        "price": 200000,
        "value": 100000,
        "market_cap": 1000000000,
        "total_supply": 10000,
        "all_time_high": 4200000,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/cryptopunks-punk-logo.png"
    },
    {
        "type": "web3",
        "protocol": "Filecoin",
        "token": "FIL",
        "amount": 300,
        "price": 20,
        "value": 6000,
        "market_cap": 4000000000,
        "circulating_supply": 400000000,
        "all_time_high": 236.84,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/filecoin-fil-logo.png"
    },
    {
        "type": "web3",
        "protocol": "The Graph",
        "token": "GRT",
        "amount": 5000,
        "price": 0.5,
        "value": 2500,
        "market_cap": 2000000000,
        "circulating_supply": 10000000000,
        "all_time_high": 2.88,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/the-graph-grt-logo.png"
    },
    {
        "type": "gaming",
        "protocol": "Axie Infinity",
        "token": "AXS",
        "amount": 100,
        "price": 25,
        "value": 2500,
        "market_cap": 1500000000,
        "circulating_supply": 270000000,
        "all_time_high": 164.90,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/axie-infinity-axs-logo.png"
    },
    {
        "type": "gaming",
        "protocol": "Decentraland",
        "token": "MANA",
        "amount": 1000,
        "price": 0.75,
        "value": 750,
        "market_cap": 1500000000,
        "circulating_supply": 2000000000,
        "all_time_high": 5.90,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/decentraland-mana-logo.png"
    },
    {
        "type": "other",
        "protocol": "Chainlink",
        "token": "LINK",
        "amount": 300,
        "price": 5,
        "value": 1500,
        "market_cap": 5000000000,
        "circulating_supply": 1000000000,
        "all_time_high": 52.88,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/chainlink-link-logo.png"
    },
    {
        "type": "other",
        "protocol": "Polygon",
        "token": "MATIC",
        "amount": 2000,
        "price": 0.8,
        "value": 1600,
        "market_cap": 8000000000,
        "circulating_supply": 10000000000,
        "all_time_high": 2.92,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/polygon-matic-logo.png"
    },
    {
        "type": "blue_chip",
        "protocol": "Solana",
        "token": "SOL",
        "amount": 50,
        "price": 20,
        "value": 1000,
        "market_cap": 100000000000,
        "circulating_supply": 400000000,
        "all_time_high": 260,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/solana-sol-logo.png"
    },
    {
        "type": "defi",
        "protocol": "Saber",
        "token": "SBR",
        "amount": 5000,
        "price": 0.15,
        "value": 750,
        "market_cap": 150000000,
        "circulating_supply": 1000000000,
        "all_time_high": 3.00,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/saber-sbr-logo.png"
    },
    {
        "type": "nft",
        "protocol": "Solana Monkey Business",
        "token": "SMB",
        "amount": 2,
        "price": 3000,
        "value": 6000,
        "market_cap": 50000000,
        "total_supply": 5000,
        "all_time_high": 10000,
        "last_updated": "2024-08-17T12:00:00Z",
        "icon": "https://cryptologos.cc/logos/solana-monkey-business-smb-logo.png"
    }
]

const Analytics = () => {

    // const assetsByType = portfolio.reduce((acc: any, asset: Asset) => {
    //     const { type, value } = asset;
    //     if (!acc[type]) {
    //         acc[type] = 0;
    //     }
    //     acc[type] += value;
    //     return acc;
    // }, {});


    const Template = (graph: any) => {
        return <div style={{
            width: '100%',
            margin: '20px 0',
            fontSize: '1.5rem',
            fontWeight: 'bold',
        }}>
            Asset Allocation
            <div style={{
                display: 'flex',
                width: '100%',
                margin: '20px auto',
                borderRadius: '1rem',
                backgroundColor: 'rgba(100,100,100,0.2)'
            }}>
                <div style={{
                    height: '100px',
                }}>
                    {graph}
                </div>
            </div>
        </div>
    }

    const AssetAllocation = () => {
        return Template(<p>show the graph here</p>);
    }
    const PortfolioPerformance = () => {
        return (<div style={{
            display: 'flex',
            width: '100%',
        }}>Portfolio Performance</div>);
    }
    const WalletAnalyzer = () => {
        return (<div style={{
            display: 'flex',
            width: '100%',
        }}>Wallet Analyzer</div>);
    }



    return (
        <div className="styles.body">
            <Tabs pages={[
                {
                    title: 'Asset Allocation',
                    tab: <AssetAllocation />,
                    button: <GiTwoCoins />
                },
                {
                    title: 'Portfolio Performance',
                    tab: <PortfolioPerformance />,
                    button: <IoBarChart />,

                },
                {
                    title: 'Wallet Analyzer',
                    tab: <WalletAnalyzer />,
                    button: <PiSpeedometerFill />,

                },
            ]}
            />
        </div >
    )

};

export default Analytics;