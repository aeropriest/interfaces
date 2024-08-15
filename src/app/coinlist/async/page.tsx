// app/page.js
'use client';

import React, { use } from 'react';
import { cache } from 'react';

const fetchCoins = cache(async () => {
    // Simulate a 5-second delay
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    setTimeout(() => {
    }, 3000);

    try {
        // Fetch data from the CoinGecko API
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
            cache: 'no-store', // Ensures fresh data on every request
        });

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const coins = await response.json();
        return coins;
    } catch (error) {
        console.error('Error fetching coins:', error);
        throw error;
    }
});

const LoadingComponent = () => {
    return (
        <div>
            <h2>Loading...</h2>
            <p>Please wait while we fetch the latest crypto coin data.</p>
        </div>
    );
};

const ErrorComponent = ({ error: any }) => {
    return (
        <div>
            <h2>Error</h2>
            <p>An error occurred while fetching the data: {error?.message}</p>
        </div>
    );
};

const HomePage = () => {
    const coins = use(fetchCoins());

    return (
        <div>
            <h1>Crypto Coins</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <tr key={coin.id}>
                            <td>{coin.name}</td>
                            <td>${coin.current_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const App = () => {
    return (
        <React.Suspense fallback={<LoadingComponent />}>
            <HomePage />
        </React.Suspense>
    );
};

export default App;
// // app/page.js
// 'use client';

// import { use } from 'react';
// import { cache } from 'react';

// const fetchCoins = cache(async () => {
//     // Fetch data from the CoinGecko API
//     const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
//         cache: 'no-store', // Ensures fresh data on every request
//     });

//     const coins = await response.json();
//     return coins;
// });

// const HomePage = () => {
//     const coins = use(fetchCoins());

//     return (
//         <div>
//             <h1>Crypto Coins</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {coins.map((coin) => (
//                         <tr key={coin.id}>
//                             <td>{coin.name}</td>
//                             <td>${coin.current_price}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default HomePage;