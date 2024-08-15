// pages/index.js
import React from 'react';
import axios from 'axios';

const HomePage = ({ coins }) => {
    return (
        <div>
            <h1>Crypto Coins</h1>
            <ul>
                {coins.map(coin => (
                    <li key={coin.id}>
                        {coin.name}: ${coin.current_price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        return {
            props: { coins: response.data },
            revalidate: 60, // Re-generate the page every 60 seconds
        };
    } catch (error) {
        console.error('Error fetching the coins:', error);
        return {
            props: { coins: [] }, // Return an empty array on error
        };
    }
}

export default HomePage;