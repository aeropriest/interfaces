'use client'
import './styles.css'

import React, { useEffect, useState } from 'react';
const CRYPTO_PRICES_API_BASE_URL = 'api/cryptocurrencies'

export default function CryptoPrices() {
  const [coins, setCoins] = useState<any>([]);
  const [hasMore, setHasMore] = useState<any>(true);
  const [page, setPage] = useState<any>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadPrices = async (pageNumber: any) => {
    setLoading(true);
    const url = `${CRYPTO_PRICES_API_BASE_URL}?page=${pageNumber}`;
    console.log(url);
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setHasMore(data.hasMore);
        setCoins(data.coins)
      })
      .catch(err => {
        console.log(err)
        setError(JSON.stringify(err));
      })
      .finally(() => {
        setLoading(false);
      })

  }
  useEffect(() => {
    loadPrices(page);
  }, [page])

  const gotoLastPage = () => {
    if (page > 1) {
      setPage((prev: number) => prev - 1);
    }
  };

  const gotoNextPage = () => {

    if (hasMore) {
      setPage((prev: number) => prev + 1);
    }
  };


  return (
    <>
      <h1>Crypto Prices</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <td>Coin</td><td>Price</td><td>Market Cap</td>
          </tr>
        </thead>
        <tbody>
          {coins && coins.map((coin: any, index: any) => {
            return (
              <tr key={index}>
                <td>{coin.name}</td><td>{coin.price}</td><td>{coin.marketCap}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <button disabled={page <= 1} onClick={gotoLastPage}>Last</button>
        <button disabled={!hasMore} onClick={gotoNextPage}>Next</button>
      </div>
    </>
  );
}
