import React from 'react';
import Tabs from '../components/tabs/page';
import Table from '../components/table/page';

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
                    title: 'Asset Allocation', tab: <AssetAllocation />,
                },
                {
                    title: 'Portfolio Performance', tab: <PortfolioPerformance />

                },
                {
                    title: 'Wallet Analyzer', tab: <WalletAnalyzer />,
                },
            ]}
            />
        </div >
    )

};

export default Analytics;