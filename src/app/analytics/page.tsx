import React from 'react';
import Tabs from '../components/tabs/page';
import Table from '../components/table/page';
import { IoBarChart } from "react-icons/io5";
import { PiSpeedometerFill } from "react-icons/pi";
import { GiTwoCoins } from "react-icons/gi";

const Analytics = () => {
    const AssetAllocation = () => {
        return (<div style={{
            display: 'flex',
            width: '100%',
        }}>Asset Allocation</div>);
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