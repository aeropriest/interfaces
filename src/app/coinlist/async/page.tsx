// app/page.js
import React from 'react';

const HomePage = async () => {
    // Fetch data from the CoinGecko API
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
        cache: 'no-store', // Ensures fresh data on every request
    });

    const coins = await response.json();

    return (
        <div>
            <h1>Crypto Coins</h1>
            <ul>
                {coins.map((coin: any) => (
                    <li key={coin.id}>
                        {coin.name}: ${coin.current_price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;